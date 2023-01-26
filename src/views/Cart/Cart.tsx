import Container from "@mui/material/Container";
import Navbar from "../../components/navbar/Navbar";
import Categories from "../../components/cart/Categories";
import ItemsWrapper from "../../components/cart/ItemsWrapper";

const Cart = () => {
  return (
    <>
      <Navbar />
      <Categories />
      <ItemsWrapper />
    </>
  );
};

export default Cart;
