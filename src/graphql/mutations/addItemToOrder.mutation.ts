import { gql } from "@apollo/client";

export const ADD_ITEM_TO_ORDER_MUTATION = gql`
  mutation ($productId: ID!, $qty: Int!) {
    addItemToOrder(productVariantId: $productId, quantity: $qty) {
      ... on Order {
        id
        code
        state
        lines {
          id
          unitPrice
          linePrice
          linePriceWithTax
          quantity
          productVariant {
            id
            sku
            name
            price
            product {
              name
              slug             
            }
          }
        }
        total
        totalWithTax
      }
      ... on OrderLimitError {
        errorCode
        message
        maxItems
      }
    }
  }
`;
