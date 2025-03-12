import { ProductCategory } from "@prisma/client";
import { IProductResponse } from "./product.types";

export interface IProductCategoryResponse extends ProductCategory {
  products: {
    productId: number;
    categoryId: number;
    product: IProductResponse;
  }[];
}
