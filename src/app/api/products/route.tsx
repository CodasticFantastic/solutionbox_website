import { NextRequest, NextResponse } from "next/server";
import { Prisma, UserRole } from "@prisma/client";
import { auth } from "@/app/auth/auth";
import { deleteFile, uploadFile } from "../libs/uploads";
import { prismaClient } from "@/prisma/prisma";
import slugify from "slugify";

// [PUBLIC] [GET] - Get product by ID or all products
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const productId = searchParams.get("id");
    const searchString = searchParams.get("searchString")?.trim();

    // Get single product by ID
    if (productId) {
      const product = await prismaClient.product.findUnique({
        where: { id: Number(productId) },
        include: { categories: { include: { category: true } } },
      });

      if (!product) {
        return NextResponse.json(
          { error: "Produkt nie znaleziony" },
          { status: 404 }
        );
      }

      return NextResponse.json({
        ...product,
        images: JSON.parse(product.images as string),
        productFeatures: JSON.parse(product.productFeatures as string),
      });
    }

    // Prepare search condition based on search string
    const whereCondition: Prisma.ProductWhereInput = searchString
      ? {
          OR: [
            { name: { contains: searchString.toLowerCase() } },
            { producer: { contains: searchString.toLowerCase() } },
          ],
        }
      : {};

    // Get all products
    const products = await prismaClient.product.findMany({
      where: whereCondition,
      include: { categories: { include: { category: true } } },
    });

    return NextResponse.json(
      products.map((p) => ({
        ...p,
        images: JSON.parse(p.images as string),
        productFeatures: JSON.parse(p.productFeatures as string),
      }))
    );
  } catch (error) {
    console.error("Błąd pobierania produktów:", error);
    return NextResponse.json(
      { error: "Błąd serwera", details: error },
      { status: 500 }
    );
  }
}

