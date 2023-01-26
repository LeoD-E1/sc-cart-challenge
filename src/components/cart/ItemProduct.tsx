import React from "react";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import { Product } from "../../types/cart";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
import RemoveItem from "./RemoveItem";

type ItemProductType = {
  key: number;
  remove: (product: Product) => void;
  product: Product;
};

const ItemProduct: React.FC<ItemProductType> = ({ product, remove }) => {
  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="space-between"
      marginY={2}
      borderBottom="1px solid #CED0D3"
      paddingBottom={3}
    >
      <Box display="flex">
        <CardMedia
          component="img"
          sx={{ width: 120, height: 120, objectFit: "cover" }}
          image={product.img_url}
          alt="product"
          loading="lazy"
        />
        <CardContent
          sx={{
            paddingY: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography
            fontSize="18px"
            fontWeight={700}
            lineHeight="24px"
            fontFamily="Open sans"
          >
            {product.name}
          </Typography>
          <Typography fontSize="16px" fontWeight={700} fontFamily="Open sans">
            Quantity: {product.quantity}
          </Typography>
          <Box display="flex">
            <RemoveItem icon type="product" element={product} />
          </Box>
        </CardContent>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="end">
        <Typography
          fontSize="18px"
          fontWeight={700}
          lineHeight="16px"
          color="#091625"
          fontFamily="Open sans"
        >
          ${product.price}
        </Typography>
        <Typography fontSize="16px" fontWeight={700} fontFamily="Open sans">
          Total: ${product.quantity * product.price}
        </Typography>
      </Box>
    </Box>
  );
};

export default ItemProduct;
