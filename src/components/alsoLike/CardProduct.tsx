import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { Product } from "../../types/cart";

interface CardProduct {
  product: Product;
}

const CardProduct: React.FC<CardProduct> = ({ product }) => {
  return (
    <Card sx={{ height: "100%", position: "relative" }}>
      <CardMedia
        component="img"
        image={product.img_url}
        alt={product.name}
        height={"80%"}
      />
      <CardContent>
        <Typography
          fontSize="16px"
          fontWeight="700"
          fontFamily="Open sans"
          lineHeight="16px"
        >
          {product.name}
        </Typography>
        <Box display="flex" justifyContent="space-between">
          <Typography
            fontSize="16px"
            fontWeight="700"
            fontFamily="Open sans"
            lineHeight="16px"
          >
            {product.price}
          </Typography>
          <Typography
            fontSize="14px"
            fontWeight="400"
            fontFamily="Open sans"
            lineHeight="16px"
            color="#6B737C"
          >
            Minimum - 24
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardProduct;
