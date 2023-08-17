import products from "../../productData";
import ProductItem from "./ProductItem";
import "./Products.css";

const Products = () => {
  const productList = products.map((product) => (
    <ProductItem key={product.id} product={product} />
  ));

  return (
    <main className="products-wrapper">
      <h1 className="title-menu">All Menus</h1>
      <ul className="products">{productList}</ul>
    </main>
  );
};

export default Products;
