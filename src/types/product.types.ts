import { Product } from "@prisma/client";

export interface IProductResponse
  extends Omit<Product, "images" | "productFeatures"> {
  images: string;
  productFeatures: { title: string; description: string }[];
}
