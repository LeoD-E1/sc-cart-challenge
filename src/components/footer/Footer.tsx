import { Box, Typography, Container } from "@mui/material";
import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import "./footer.css";

const Footer = () => {
  const footerItems = [
    {
      title: "Our company",
      links: ["About us", "FAQ", "Partnertships", "Sustainability", "Blog"],
    },
    {
      title: "How we can help",
      links: ["Place a ticket", "Track your order", "Help center"],
    },
    {
      title: "Information",
      links: ["Contact us", "Live chat", "Privacy", "Terms of user"],
    },
  ];

  return (
    <Box padding={10} sx={{ background: "#E6E8E9" }} height={"540px"}>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Box>
          <div className="footer-columns">
            <Box
              display="flex"
              justifyContent="space-between"
              flexDirection="column"
            >
              <Box
                sx={{
                  padding: 1,
                  paddingX: 6,
                  background: "#CED0D3",
                  width: "172px",
                }}
              >
                <Typography fontSize={14}>LOGO</Typography>
              </Box>
              <Typography
                fontWeight={400}
                fontFamily="Open sans"
                fontSize={"15px"}
                color="#6B737C"
              >
                We sell custom products for all your needs. Packs and bulk
                products that you will enjoy
              </Typography>

              <Typography display="flex" alignItems="center">
                <PhoneIcon /> +1-202-555-0129
              </Typography>
            </Box>
            {footerItems.map((item) => (
              <Box className="item">
                <Typography
                  fontWeight={700}
                  fontFamily="Open sans"
                  fontSize={"16px"}
                >
                  {item.title}
                </Typography>
                {item.links.map((link) => (
                  <p
                    style={{
                      listStyle: "none",
                      fontFamily: "open sans",
                      color: "#3A4451",
                      fontSize: "16px",
                    }}
                  >
                    {link}
                  </p>
                ))}
              </Box>
            ))}
          </div>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography fontWeight={400} fontFamily="Open sans" fontSize={"14px"}>
            © 2022 Customer Products. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
