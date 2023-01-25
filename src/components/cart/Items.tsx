import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Item from "./Item";

const Items = () => {
  const { products } = useContext(CartContext);
  console.log("🚀 ~ file: Items.tsx:9 ~ Items ~ products", products);

  return (
    <>
      <Typography fontSize={"24px"} fontWeight={"700"}>
        Your cart
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          background: "#ff0",
        }}
      >
        <Item />
      </Box>
    </>
  );
};

export default Items;
