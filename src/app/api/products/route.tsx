import { NextRequest, NextResponse } from "next/server";
import { Prisma, UserRole } from "@prisma/client";
import { auth } from "@/app/auth/auth";
import { uploadFile } from "../libs/uploads";
import { prismaClient } from "@/prisma/prisma";

// [PUBLIC] [GET] - Get product by ID or all products
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const productId = searchParams.get("id");

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

    // Get all products
    const products = await prismaClient.product.findMany({
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
    const price = formData.get("price") as string;
    const images = formData.getAll("images") as File[];
    const productFeatures = formData.get("productFeatures") as string;
    const defaultImageIndex = formData.get("defaultImageIndex") as string;

    if (!seoTitle || !seoDescription || !producer || !name || !price) {
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

    // Create product in database
    const product = await prismaClient.product.create({
      data: {
        seoTitle,
        seoDescription,
        producer,
        name,
        description,
        price: Prisma.Decimal(price),
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
