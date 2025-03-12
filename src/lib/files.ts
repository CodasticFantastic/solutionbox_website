import { IProductImageItem } from "@/types/files.types";

export function convertFilesStringToJSON(string: string): IProductImageItem[] {
  let productImages = [];

  if (typeof string === "string") {
    productImages = JSON.parse(string);
  } else {
    productImages = string;
  }

  return productImages;
}

export function getDefaultProductImageId(string: string): string {
  const productImages = convertFilesStringToJSON(string);

  return productImages.find((image) => image.isDefault)!.img;
}
