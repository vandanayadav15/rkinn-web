import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import Home from "@mui/icons-material/Home";
import MuiNextLink from "./MuiNextLink";
import Navbar from "./Navbar";
import SideDrawer from "./SideDrawer";
import HideOnScroll from "./HideOnScroll";
import Fab from "@mui/material/Fab";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import BackToTop from "./BackToTop";
import { Box, Chip, Icon, Typography, Stack } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Image from "next/image";

const Offset = styled("div")((data: any) => data.theme.mixins.toolbar);

export const navLinks = [
  { title: `home`, path: `/` },
  { title: `about us`, path: `/about-us` },
  { title: `menu`, path: `/menu` },
  { title: `catering`, path: `/catering` },
  { title: `contact`, path: `/contact` },
];

const Header = () => {
  return (
    <>
      <HideOnScroll>
        <AppBar color="default" position="fixed">
          <Container>
            <Toolbar
              sx={{
                display: `flex`,
                justifyContent: `space-between`,
                maxWidth: "1440px",
              }}
            >
              <IconButton edge="start" aria-label="home">
                <MuiNextLink activeClassName="active" href="/">
                  <Image
                    height="56"
                    width="120"
                    src="/icons/logo.svg"
                    alt="logo"
                  />
                </MuiNextLink>
              </IconButton>

              <IconButton
                edge="start"
                aria-label="home"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                <MuiNextLink href="/">
                  <Image
                    height="56"
                    width="120"
                    src="/icons/indane.png"
                    alt="logo"
                  />
                </MuiNextLink>
              </IconButton>

              <Stack
                direction="column"
                justifyContent="flex-end"
                alignItems="center"
                spacing={0}
              >
                <Typography variant="caption" component="h2" color="default">
                  For Booking & Queries
                </Typography>
                <Typography
                  variant="caption"
                  gutterBottom
                  component="div"
                  color="primary"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                  }}
                >
                  <PhoneIcon fontSize="small" color="secondary" /> &nbsp;{" "}
                  {"08518-228699 / 7901511111"}
                </Typography>
                <Typography
                  variant="caption"
                  gutterBottom
                  component="div"
                  color="primary"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                  }}
                >
                  <MailOutlineIcon fontSize="small" color="secondary" /> &nbsp;{" "}
                  {"rkinn@gmail.com"}
                </Typography>
              </Stack>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Offset id="back-to-top-anchor" />
      <BackToTop>
        <Fab color="secondary" size="large" aria-label="back to top">
          <KeyboardArrowUp />
        </Fab>
      </BackToTop>
    </>
  );
};

export default Header;
