import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

const Branch = (props: any) => {
  return (
    <>
      <Typography
        variant="h4"
        gutterBottom
        component="div"
        sx={{
          textAlign: "center",
          padding: "13px",
          textDecorationLine: "underline",
          textDecorationThickness: "5px",
          textDecorationColor: "#f73f5b",
          textUnderlinePosition: "under",
        }}
      >
        {props.data.name}
      </Typography>
      {props.data.branch.map((item: any, index: any) => (
        <div key={index}>
          <Typography
            variant="h6"
            gutterBottom
            component="div"
            padding="14px"
            sx={{ textAlign: "left" }}
          >
            Explore IN{" "}
            <Typography
              variant="h6"
              gutterBottom
              component="span"
              sx={{ textAlign: "left" }}
              color="primary"
            >
              {item.place}
            </Typography>
          </Typography>
          <Grid container spacing={3}>
            {item.hotels.map((hotels: any, index: any) => {
              return (
                <Grid
                  key={index}
                  item
                  lg={4}
                  md={6}
                  sm={12}
                  xs={12}
                  sx={{
                    textAlign: "left",
                    padding: "8px",
                    borderBottomStyle: "solid",
                    borderColor: "rgb(201, 76, 76)",
                  }}
                >
                  <Box key={hotels.id}>
                    <Box
                      sx={{
                        borderRadius: "16px",
                        overflow: "hidden",
                      }}
                    >
                      <Image
                        src={hotels.image}
                        alt=""
                        width="450px"
                        height="250px"
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                      />
                    </Box>
                    {hotels.text}
                    <Typography
                      variant="body1"
                      sx={{
                        textAlign: "left",
                        padding: "0px 0px",
                        letterSpacing: "1px",
                      }}
                      gutterBottom
                      component="div"
                      textAlign="justify"
                    ></Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </div>
      ))}

      <br />
    </>
  );
};
export default Branch;
