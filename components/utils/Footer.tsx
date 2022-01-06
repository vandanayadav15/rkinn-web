import { Container, Grid, Paper, Typography } from "@mui/material";
import { color } from "@mui/system";
import Image from "next/image";
import React from "react";

const Footer = (Props: any) => {
  return (
    <>
      <Paper
        elevation={0}
        variant="outlined"
        color="primary"
        style={{
          padding: "50px 0px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          color: "#FFF",
          background: "#15323a",
        }}
        data-aos="fade-up"
      >
        <Container>
          <Grid container spacing={1}>
            <Grid
              item
              lg={6}
              md={6}
              sm={12}
              xs={12}
              sx={{ textAlign: "center" }}
            >
              <br />
              <Typography
                variant="h2"
                gutterBottom
                component="div"
                color="primary"
              >
                Hotel RK INN,
              </Typography>
              <Typography variant="h6" gutterBottom component="div">
                Behind APARTC Bus Stand,
              </Typography>
              <Typography variant="h6" gutterBottom component="div">
                Kallur Rd,
              </Typography>
              <Typography variant="h6" gutterBottom component="div">
                KURNOOL - 518 001.
              </Typography>
            </Grid>
            <Grid
              item
              lg={4}
              md={6}
              sm={12}
              xs={12}
              sx={{ margin: "auto", textAlign: "center" }}
            >
              <Typography
                variant="h5"
                gutterBottom
                component="div"
                color="primary"
              >
                For Bookings or Queries :
              </Typography>
              <br />
              <Typography variant="h6" gutterBottom component="div">
                Contact : {"08518-294455"}
              </Typography>
              <Typography
                color="secondary"
                variant="h5"
                gutterBottom
                component="div"
              >
                OR
              </Typography>
              <Typography variant="h6" gutterBottom component="div">
                Drop a mail : hotelrkinndeluxelodge@gmail.com
              </Typography>
            </Grid>
          </Grid>
        </Container>
        <Grid container>
          <Grid
            item
            lg={12}
            md={12}
            sm={12}
            xs={12}
            sx={{ textAlign: "center" }}
          >
            <hr />
            <Typography variant="caption" gutterBottom color="primary">
              Copyright © RK INN 2022. All rights reserved
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default Footer;
