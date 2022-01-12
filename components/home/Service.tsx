import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import Image from "next/image";

const service1 = [
  {
    content:
      "The best service apartments in Kurnool for your short and extended stays.You travel with a purpose and we assure an effortlessly comfortable, convenient and absolutely homelike stay every time you visit the City of Nizams.Embrace congenial pleasures and a home like environment with Rk Inn, Premium Serviced Apartments. The apartment offers an outdoor pool. A car rental service is available at Rk Inn Serviced Apartment.",
    image: "/img/banner/konda.png",
  },
];

const Service = (props: any) => {
  return (
    <>
      <Typography
        variant="h4"
        gutterBottom
        component="div"
        sx={{ textAlign: "center", padding: "30px" }}
      >
        <b>About RK INN Services</b>
      </Typography>

      <Grid container>
        {service1.map((item: any, index: any) => {
          return (
            <>
              <Grid item xs={12} sm={12} md={6}>
                <Typography
                  variant="body1"
                  component="p"
                  gutterBottom
                  sx={{
                    fontSize: "16px",
                    lineHeight: "1.9",
                    textAlign: "justify",
                    color: "rgb(99, 102, 111)",
                    padding: "30px",
                    justifyContent: "flex-end",
                    display: "flex",
                  }}
                  data-aos="fade-right"
                >
                  {item.content}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Box
                  sx={{
                    width: "400px",
                    height: "300px",
                    margin: "0 auto",
                  }}
                >
                  <Image
                    src={item.image}
                    alt=""
                    height="100%"
                    width="100%"
                    layout="responsive"
                    data-aos="fade-left"
                  />
                </Box>
              </Grid>
            </>
          );
        })}
      </Grid>
    </>
  );
};

export default Service;
