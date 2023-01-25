import React from "react";
import Typography from "@mui/material/Typography";

const Summary = () => {
  return (
    <>
      <Typography fontSize={"24px"} fontWeight={"700"}>
        Order Summary
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          backgroundColor: "#999",
          width: "100%",
        }}
      >
        <h1>Summary</h1>
      </div>
    </>
  );
};

export default Summary;
