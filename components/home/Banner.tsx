import { Container, Typography } from "@mui/material";
import React from "react";

const Banner = () => {
  return (
  <Container sx={{display:"flex", alignItems: "center", height: "700px"}} >
    <Typography variant="h1" color="primary">
        Page Under Contruction
    </Typography>
  </Container>
  );
}

export default Banner;