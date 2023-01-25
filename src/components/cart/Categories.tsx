import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Categories = () => {
  const categories = [
    "All products",
    "Packaging",
    "Drinkware",
    "Apparel",
    "Backpacks",
  ];
  return (
    <Box width="100%" sx={{ backgroundColor: "#E6E8E9" }}>
      <Container maxWidth="xl">
        <Box width="100%" display="flex" justifyContent="start">
          {categories.map((category) => (
            <Typography
              key={category}
              color="#999"
              marginRight={5}
              paddingY={3}
              letterSpacing={0.5}
              fontSize="14px"
            >
              {category}
            </Typography>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Categories;
