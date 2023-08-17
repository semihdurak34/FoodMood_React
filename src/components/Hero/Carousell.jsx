import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import products from "../../productData";
import "./Carousell.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";

const Carousell = () => {
  const { addItem } = useContext(CartContext);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <h1 className="h1-title">Discount For A Short Time</h1>
      <Carousel responsive={responsive}>
        {products.map((product) => (
          <div className="carousel-div">
            <img src={product.img} alt="" className="carousel-img" />
            <h2 className="carousel-h2">{product.name}</h2>
            <p className="carousel-price">${product.price}</p>
            <p className="carousel-description">
              Some description can come here!
            </p>
            <button
              className="carousel-button"
              onClick={() => addItem(product)}
            >
              {" "}
              Add to Cart
            </button>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Carousell;
