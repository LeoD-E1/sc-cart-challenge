import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Categories = () => {
  const categories = [
    "All products",
    "Packaging",
    "Drinkware",
    "Apparel",
    "Notebooks",
    "Backpacks",
  ];
  return (
    <Box width="100%" sx={{ backgroundColor: "#E6E8E9" }}>
      <Container maxWidth="xl">
        <Box width="100%" display="flex" justifyContent="start">
          {categories.map((category) => (
            <Typography
              key={category}
              lineHeight="16px"
              fontWeight={400}
              color="#535C67"
              marginRight={3}
              paddingY={3}
              fontSize="15px"
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
