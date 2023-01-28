import { useState, useContext, useEffect } from "react";
import { CartContext } from "../../../context/CartContext";
import ItemProduct from "./ItemProduct";
import Spinner from "../../spinner/Spinner";
import Box from "@mui/material/Box";

const Products = () => {
  const { products, fetchProducts } = useContext(CartContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getProducts = async () => {
    try {
      await fetchProducts();
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="30vh"
        >
          <Spinner />
        </Box>
      ) : error ? (
        <h1 style={{ fontFamily: "Open sans", color: "#999" }}>
          An error has occurred!
        </h1>
      ) : (
        products.map((product) => (
          <ItemProduct key={product.id} product={product} />
        ))
      )}
    </>
  );
};

export default Products;
