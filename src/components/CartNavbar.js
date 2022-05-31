import { BottomNavigation, BottomNavigationAction } from "@material-ui/core"
import { useState } from "react"
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Inventory2Icon from '@mui/icons-material/Inventory2';

const CartNavbar = () => {
    const [value, setValue] = useState(0)
  return (
    <BottomNavigation
    showLabels
    value={value}
    onChange={(event, newValue) => {
      setValue(newValue);
    }}
  >
    
    <BottomNavigationAction label="Total Products" icon = {<Inventory2Icon />}  />
    <BottomNavigationAction label="Total Price" icon = {<CurrencyRupeeIcon />} />
    <BottomNavigationAction label="View Cart" icon ={<ShoppingCartCheckoutIcon />}  />
  </BottomNavigation>
  )
}

export default CartNavbar