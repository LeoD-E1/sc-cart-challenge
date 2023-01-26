import React from "react";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import { Product } from "../../types/cart";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import Button from "@mui/material/Button";

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
          <Typography fontSize="18px" fontWeight={700} lineHeight="24px">
            {product.name}
          </Typography>
          <Typography fontSize="16px" fontWeight={700}>
            Quantity: {product.quantity}
          </Typography>
          {/* <ul>
            {product.category.map((cat) => (
              <li key={cat}>{cat}</li>
            ))}
          </ul> */}
          <Box display="flex">
            <Button size="small" onClick={() => remove(product)}>
              <DeleteForeverOutlinedIcon
                sx={{ width: "16px", height: "16px" }}
              />
              <Typography fontSize="12px" fontWeight={600}>
                remove
              </Typography>
            </Button>
          </Box>
        </CardContent>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="end">
        <Typography
          fontSize="18px"
          fontWeight={700}
          lineHeight="16px"
          color="#091625"
        >
          ${product.price}
        </Typography>
        <Typography fontSize="16px" fontWeight={700}>
          Total: ${product.quantity * product.price}
        </Typography>
      </Box>
    </Box>
  );
};

export default ItemProduct;
