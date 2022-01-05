import { Container, Typography } from "@mui/material";
import React from "react";


const styles:any = {
  paperContainer: {
    backgroundImage: `url(${"../../../hotel_banner.jpeg"})`,
    height: "600px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    marginTop: "60px",
  },
};

const Banner = () => {
  return (
    <Container sx={{ display: "flex", alignItems: "center", height: "700px" }} >
      <Typography
        variant="h1"
        color="primary"
      >
        Page Under Contruction
      </Typography>
      <Typography
        variant="h6"
        component="div"
        gutterBottom
        align="center"
        data-aos="zoom-in-up"
        sx={{ padding: "20"}}
      >
      Indane has now become one of the largest packed-LPG brands in the world with IndianOil as the second 
        </Typography>
  </Container>
  );
}

export default Banner;