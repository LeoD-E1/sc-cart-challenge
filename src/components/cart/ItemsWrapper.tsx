import Items from "./Items";
import Container from "@mui/material/Container";
import Summary from "./Summary";

const ItemsWrapper = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        gap: 2,
        marginY: 2,
      }}
    >
      <div style={{ width: "75%" }}>
        <Items />
      </div>
      <div style={{ width: "25%" }}>
        <Summary />
      </div>
    </Container>
  );
};

export default ItemsWrapper;
