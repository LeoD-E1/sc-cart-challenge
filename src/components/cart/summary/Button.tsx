import Button from "@mui/joy/Button";
import { styled, alpha } from "@mui/material/styles";
import React from "react";

interface ButtonSumm {
  background: string;
  border: string;
  title: string;
  color?: string;
}

const ButtonSummary: React.FC<ButtonSumm> = ({
  background,
  border,
  title,
  color,
}) => {
  return (
    <Button
      sx={{
        background: background,
        border: `1px solid ${border}`,
        padding: "12px 24px",
        fontFamily: "Open sans",
        color: color ?? "white",
        width: "100%",
      }}
    >
      {title}
    </Button>
  );
};

export default ButtonSummary;
