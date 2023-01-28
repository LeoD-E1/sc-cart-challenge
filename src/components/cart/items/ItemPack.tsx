import React, { useEffect, useState, useContext } from "react";
import Box from "@mui/material/Box";
import { Pack, Product } from "../../../types/cart";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
import RemoveItem from "./RemoveItem";
import EditItem from "./EditItem";
import EditQuantity from "./EditQuantity";

type ItemPackType = {
  key: number;
  pack: Pack;
};

const ItemPack: React.FC<ItemPackType> = ({ pack }) => {
  const productsPrice = pack.products.reduce(
    (acc: number, curr: Product) => acc + curr.price,
    0
  );

  const totalPrice = productsPrice * pack.quantity;

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
        <Box
          component="div"
          sx={{ width: 120, height: 120, backgroundColor: "#E6E8E9" }}
        >
          {pack.products.map((product) => (
            <img
              key={product.id}
              src={product.img_url}
              alt=""
              style={{ width: "40px" }}
              loading="lazy"
            />
          ))}
        </Box>
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
            fontStyle="normal"
          >
            {pack.name}
          </Typography>
          <EditQuantity type="pack" element={pack} />
          <ul>
            {pack.products.map((product: Product) => (
              <li key={product.id} style={{ display: "flex" }}>
                <Typography fontSize="14px" fontWeight={600} lineHeight="24px">
                  {product.name}{" "}
                </Typography>
                <Box marginLeft={1} sx={{ color: "#A8AEB3" }}>
                  <span>(</span>
                  {product.category.map((category: string) => (
                    <span key={category}>{category.concat(" ")}</span>
                  ))}
                  <span>)</span>
                </Box>
              </li>
            ))}
          </ul>
          <Box display="flex" alignItems="center">
            <EditItem />
            <Typography>|</Typography>
            <RemoveItem type="pack" element={pack} />
          </Box>
        </CardContent>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="end"
        lineHeight={"16px"}
      >
        <Typography
          fontSize="18px"
          fontWeight={700}
          lineHeight="16px"
          color="#091625"
          marginBottom={1}
        >
          ${productsPrice}
        </Typography>
        <Typography fontSize="18px" fontWeight={700} lineHeight={"16px"}>
          Total: ${totalPrice.toFixed(2)}
        </Typography>
      </Box>
    </Box>
  );
};

export default ItemPack;
