import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Pack, Product } from "../../types/cart";
interface SummaryInterface {
  packs: Pack[];
  products: Product[];
  total: number;
}

const Summary: React.FC<SummaryInterface> = ({ products, packs, total }) => {
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
          {packs.length + products.length}
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

      <Box></Box>
    </>
  );
};

export default Summary;
