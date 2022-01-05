import { Grid, ImageListItem, Paper, Typography } from "@mui/material";
import Image from "next/image"
import React from "react";

const trusts = [
  {
    id: 1,
    image: "../../../icons/188631.svg",
    text: "OUR STORY",
    para: "Being The Energy of India is much more than just notching up a high revenue . It is far more than being the highest-ranked Indian Energy PSU (Rank 212) in Fortune's 'Global 500' listing and the vision to become 'A Globally Admired Company.",
  },
  {
    id: 2,
    image: "../../../icons/994410.svg",
    text: "ABOUT US",
    para: "IndianOil, a diversified, integrated energy major with presence in almost all the streams of oil, gas, petrochemicals and alternative energy sources; a world of high-calibre people, state-of-the-art technologies and cutting-edge R&D; a world of best practices, quality-consciousness and transparency.",
  },
  {
    id: 3,
    image: "../../../icons/238102.svg",
    text: "OUR CERTIFICATE",
    para: "IndianOil, has been conferred with the Pride of India Award for the brave Corona Fight by the Public Relations Society of India. Under this special category, PRSI recognised the leaders whose vision contributed immensely in tackling the threats associated with the pandemic.",
  },
];

const About = (Props: any) => {
  return (
    <>
      <br />
      <Typography
        variant="h3"
        gutterBottom
        component="div"
        sx={{ textAlign: "center" }}
        color={'primary'}
      >
        About TRUST
      </Typography>
      <br />
      <Grid container spacing={4}>
        {trusts.map((trust,index) => {
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
              <Paper
                key={trust.id}
                style={{
                  padding: "20px",
                  background: "#ebebeb",
                  height: "360px"
                }}
                data-aos="fade-up"
                data-aos-delay={200*index}
              >
                <img
                  src={trust.image}
                  alt=""
                  width="48" height="48"
                  // style={{
                  //   marginBottom: "8px",
                  //   marginTop: "8px",
                  // }}
                />
                <Typography variant="h6" gutterBottom component="div" color="primary">
                  {trust.text}
                </Typography>{" "}
                <br />
                <Typography
                  variant="body1"
                  sx={{ textAlign: "left" }}
                  gutterBottom
                  component="div"
                  style={{
                    padding: "0px 0px",
                    letterSpacing: "1px",
                    textAlign: "justify",
                  }}
                >
                  {trust.para}
                </Typography>{" "}
              </Paper>
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
