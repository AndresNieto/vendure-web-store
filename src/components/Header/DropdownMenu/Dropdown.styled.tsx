import { Button } from "@mui/material";
import styled from "styled-components";
import { colors } from "../../../constants/colors";

export const OrderDetailsButton = styled(Button)(() => ({
  padding: '0.8em',
  borderRadius: '7px',
  backgroundColor: colors.darkGreenHover,
  color: colors.white,
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '20px',
}))