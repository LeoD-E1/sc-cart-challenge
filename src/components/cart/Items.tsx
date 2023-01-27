import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ItemProduct from "./ItemProduct";
import ItemPack from "./ItemPack";
import { Container } from "@mui/material";
import Summary from "./Summary";

const Items = () => {
  const { products, packs, retrieveProdsInPack } = useContext(CartContext);
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
      </div>
      <div style={{ width: "25%" }}>
        <Summary
          products={products}
          packs={packs}
          retrieve={retrieveProdsInPack}
        />
      </div>
    </Container>
  );
};

export default Items;
