import { IProductItem } from "./IProductItem";

export interface IProductVariant {
  sku: string;
  name: string;
  productId?: number;
  price: number;
  id: string;
  product?: IProductItem;
}