import "./Header.css";
import HeaderCartButton from "./HeaderCartButton";
import LoginButton from "./LoginButton";

const Header = ({ showCart, cartShow }) => {
  return (
    <header className="header">
      <h1>FoodMood</h1>
      <div className="buttons">
        <HeaderCartButton showCart={showCart} cartShow={cartShow} />
        <LoginButton />
      </div>
    </header>
  );
};

export default Header;
