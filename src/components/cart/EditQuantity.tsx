import React, { ChangeEvent, useContext } from "react";
import Input from "@mui/material/Input";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { CartContext } from "../../context/CartContext";

interface QuantityInterface {
  element: any;
  type: "pack" | "product";
}

const EditQuantity: React.FC<QuantityInterface> = ({ element, type }) => {
  const { editQuantityProduct, editQuantityPack } = useContext(CartContext);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newQuantity = Number(e.target.value);
    type === "product"
      ? editQuantityProduct(element?.id, newQuantity)
      : editQuantityPack(element?.id, newQuantity);
  };

  return (
    <Box display="flex">
      <Typography fontSize="16px" fontWeight={700} marginRight={1}>
        Quantity:
      </Typography>
      <select
        style={{
          width: "auto",
          border: "none",
          borderBottom: "1px solid #333",
          outline: "none",
          background: "#fff",
        }}
        defaultValue={element?.quantity}
        onChange={handleChange}
      >
        <option value={element?.quantity}>{element?.quantity}</option>
        {[...new Array(50)].map((val, i) => (
          <option key={i} value={i}>
            {i}
          </option>
        ))}
      </select>
    </Box>
  );
};

export default EditQuantity;
