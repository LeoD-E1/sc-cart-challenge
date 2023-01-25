import React from "react";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";

const Item = () => {
  return (
    <Box width="100%" display="flex" justifyContent="space-between">
      <Box display="flex">
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image="https://images.pexels.com/photos/11962006/pexels-photo-11962006.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Live from space album cover"
        />
      </Box>
    </Box>
  );
};

export default Item;
