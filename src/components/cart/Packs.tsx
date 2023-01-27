import { useState, useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import Spinner from "../spinner/Spinner";
import ItemPack from "./ItemPack";
import Box from "@mui/material/Box";

const Packs = () => {
  const { packs, fetchPacks, retrieveProdsInPack } = useContext(CartContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getProducts = async () => {
    try {
      await fetchPacks();
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
        packs.map((pack) => (
          <ItemPack
            key={pack.id}
            pack={pack}
            retrieveItems={retrieveProdsInPack}
          />
        ))
      )}
    </>
  );
};

export default Packs;