// [PRIVATE] [POST] - Create new product
export async function POST(req: NextRequest) {
  const session = await auth();

  if (!session || session.user.role !== UserRole.ADMIN) {
    return NextResponse.json({ error: "Brak uprawnień" }, { status: 403 });
  }

  try {
    const formData = await req.formData();

    const seoTitle = formData.get("seoTitle") as string;
    const seoDescription = formData.get("seoDescription") as string;
    const producer = formData.get("producer") as string;
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const specification = formData.get("specification") as string;
    const price = formData.get("price") as string;
    const images = formData.getAll("images") as File[];
    const productFeatures = formData.get("productFeatures") as string;
    const defaultImageIndex = formData.get("defaultImageIndex") as string;

    if (!seoTitle || !seoDescription || !producer || !name) {
      return NextResponse.json(
        { error: "Brak wymaganych pól" },
        { status: 400 }
      );
    }

    // Generate images json to store in database
    const uploadedImages: { img: string; isDefault: boolean }[] = [];

    if (images.length > 0) {
      const uploadPromises = images.map(async (image, index) => {
        const imageUrl = await uploadFile(image);
        return {
          img: imageUrl,
          isDefault: index === Number(defaultImageIndex),
        };
      });

      const results = await Promise.all(uploadPromises);
      uploadedImages.push(...results);
    }

    // Generate slug
    const slug = slugify(name, { lower: true, strict: true });

    // Create product in database
    const product = await prismaClient.product.create({
      data: {
        seoTitle,
        seoDescription,
        producer,
        name,
        slug,
        description,
        specification,
        price: price ? Prisma.Decimal(price) : undefined,
        images: JSON.stringify(uploadedImages),
        productFeatures: productFeatures ? productFeatures : "[]",
      },
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error("ERROR", error);
    return NextResponse.json(
      { error: "Błąd tworzenia produktu" },
      { status: 400 }
    );
  }
}

// [PRIVATE] [PUT] - Update existing product
export async function PUT(req: NextRequest) {
  const session = await auth();

  if (!session || session.user.role !== UserRole.ADMIN) {
    return NextResponse.json({ error: "Brak uprawnień" }, { status: 403 });
  }

  try {
    const formData = await req.formData();
    const productId = formData.get("productId") as string;

    if (!productId) {
      return NextResponse.json({ error: "Brak ID produktu" }, { status: 400 });
    }

    // Get edited product
    const existingProduct = await prismaClient.product.findUnique({
      where: { id: Number(productId) },
    });

    if (!existingProduct) {
      return NextResponse.json(
        { error: "Produkt nie istnieje" },
        { status: 404 }
      );
    }

    // Get form values
    const seoTitle = formData.get("seoTitle") as string;
    const seoDescription = formData.get("seoDescription") as string;
    const producer = formData.get("producer") as string;
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const specification = formData.get("specification") as string;
    const price = formData.get("price") as string;
    const images = formData.getAll("images") as File[];
    const productFeatures = formData.get("productFeatures") as string;
    const defaultImageIndex = formData.get("defaultImageIndex") as string;

    if (!seoTitle || !seoDescription || !producer || !name) {
      return NextResponse.json(
        { error: "Brak wymaganych pól" },
        { status: 400 }
      );
    }

    // Delete old images
    if (existingProduct.images) {
      const oldImages: {
        img: string;
        isDefault: boolean;
      }[] = JSON.parse(existingProduct.images as string);

      const deletePromises = oldImages.map(async (image) => {
        try {
          await deleteFile(image.img);
        } catch (error) {
          console.error(`Błąd usuwania pliku ${image.img}:`, error);
        }
      });

      await Promise.all(deletePromises);
    }

    // Save new images
    const uploadedImages: { img: string; isDefault: boolean }[] = [];

    if (images.length > 0) {
      const uploadPromises = images.map(async (image, index) => {
        const imageUrl = await uploadFile(image);
        return {
          img: imageUrl,
          isDefault: index === Number(defaultImageIndex),
        };
      });

      const results = await Promise.all(uploadPromises);
      uploadedImages.push(...results);
    }

    // Update slug
    const slug = slugify(name, { lower: true, strict: true });

    // Update product in database
    const updatedProduct = await prismaClient.product.update({
      where: { id: Number(productId) },
      data: {
        seoTitle,
        seoDescription,
        producer,
        name,
        slug,
        description,
        specification,
        price: price ? Prisma.Decimal(price) : undefined,
        images: JSON.stringify(uploadedImages),
        productFeatures: productFeatures ? productFeatures : "[]",
      },
    });

    return NextResponse.json(updatedProduct, { status: 200 });
  } catch (error) {
    console.error("ERROR", error);
    return NextResponse.json(
      { error: "Błąd aktualizacji produktu" },
      { status: 400 }
    );
  }
}

// [PRIVATE] [DELETE] - Delete product
export async function DELETE(req: NextRequest) {
  const session = await auth();

  if (!session || session.user.role !== UserRole.ADMIN) {
    return NextResponse.json({ error: "Brak uprawnień" }, { status: 403 });
  }

  try {
    const { searchParams } = new URL(req.url);
    const productId = searchParams.get("id");

    if (!productId) {
      return NextResponse.json({ error: "Brak ID produktu" }, { status: 400 });
    }

    const product = await prismaClient.product.findUnique({
      where: { id: Number(productId) },
      include: { categories: true },
    });

    if (!product) {
      return NextResponse.json(
        { error: "Produkt nie istnieje" },
        { status: 404 }
      );
    }

    // Delete Foreign relationships
    await prismaClient.categoriesOnProducts.deleteMany({
      where: { productId: Number(productId) },
    });

    // Delete images from filesystem
    if (product.images) {
      const imagesArray = JSON.parse(product.images as string);
      const deletePromises = imagesArray.map(async (image: { img: string }) => {
        try {
          await deleteFile(image.img);
        } catch (error) {
          console.error(`Błąd usuwania pliku ${image.img}:`, error);
        }
      });

      await Promise.all(deletePromises);
    }

    // Delete product from database
    await prismaClient.product.delete({
      where: { id: Number(productId) },
    });

    return NextResponse.json({ message: "Produkt usunięty" }, { status: 200 });
  } catch (error) {
    console.error("Błąd usuwania produktu:", error);
    return NextResponse.json(
      { error: "Błąd serwera", details: error },
      { status: 500 }
    );
  }
}
