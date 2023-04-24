import { gql } from "@apollo/client";
import { PRODUCT_FRAGMENT } from "../fragments/product.fragment";

export const GET_PRODUCTS = gql`
  ${PRODUCT_FRAGMENT}
  query {
    products {
      items {
        ...product
      }
    }
  }
`;
