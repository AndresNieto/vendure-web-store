import { IProductDetail } from "./IProductDetail";
import { IProductItem } from "./IProductItem";

export const buildProductDetail = (data: IProductItem) => {
  const { id, name, featuredAsset, variants, description } = data;
  const newProduct: IProductDetail = {
    id,
    title: name,
    price: variants[0].price.toString(),
    featuredImage: featuredAsset,
    description,
    variants,
  };
  return newProduct;
};