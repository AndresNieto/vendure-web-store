import { CircularProgress } from "@mui/material";
import { FunctionComponent } from "react";
import { useProducts } from "../../hooks/useProducts";
import { buildProductDetail } from "../../models/ProductDetail";
import ProductComponent from "../Product/Product";
import { LoadingContainer, PageContainer, ProductsContainer } from "./ProductList.styled";

interface ProductListComponentProps {

}

const ProductListComponent: FunctionComponent<ProductListComponentProps> = () => {
  const { products, loading } = useProducts();
  return (
    <PageContainer>
      {loading ?
        <LoadingContainer>
          <CircularProgress />
        </LoadingContainer> :
        <ProductsContainer>
          {products?.map((product: any, idx: Number) => (
            <ProductComponent product={buildProductDetail(product)} key={`product-${idx}`} />
          ))}
        </ProductsContainer>
      }
    </PageContainer>
  );
}

export default ProductListComponent;