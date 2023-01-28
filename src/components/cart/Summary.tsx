import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Pack, Product } from "../../types/cart";
import ButtonSummary from "./summary/Button";

interface SummaryInterface {
  total: number;
  totalItems: number;
}

const Summary: React.FC<SummaryInterface> = ({ totalItems, total }) => {
  return (
    <>
      <Typography fontSize={"24px"} fontWeight={"700"} fontFamily="Open sans">
        Order Summary
      </Typography>
      <Box
        paddingY={4}
        borderBottom="1px solid #6B737C"
        width={"100%"}
        display="flex"
        justifyContent={"space-between"}
        alignItems="center"
      >
        <Typography fontSize={"16px"} fontFamily="Open sans" color="#6B737C">
          Number of items
        </Typography>
        <Typography fontSize={"16px"} fontFamily="Open sans" color="#6B737C">
          {totalItems}
        </Typography>
      </Box>

      <Box
        paddingY={3}
        width={"100%"}
        display="flex"
        justifyContent={"space-between"}
        alignItems="center"
      >
        <Typography fontSize={"16px"} fontFamily="Open sans" color="#091625">
          Total:
        </Typography>
        <Typography
          fontSize={"24px"}
          fontFamily="Open sans"
          color="#091625"
          fontWeight={700}
          lineHeight={"16px"}
        >
          ${total.toFixed(2)}
        </Typography>
      </Box>

      <Box
        display={"flex"}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap="10px"
      >
        <ButtonSummary
          background="#3A4451"
          border="#3A4451"
          title="Proceed to Checkout"
        />
        <ButtonSummary
          background="#fff"
          border="#3A4451"
          title="Continue shopping"
          color="#3A4451"
        />
      </Box>
    </>
  );
};

export default Summary;
