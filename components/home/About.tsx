import { Box, Grid, Paper, styled, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
import React from "react";

const aboutHotel = [
  {
    id: 1,
    image: "/img/banner/1-xl.jpeg",
  },
  {
    id: 2,
    image: "/img/banner/2-xl.jpeg",
  },
  {
    id: 3,
    image: "/img/banner/3-xl.jpeg",
  },
];

const About = (props: any) => {
  return (
    <>
      <br />
      <Typography
        variant="h4"
        gutterBottom
        component="div"
        sx={{ textAlign: "center" }}
      >
        Where do you want to go?
      </Typography>

      <Typography
        variant="body1"
        gutterBottom
        component="div"
        sx={{ textAlign: "center" }}
      >
        We recommend you the next destinations witha sweet discounted price
      </Typography>

      <br />
      <Grid container spacing={6}>
        {aboutHotel.map((aboutHotel, index) => {
          return (
            <Grid
              key={index}
              item
              lg={4}
              md={6}
              sm={12}
              xs={12}
              sx={{ textAlign: "center", padding: "8px" }}
            >
              <Box
                key={aboutHotel.id}
                style={{ borderRadius: "16px", overflow: "hidden" }}
              >
                <div
                  style={{
                    position: "relative",
                    borderRadius: "16px",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={aboutHotel.image}
                    alt=""
                    width="400px"
                    height="300px"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                  />
                </div>
              </Box>
            </Grid>
          );
        })}
      </Grid>
      <br />
      <br />
    </>
  );
};
export default About;
