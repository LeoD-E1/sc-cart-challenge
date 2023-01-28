import { Container, Typography, Box } from "@mui/material";
import { useState, useEffect } from "react";
import { Product } from "../../types/cart";
import Spinner from "../spinner/Spinner";
import "./alsoLike.css";
import CardProduct from "./CardProduct";

const AlsoLike = () => {
  const [internProducts, setInternProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getProducts = async () => {
    try {
      const resp = await fetch("products.json");
      const data = await resp.json();
      setInternProducts(data);
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => await getProducts())();
  }, []);

  return (
    <Container maxWidth="xl" sx={{ marginBottom: 15 }}>
      <Typography
        fontSize={"24px"}
        fontWeight={"700"}
        marginY={2}
        fontFamily="Open sans"
      >
        You may also like
      </Typography>

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
        <div className="prod-also-like-container">
          {internProducts.slice(0, 4).map((prod: Product) => (
            <div key={prod.id} className="item">
              <CardProduct product={prod} />
            </div>
          ))}
        </div>
      )}
    </Container>
  );
};

export default AlsoLike;
