import { Grid, ImageListItem, Paper, Typography } from "@mui/material";
import Image from "next/image"
import React from "react";

const services = [
  {
    id: 1,
    image: "/icons/846449.svg",
    text: "DOMESTIC SERVICES",
    para: "Domestic LPG today is subsidized and hence are distributed only by public sector Oil marketing companies. LPG for domestic cooking purposes is available in 14.2Kg capacity cylinders with authorized LPG distributors of IOCL. Markets where transporting the 14.2 Kg cylinders are inconvenient.",
  },
  {
    id: 2,
    image: "/icons/126122.svg",
    text: "COMMERCIAL SERVICES",
    para: "As the commercial enterprise with the largest customer interface in India, IndianOil reaches precious petroleum fuels to every nook and corner of the country through its network of over 56,000 customer touch-points, surmounting the challenges of tough terrain, climate and accessibility.",
  },
  {
    id: 3,
    image: "/icons/942832.svg",
    text: "EXCELLENT WORKERS",
    para: "They are responsible for understanding customer needs and for interpreting customer requirements in real time. By focusing on the critical role of service employees and by developing strategies that lead to effective customer-oriented service",
  },
  {
    id: 4,
    image: "/icons/1584892.svg",
    text: "QUICK RESPONSE",
    para: "The '1906' is a telephone number that offers call center based services. The number is operational 24/7 to respond to emergency calls throughout pan-India. The '1906' service is also available in, Assamese, Bengali, Gujarati, Kannada, Marathi, Malayalam, Oriya, Tamil, and Telugu, along with Hindi and English. This will enable '1906' to respond to callers from different parts of India. Each complaint can be tracked online to keep a check on the progress.",
  },
  {
    id: 5,
    image: "/icons/478514.svg",
    text: "QUALITY ASSURED",
    para: "At IndianOil, we believe that it is possible to fuel the energy needs of the Nation while also protecting people and the environment. We are committed to conducting business in a manner that is compatible with the environmental and economic needs of the communities in which we operate, and that protects the safety and health of our employees, those involved with our operations, our customers and the public.",
  },
];

const Service = (Props: any) => {
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
        Welcome to TRUST INDANE
      </Typography>
      <br />
      <Grid container spacing={4}>
        {services.map((service,index) => {
          return (
            <Grid
              key={index}
              item
              lg={4}
              md={6}
              sm={12}
              xs={12}
              sx={{ margin: "auto", textAlign: "center" }}
              data-aos="fade-up"
              data-aos-delay={150*index}
            >
              <ImageListItem key={service.id}>
                <Image src={service.image} alt="" width="48" height="48"/>
              </ImageListItem>
              <Typography
                variant="h6"
                gutterBottom
                color={'primary'}
              >
                {service.text}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ textAlign: "left" }}
                gutterBottom
                component="div"
                style={{
                  padding: "0px 30px",
                  letterSpacing: "1px",
                  textAlign: "justify",
                }}
              >
                {service.para}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Service;
