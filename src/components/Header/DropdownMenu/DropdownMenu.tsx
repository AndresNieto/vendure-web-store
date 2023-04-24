import InventoryIcon from '@mui/icons-material/Inventory';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { Divider, ListItemIcon, ListItemText, Menu } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import { FunctionComponent, useState } from "react";
import { OrderDetailsButton } from "./Dropdown.styled";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IActiveOrder } from '../../../models/IActiveOrder';

interface DropdownMenuProps {
  activeOrder: IActiveOrder
}

const DropdownMenu: FunctionComponent<DropdownMenuProps> = ({ activeOrder }) => {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <OrderDetailsButton
        id="orderDetailsButton"
        data-testid="orderDetailsButton"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <ShoppingCartIcon fontSize="large" />
      </OrderDetailsButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem>
          <ListItemIcon>
            <InventoryIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Products details</ListItemText> <br />
        </MenuItem>
        {activeOrder?.lines.map(({ productVariant, quantity }: any, idx: any) => (
          <div key={`productItem-${idx}`}>
            <MenuItem>
              <ListItemText>Product: <strong>{productVariant.name}</strong></ListItemText> <br />
            </MenuItem>
            <MenuItem>
              <ListItemText>Quantity: <strong>{quantity}</strong></ListItemText>
            </MenuItem>
            <Divider />
          </div>
        ))}
        <MenuItem>
          <ListItemIcon>
            <MonetizationOnIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Subtotal: <strong>{activeOrder?.total | 0}</strong></ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <MonetizationOnIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Subtotal with taxes: <strong>{activeOrder?.totalWithTax | 0}</strong></ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
}

export default DropdownMenu;