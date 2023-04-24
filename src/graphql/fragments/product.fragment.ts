import { gql } from "@apollo/client";
import { FEATURED_ASSET } from "./featuredAsset.fragment";

export const PRODUCT_FRAGMENT = gql`
  ${FEATURED_ASSET}
  fragment product on Product {
    id
    name
    slug
    description
    featuredAsset {
      ...featuredAsset
    }
    variants {
      id
      sku
      name
      productId
      price
    }
  }
`;
