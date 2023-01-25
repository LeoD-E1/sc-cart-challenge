import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ItemProduct from "./ItemProduct";

const Items = () => {
  const { products, packs } = useContext(CartContext);
  console.log("🚀 ~ file: Items.tsx:9 ~ Items ~ products", products);

  return (
    <>
      <Typography fontSize={"24px"} fontWeight={"700"}>
        Your cart
      </Typography>
      <Box
        sx={{
          background: "#ff0",
          overflowY: "auto",
          maxHeight: "70vh",
        }}
      >
        {products.map((product) => (
          <ItemProduct key={product.id} product={product} />
        ))}
      </Box>
    </>
  );
};

export default Items;
