import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Hero from "./components/Hero/Hero";
import Header from "./components/Layout/Header";
import Products from "./components/Products/Products";
import CartProvider from "./context/CartProvider";
import Carousell from "./components/Hero/Carousell";

function App() {
  const [cartShow, setCartShow] = useState(false);
  const showCart = () => {
    setCartShow(true);
  };
  const hideCart = (e) => {
    e.preventDefault();

    setCartShow(false);
  };
  return (
    <CartProvider>
      {cartShow && <Cart hideCart={hideCart} />}
      <Header showCart={showCart} cartShow={cartShow} />
      <Hero />
      <Carousell />
      <Products />
    </CartProvider>
  );
}

export default App;
