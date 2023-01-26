import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Pack, Product } from "../../types/cart";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import Button from "@mui/material/Button";

type ItemPackType = {
  key: number;
  remove: (pack: Pack) => void;
  retrieveItems: (ids: number[]) => Product[];
  pack: Pack;
};

const ItemPack: React.FC<ItemPackType> = ({ pack, remove, retrieveItems }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const price = products.reduce(
    (acc: number, curr: Product) => acc + curr.price,
    0
  );
  console.log("🚀 ~ file: ItemPack.tsx:19 ~ price", price);

  const retrieve = (ids: number[]) => {
    const products: Product[] = retrieveItems(ids);
    setProducts(products);
  };

  useEffect(() => {
    retrieve(pack.product_ids);
  }, []);

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
          sx={{ width: 120, height: 120, backgroundColor: "#999" }}
        >
          {products.map((product) => (
            <img
              key={product.id}
              src={product.img_url}
              alt=""
              style={{ width: "40px" }}
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
          <Typography fontSize="18px" fontWeight={700} lineHeight="24px">
            {pack.name}
          </Typography>
          <Typography fontSize="16px" fontWeight={700}>
            Quantity: {pack.quantity}
          </Typography>
          <ul>
            {products.map((product: Product) => (
              <li key={product.id}>
                {product.category.map((category: string) => (
                  <span key={category}>{category.concat(", ")}</span>
                ))}
              </li>
            ))}
          </ul>
          <Box display="flex">
            <Button size="small" onClick={() => remove(pack)}>
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
          ${price}
        </Typography>
        <Typography fontSize="16px" fontWeight={700}>
          Total: ${pack.quantity * price}
        </Typography>
      </Box>
    </Box>
  );
};

export default ItemPack;
