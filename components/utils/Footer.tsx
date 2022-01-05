import { Grid, Paper, Typography } from "@mui/material";
import { color } from "@mui/system";
import Image from "next/image";
import React from "react";

const Footer = (Props: any) => {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.475090729844!2d78.04513111458797!3d15.831608249967815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb5e743480cde25%3A0xeb37b5d4a6e6aa38!2sTrust%20Indane%20Gas%20Agency!5e0!3m2!1sen!2sin!4v1640956209064!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        data-aos="fade-up"
      ></iframe>
      <br />
      <br />
      <Paper
        elevation={0}
        variant="outlined"
        color="primary"
        style={{
          paddingTop: "50px",
          display: "flex",
          justifyContent: "space-between",
          color: "#FFF",
          background: "#15323a",
        }}
        data-aos="fade-up"
      >
        <Grid container spacing={1}>
          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ textAlign: "center" }}>
            <Image
              src="/icons/trust.png"
              width="360"
              height="62"
              alt="trust-logo"
            />
            <br />
            <Typography variant="h6" gutterBottom component="div">
              #39/258, Tekanna Nilayam,
            </Typography>
            <Typography variant="h6" gutterBottom component="div">
              Near Chand Plaza, Vaddegeri,
            </Typography>
            <Typography variant="h6" gutterBottom component="div">
              KURNOOL - 518 001.
            </Typography>

            <Typography variant="h5" gutterBottom component="div">
              GSTIN : 37AAOFT3944L1ZG
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
              Contact : {"08518-228699 / 7901511111"}
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
              Drop a mail : rkinn@gmail.com
            </Typography>
          </Grid>

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
              Copyright © TRUST INDANE 2022. All rights reserved
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default Footer;
