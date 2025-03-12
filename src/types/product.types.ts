import { Product } from "@prisma/client";

export interface IProductResponse extends Omit<Product, "images"> {
  images: string;
}
