import { createContext } from 'react';
import { IActiveOrder } from '../models/IActiveOrder';

export type OrderStateProps = {
  orderState: IActiveOrder;
  contextHasData: Boolean;
  updateOrderState: (newOrderState: IActiveOrder) => void;
}

export const ProductContext = createContext<OrderStateProps>({} as OrderStateProps);