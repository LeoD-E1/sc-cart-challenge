import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ItemProduct from "./ItemProduct";
import ItemPack from "./ItemPack";

const Items = () => {
  const { products, packs, removeProduct, retrieveProdsInPack, removePack } =
    useContext(CartContext);
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
        }}
      >
        {packs.map((pack) => (
          <ItemPack
            key={pack.id}
            remove={removePack}
            pack={pack}
            retrieveItems={retrieveProdsInPack}
          />
        ))}
        {products.map((product) => (
          <ItemProduct
            key={product.id}
            product={product}
            remove={removeProduct}
          />
        ))}
      </Box>
    </>
  );
};

export default Items;
