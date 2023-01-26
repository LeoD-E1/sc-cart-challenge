import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ItemProduct from "./ItemProduct";
import ItemPack from "./ItemPack";

const Items = () => {
  const { products, packs, retrieveProdsInPack } = useContext(CartContext);
  return (
    <>
      <Box display="flex" alignItems="center">
        <Typography fontSize={"24px"} fontWeight={"700"}>
          Your cart
        </Typography>
        <Typography> ({products.length + packs.length})</Typography>
      </Box>
      <Box
        sx={{
          overflowY: "auto",
          maxHeight: "70vh",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {packs.length + products.length === 0 && (
          <h1 style={{ fontFamily: "Open sans", color: "#999" }}>
            You have no items in your cart
          </h1>
        )}
        {packs.map((pack) => (
          <ItemPack
            key={pack.id}
            pack={pack}
            retrieveItems={retrieveProdsInPack}
          />
        ))}
        {products.map((product) => (
          <ItemProduct key={product.id} product={product} />
        ))}
      </Box>
    </>
  );
};

export default Items;
