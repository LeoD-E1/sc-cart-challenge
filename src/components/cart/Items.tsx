import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import Summary from "./Summary";
import Products from "./items/Products";
import Packs from "./items/Packs";

const Items = () => {
  const { products, packs, totalPrice } = useContext(CartContext);
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        gap: 3,
        marginY: 4,
      }}
    >
      <div style={{ width: "75%" }}>
        <Box display="flex" alignItems="center">
          <Typography
            fontSize={"24px"}
            fontWeight={"700"}
            marginRight={1}
            fontFamily="Open sans"
          >
            Your cart
          </Typography>
          <Typography fontFamily="Open sans" color="#999">
            {" "}
            ({products.length + packs.length})
          </Typography>
        </Box>
        <Box
          sx={{
            overflowY: "auto",
            maxHeight: "70vh",
            height: "100%",
          }}
        >
          <Packs />
          <Products />
        </Box>
      </div>
      <div style={{ width: "25%" }}>
        <Summary products={products} packs={packs} total={totalPrice} />
      </div>
    </Container>
  );
};

export default Items;
