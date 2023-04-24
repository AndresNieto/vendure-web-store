import { Button, Card, FormControl, Input, Typography } from "@mui/material";
import { colors } from "../../constants/colors"
import styled from "styled-components";

export const ProductCard = styled(Card)(() => ({
  padding: '13px 11px',
  width: 'calc(100% - 22px)',
  height: '100%',
  background: colors.white,
  boxShadow: '-2px 3px 10px rgba(0, 0, 0, 0.25)',
  borderRadius: '7px',
  display: 'auto',
  alignItems: 'auto',
  justifyContent: 'auto',
}))

export const Image = styled.img<{ fullSize?: boolean }>(({ fullSize }) => ({
  borderRadius: '7px',
  width: fullSize ? '100%' : '136px',
  height: fullSize ? '178px' : '100px',
}))

export const ProductName = styled(Typography)(() => ({
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '24px',
  lineHeight: '42px',
  color: 'black',
}))

export const ProductPrice = styled(Typography)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '24px',
  lineHeight: '42px',
  color: 'black',
}))

export const ProductDescription = styled(Typography)(() => ({
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: '100',
  fontSize: '20px',
  lineHeight: '26px',
  color: 'black',
}))

export const CreateOrderContainer = styled.div(() => ({
  marginTop: '5%',
  display: 'grid',
  gap: '2rem',
  gridTemplateColumns: '1fr 1fr',
  padding: '1%',
}))

export const QuantityInput = styled(Input)(() => ({
  padding: '0.5em',
  margin: '0.5em',
  color: colors.black,
  background: colors.lightGray,
  border: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

export const PriceInput = styled(Input)(() => ({
  padding: '0.5em',
  margin: '0.5em',
  color: colors.black,
  border: 'none',
  fontSize: '17px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

export const BuyButton = styled(Button)(() => ({
  padding: '0.5em',
  borderRadius: '7px',
  backgroundColor: colors.darkGreenHover,
  color: colors.white,
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '20px',
  width: '100%',
  gridColumnStart: '1',
  gridColumnEnd: '3',
}))

export const FormControlContainer = styled(FormControl)(() => ({
  gridColumnStart: '1',
  gridColumnEnd: '3',
}))