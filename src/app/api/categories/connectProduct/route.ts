import { NextRequest, NextResponse } from "next/server";
import { prismaClient } from "@/prisma/prisma";
import { auth } from "@/app/auth/auth";

export async function GET(req: NextRequest) {
  const session = await auth();

  if (!session || session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Brak uprawnień" }, { status: 403 });
  }

  try {
    const searchParams = req.nextUrl.searchParams;
    const productId = Number(searchParams.get("productId"));
    const categoryId = Number(searchParams.get("categoryId"));

    if (!productId || !categoryId) {
      return NextResponse.json(
        { error: "Brak wymaganych parametrów: productId, categoryId" },
        { status: 400 }
      );
    }

    // Sprawdzenie, czy przypisanie już istnieje
    const existingRelation = await prismaClient.categoriesOnProducts.findUnique(
      {
        where: {
          productId_categoryId: { productId, categoryId },
        },
      }
    );

    if (existingRelation) {
      // Jeśli już istnieje -> USUWAMY przypisanie (odpinamy kategorię)
      await prismaClient.categoriesOnProducts.delete({
        where: {
          productId_categoryId: { productId, categoryId },
        },
      });

      return NextResponse.json(
        {
          message: `Kategoria ${categoryId} została odpięta od produktu ${productId}`,
        },
        { status: 200 }
      );
    } else {
      // Jeśli nie istnieje -> DODAJEMY przypisanie (przypinamy kategorię)
      await prismaClient.categoriesOnProducts.create({
        data: { productId, categoryId },
      });

      return NextResponse.json(
        {
          message: `Produkt ${productId} został przypisany do kategorii ${categoryId}`,
        },
        { status: 201 }
      );
    }
  } catch (error) {
    console.error("Błąd:", error);
    return NextResponse.json(
      { error: "Błąd obsługi kategorii" },
      { status: 500 }
    );
  }
}
