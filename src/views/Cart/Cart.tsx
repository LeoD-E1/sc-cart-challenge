import Navbar from "../../components/navbar/Navbar";
import Categories from "../../components/cart/Categories";
import Items from "../../components/cart/Items";
import AlsoLike from "../../components/AlsoLike";

const Cart = () => {
  return (
    <>
      <Navbar />
      <Categories />
      <Items />
      <AlsoLike />
    </>
  );
};

export default Cart;
