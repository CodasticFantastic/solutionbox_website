import { NextRequest, NextResponse } from "next/server";
import { PrismaClient, UserRole } from "@prisma/client";
import slugify from "slugify";
import { auth } from "@/app/auth/auth";
import { deleteFile, uploadFile } from "../libs/uploads";

const prisma = new PrismaClient();

// [PUBLIC] [GET] - Download all categories
export async function GET(req: NextRequest) {
  try {
    // Check if ID is present
    const { searchParams } = new URL(req.url);
    const categoryId = searchParams.get("id");

    if (categoryId) {
      // Return single category by ID
      const category = await prisma.productCategory.findUnique({
        where: { id: Number(categoryId) },
        include: {
          products: {
            include: {
              product: true,
            },
          },
        },
      });

      if (!category) {
        return NextResponse.json(
          { error: "Kategoria nie znaleziona" },
          { status: 404 }
        );
      }

      return NextResponse.json(category);
    }

    // If there is no ID, return all categories
    const categories = await prisma.productCategory.findMany();
    return NextResponse.json(categories);
  } catch (error) {
    return NextResponse.json(
      { error: "Błąd serwera", details: error },
      { status: 500 }
    );
  }
}

// [PRIVATE] [POST] - Create new category
export async function POST(req: NextRequest) {
  const session = await auth();

  if (!session || session.user.role !== UserRole.ADMIN) {
    return NextResponse.json({ error: "Brak uprawnień" }, { status: 403 });
  }

  try {
    const formData = await req.formData();

    const seoTitle = formData.get("seoTitle") as string;
    const seoDescription = formData.get("seoDescription") as string;
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const image = formData.get("image") as File;

    if (!seoTitle || !seoDescription || !name) {
      return NextResponse.json(
        { error: "Wymagane pola nie zostały wypełnione" },
        { status: 400 }
      );
    }

    let imageUrl;

    if (image) {
      imageUrl = await uploadFile(image);
    }

    const category = await prisma.productCategory.create({
      data: {
        seoTitle: seoTitle,
        seoDescription: seoDescription,
        name: name,
        slug: slugify(name, { lower: true }),
        description: description,
        image: imageUrl || "",
      },
    });

    return NextResponse.json(category, { status: 201 });
  } catch (error) {
    console.error("ERROR", error);
    return NextResponse.json(
      { error: "Błąd tworzenia kategorii" },
      { status: 400 }
    );
  }
}

// [PRIVATE] [PUT] - Update category by ID
export async function PUT(req: NextRequest) {
  const session = await auth();

  if (!session || session.user.role !== UserRole.ADMIN) {
    return NextResponse.json({ error: "Brak uprawnień" }, { status: 403 });
  }

  try {
    const formData = await req.formData();

    const categoryId = formData.get("id") as string;
    const seoTitle = formData.get("seoTitle") as string;
    const seoDescription = formData.get("seoDescription") as string;
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const image = formData.get("image") as File;

    if (!categoryId) {
      return NextResponse.json({ error: "Brak ID kategorii" }, { status: 400 });
    }

    if (!seoTitle || !seoDescription || !name) {
      return NextResponse.json(
        { error: "Wymagane pola nie zostały wypełnione" },
        { status: 400 }
      );
    }

    // Get category from database
    const existingCategory = await prisma.productCategory.findUnique({
      where: { id: Number(categoryId) },
    });

    if (!existingCategory) {
      return NextResponse.json(
        { error: "Kategoria nie znaleziona" },
        { status: 404 }
      );
    }

    let imageUrl = existingCategory.image;

    // Check if new image exists
    if (image) {
      // Delete old image
      if (existingCategory.image) {
        deleteFile(existingCategory.image);
      }

      // Save new image
      imageUrl = await uploadFile(image);
    }

    // Update category in database
    const updatedCategory = await prisma.productCategory.update({
      where: { id: Number(categoryId) },
      data: {
        seoTitle: seoTitle || existingCategory.seoTitle,
        seoDescription: seoDescription || existingCategory.seoDescription,
        name: name || existingCategory.name,
        slug: slugify(name || existingCategory.name, { lower: true }),
        description: description || existingCategory.description,
        image: imageUrl,
      },
    });

    return NextResponse.json(updatedCategory, { status: 200 });
  } catch (error) {
    console.error("ERROR", error);
    return NextResponse.json(
      { error: "Błąd aktualizacji kategorii" },
      { status: 400 }
    );
  }
}

// [PRIVATE] [DELETE] Usunięcie kategorii
export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "Brak ID" }, { status: 400 });
  }

  const category = await prisma.productCategory.findUnique({
    where: { id: Number(id) },
  });

  if (!category) {
    return NextResponse.json(
      { error: "Kategoria nie istnieje" },
      { status: 404 }
    );
  }

  if (category.image) {
    try {
      await deleteFile(category.image);
    } catch (err) {
      console.error("Błąd usuwania pliku:", err);
    }
  }

  await prisma.productCategory.delete({
    where: { id: Number(id) },
  });

  return NextResponse.json({ message: "Usunięto kategorię" });
}
