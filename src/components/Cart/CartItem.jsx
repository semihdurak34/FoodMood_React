import { useContext } from "react";
import "./CartItem.css";
import { CartContext } from "../../context/CartProvider";

const CartItem = ({ product }) => {
  const { removeItem } = useContext(CartContext);
  return (
    <li className="cart-item">
      <div className="cart-item-img">
        <img src={product.img} alt="" />
      </div>
      <div className="cart-item-info">
        <div className="cart-item-text">
          <b>{product.name}</b>
          <div>
            <span>{product.price} x</span>
            <span style={{ color: "green" }}>{product.amount}</span>
          </div>
        </div>
        <a
          href="/"
          className="cart-item-remove"
          onClick={(event) => {
            event.preventDefault();
            removeItem(product.id);
          }}
        >
          X
        </a>
      </div>
    </li>
  );
};

export default CartItem;
