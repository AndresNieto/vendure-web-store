import { useQuery } from "@apollo/client";
import { CircularProgress } from "@mui/material";
import { FunctionComponent } from "react";
import { ACTIVE_ORDER } from "../../graphql/queries/activeOrder.query";
import DropdownMenu from "./DropdownMenu/DropdownMenu";
import { Header } from "./Header.styled";

interface HeaderComponentProps {

}

const HeaderComponent: FunctionComponent<HeaderComponentProps> = () => {
  const { data, loading } = useQuery(ACTIVE_ORDER);

  return (
    <Header>
      <img
        src="https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png"
        alt="logo"
      />
      {loading ?
        <CircularProgress /> :
        <DropdownMenu activeOrder={data?.activeOrder}></DropdownMenu>}
    </Header>
  );
}

export default HeaderComponent;
