import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import "./HeaderCartButton.css";
import { CartContext } from "../../context/CartProvider";

const HeaderCartButton = ({ showCart, cartShow }) => {
  const stateCart = useContext(CartContext);

  const totalAmountInCart = stateCart.items.reduce(
    (accumlator, currentItem) => {
      return accumlator + currentItem.amount;
    },
    0
  );
  return (
    <button className="button" onClick={showCart}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>My Cart</span>
      <span className="badge">{totalAmountInCart}</span>
    </button>
  );
};

export default HeaderCartButton;
