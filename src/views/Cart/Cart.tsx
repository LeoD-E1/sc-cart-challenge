import Navbar from "../../components/navbar/Navbar";
import Categories from "../../components/cart/Categories";
import Items from "../../components/cart/Items";
import AlsoLike from "../../components/alsoLike/AlsoLike";
import Footer from "../../components/footer/Footer";

const Cart = () => {
  return (
    <>
      <Navbar />
      <Categories />
      <Items />
      <AlsoLike />
      <Footer />
    </>
  );
};

export default Cart;
