import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Pack, Product } from "../../types/cart";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

interface RemoveType {
  icon?: boolean;
  element: any;
  type: "product" | "pack";
}

const RemoveItem: React.FC<RemoveType> = ({ icon = false, element, type }) => {
  const { removePack, removeProduct } = useContext(CartContext);

  const action = (type: string) => {
    type === "pack" ? removePack(element) : removeProduct(element);
  };

  return (
    <Button size="small" onClick={() => action(type)}>
      {icon && (
        <DeleteForeverOutlinedIcon sx={{ width: "16px", height: "16px" }} />
      )}
      <Typography fontSize="12px" fontWeight={600}>
        remove
      </Typography>
    </Button>
  );
};

export default RemoveItem;
