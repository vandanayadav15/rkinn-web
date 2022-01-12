import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

const amenitiesHotel = [
  {
    id: 1,
    image: "/img/banner/hotela.svg",
    title: "Accomodation",
  },
  {
    id: 2,
    image: "/img/banner/big-benb.svg",
    title: "Tourist Attractions",
  },
  {
    id: 3,
    image: "/img/banner/restaurent3.svg",
    title: "Restaurants",
  },
  {
    id: 4,
    image: "/img/banner/ticket2.svg",
    title: "Events & Tickets",
  },
  {
    id: 5,
    image: "/img/banner/coffee3.svg",
    title: "Coffee Shop",
  },
  {
    id: 6,
    image: "/img/banner/parliamentc.svg",
    title: "Government",
  },
];

const Amenities = (props: any) => {
  return (
    <>
      <Typography
        variant="h4"
        gutterBottom
        component="div"
        sx={{
          textAlign: "center",
          padding: "14px",
          borderBottomWidth: 3,
        }}
      >
        <b>RK INN Amenities</b>
      </Typography>
      <Grid container spacing={0.5}>
        {amenitiesHotel.map((item: any, index: any) => {
          return (
            <Grid
              key={index}
              item
              lg={4}
              md={6}
              sm={12}
              xs={12}
              sx={{
                textAlign: "center",
                padding: "10px",
              }}
            >
              <Box key={item.id} sx={{}}>
                <Image
                  src={item.image}
                  alt=""
                  width="60px"
                  height="60px"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                />
              </Box>
              <b> {item.title}</b>
            </Grid>
          );
        })}
      </Grid>
      <br />
    </>
  );
};
export default Amenities;
