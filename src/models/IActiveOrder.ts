import { IAddress } from "./IAddress";
import { IProductVariant } from "./IProductVariant";

export interface IActiveOrder {
  id: number;
  code: string;
  state: string;
  lines: Array<ICartLine>;
  total: number;
  totalWithTax: number;
}

export interface ICartLine {
  id: number;
  linePrice: number;
  unitPrice: number;
  linePriceWithTax: number;
  quantity: number;
  productVariant: IProductVariant;
}
