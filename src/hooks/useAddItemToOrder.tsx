import { useMutation } from "@apollo/client";
import { ADD_ITEM_TO_ORDER_MUTATION } from "../graphql/mutations/addItemToOrder.mutation";

export const useAddItemToOrder = () => {
  const [addItemToOrder, { loading }] = useMutation(
    ADD_ITEM_TO_ORDER_MUTATION
  ); return {
    addItemToOrder,
    loading,
  }
}