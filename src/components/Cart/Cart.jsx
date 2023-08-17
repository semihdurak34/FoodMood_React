import "./Cart.css";
import CartItem from "./CartItem";

import Offcanvas from "../UI/Offcanvas";
import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";

const Cart = ({ hideCart }) => {
  const { items, totalAmount, clearItem } = useContext(CartContext);
  const hasItems = items.length > 0;
  return (
    <Offcanvas hideCart={hideCart}>
      <div className="cart-head">
        <h2>My Cart</h2>
        <a href="/" className="cart-close" onClick={hideCart}>
          X
        </a>
      </div>

      {items.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}

      <div className="total">
        <span>Total Amount</span>
        <span>${totalAmount.toFixed(2)}</span>
      </div>
      {hasItems && (
        <div className="actions">
          <button className="cart-order">Order Now</button>
          <button className="cart-clear" onClick={clearItem}>
            Empty Cart
          </button>
        </div>
      )}
    </Offcanvas>
  );
};

export default Cart;
