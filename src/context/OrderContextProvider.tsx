import { FunctionComponent, useState } from "react";
import { IActiveOrder } from "../models/IActiveOrder";
import { ProductContext } from "./OrderContext";

const INITAL_STATE: IActiveOrder = {
  id: 0,
  code: '',
  state: '',
  lines: [],
  total: 0,
  totalWithTax: 0,
}


interface OrderContextProviderProps {
  children: JSX.Element | JSX.Element[]
}

const OrderContextProvider: FunctionComponent<OrderContextProviderProps> = ({ children }) => {

  const [orderState, setOrderState] = useState<IActiveOrder>(INITAL_STATE);

  const updateOrderState = (newOrderState: IActiveOrder) => setOrderState(newOrderState);

  const defaultContext = {
    orderState,
    updateOrderState,
  };

  return (
    <ProductContext.Provider value={defaultContext}>
      {children}
    </ProductContext.Provider>
  );
}

export default OrderContextProvider;