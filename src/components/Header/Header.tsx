import { useQuery } from "@apollo/client";
import { CircularProgress } from "@mui/material";
import { FunctionComponent, useContext, useEffect } from "react";
import { ProductContext } from "../../context/OrderContext";
import { ACTIVE_ORDER } from "../../graphql/queries/activeOrder.query";
import { useStateWithStorage } from "../../hooks/useStateWithStorage";
import DropdownMenu from "./DropdownMenu/DropdownMenu";
import { Header } from "./Header.styled";

interface HeaderComponentProps {

}

const HeaderComponent: FunctionComponent<HeaderComponentProps> = () => {
  const { orderState, contextHasData } = useContext(ProductContext);
  const { data, loading } = useQuery(ACTIVE_ORDER);

  return (
    <Header>
      <img
        src="https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png"
        alt="logo"
      />
      {loading ?
        <CircularProgress /> :
        <DropdownMenu activeOrder={contextHasData ? orderState : data?.activeOrder}></DropdownMenu>}
    </Header>
  );
}

export default HeaderComponent;
