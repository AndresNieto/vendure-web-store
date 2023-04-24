import { IProductVariant } from "./IProductVariant";

export interface IProductDetail {
  id: string;
  title: string;
  price: string;
  featuredImage: any;
  description: string;
  subTitle?: string;
  stars?: number;
  productThumbUrls?: Array<string>;
  attributes?: Array<IProductAttr>;
  variants: Array<IProductVariant>;
}

export interface IProductAttr {
  key: string;
  values: Array<string>;
}