import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../graphql/queries/product.query";

export const useProducts = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  return {
    products: data?.products?.items,
    loading,
    error,
  }
}