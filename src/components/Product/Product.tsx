import { useMutation } from "@apollo/client";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { FunctionComponent, useContext, useState } from "react";
import { ProductContext } from "../../context/OrderContext";
import { ADD_ITEM_TO_ORDER_MUTATION } from "../../graphql/mutations/addItemToOrder.mutation";
import { IProductDetail } from "../../models/IProductDetail";
import { IProductVariant } from "../../models/IProductVariant";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography
} from "@mui/material";
import {
  BuyButton,
  CreateOrderContainer,
  FormControlContainer,
  Image,
  PriceInput,
  ProductCard, ProductName,
  QuantityInput,
} from "./Product.styled";
import { numberToCurrency } from "../../utils/utils";
import { useAddItemToOrder } from "../../hooks/useAddItemToOrder";

interface ProductComponentProps {
  product: IProductDetail
}

const ProductComponent: FunctionComponent<ProductComponentProps> = ({ product }) => {
  const { updateOrderState } = useContext(ProductContext);
  const { addItemToOrder, loading } = useAddItemToOrder();

  const { title, featuredImage, description, variants } = product;
  const [variantSelected, setVariantSelected] = useState<IProductVariant>(variants[0]);
  const [productQuantity, setProductQuantity] = useState<Number>(0);



  const handleChangeProductQuantity = (event: any) => {
    const { target: { value } } = event;
    setProductQuantity(value)
  }

  const handleAddItemToOrder = async () => {
    const { data: { addItemToOrder: newOrderState } } = await addItemToOrder(
      {
        variables: { productId: variantSelected.id, qty: +productQuantity }
      });
    updateOrderState(newOrderState)
  }

  const handleChangeVariant = ({ target: { value } }: SelectChangeEvent) => {
    const newVariantSelected = variants.filter(({ id }: IProductVariant) => id === value)
    setVariantSelected(newVariantSelected[0])
  }

  const disableBuyButton = productQuantity < 1 || loading;

  return (
    <>
      <ProductCard>
        <Image src={featuredImage?.preview} fullSize />
        <ProductName>{title}</ProductName>
        <Accordion>
          <AccordionSummary
            expandIcon={<KeyboardArrowDownIcon />}
            aria-controls="description-accordion"
            id="description-accordion"
          >
            <Typography>Description</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {description}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <CreateOrderContainer>
          <FormControlContainer sx={{ minWidth: 120 }}>
            <InputLabel id="variantsDropdown">Select a variant</InputLabel>
            <Select
              labelId="variantsDropdown"
              id="variantsDropdown"
              value={variantSelected?.id?.toString()}
              label="Select a variant"
              onChange={(event) => handleChangeVariant(event)}
            >
              {variants.map(({ id, name }: IProductVariant, idx) => (
                <MenuItem value={id} key={`variant-${idx}`}>{name}</MenuItem>
              ))}
            </Select>
          </FormControlContainer>
          <FormControl>
            <InputLabel id="priceInput">Price</InputLabel>
            <PriceInput type="text" id="priceInput" value={numberToCurrency(variantSelected.price)} disabled></PriceInput>
          </FormControl>
          <FormControl>
            <InputLabel id="quantityInput" >Quantity</InputLabel>
            <QuantityInput
              type="number"
              id="quantityInput"
              onChange={handleChangeProductQuantity}
              value={productQuantity}
              inputProps={{ "data-testid": "quantityInput" }}
            ></QuantityInput>
          </FormControl>
          <BuyButton disabled={disableBuyButton} onClick={handleAddItemToOrder} className='addToCarBtn'>{
            loading ? <CircularProgress /> : (
              <>
                <LocalMallIcon style={{ marginRight: '10px' }} />
                <strong>BUY</strong>
              </>
            )
          }</BuyButton>
        </CreateOrderContainer>
      </ProductCard>
    </>
  );
}

export default ProductComponent;