import { Container, Typography } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./alsoLike/alsoLike.css";
import CardProduct from "./alsoLike/CardProduct";

const AlsoLike = () => {
  const { products } = useContext(CartContext);
  return (
    <Container maxWidth="xl">
      <Typography
        fontSize={"24px"}
        fontWeight={"700"}
        marginY={2}
        fontFamily="Open sans"
      >
        You may also like
      </Typography>
      <div className="prod-also-like-container">
        {products.slice(0, 4).map((prod) => (
          <div key={prod.id} className="item">
            <CardProduct product={prod} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default AlsoLike;
