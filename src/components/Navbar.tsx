import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import SearchIcon from "@mui/icons-material/Search";
import { Search, SearchIconWrapper, StyledInputBase } from "./styled.navbar";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

const links = [
  { title: "Sign in", icon: <PermIdentityOutlinedIcon /> },
  { title: "Cart", icon: <LocalMallOutlinedIcon /> },
];

function Navbar() {
  return (
    <AppBar position="static" sx={{ background: "#091625" }}>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Toolbar sx={{ maxWidth: "60%", width: "100%" }}>
          <Box
            sx={{
              padding: 1,
              paddingX: 6,
              background: "#999",
            }}
          >
            <Typography fontSize={14}>LOGO</Typography>
          </Box>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search products"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
        <Box display={"flex"} sx={{ width: "40%" }} justifyContent="flex-end">
          {links.map((link) => (
            <Box
              key={link.title}
              display="flex"
              gap={1.5}
              justifyContent="center"
              alignItems="center"
              padding={3}
            >
              {link.icon}
              <Typography>{link.title}</Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </AppBar>
  );
}
export default Navbar;
