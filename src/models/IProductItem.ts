import { IAsset } from "./IAsset";
import { IProductVariant } from "./IProductVariant";

export interface IProductItem {
  id: string;
  name: string;
  slug: string;
  description: string;
  featuredAsset: IAsset;
  variants: Array<IProductVariant>;
}
