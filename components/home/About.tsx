
import { Box, Grid, Paper, styled, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Image from "next/image"
import React from 'react'


const holtes = [
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


const About = (props:any) => {
    return (
        <>
             <br />
      <Typography
        variant="h4"
        gutterBottom
        component="div"
        sx={{ textAlign: "center" }}
                color={'primary'}
                 >
                Where do you want to go?
            </Typography>

        <Typography
        variant="h6"
        gutterBottom
        component="div"
        sx={{ textAlign: "center" }}
        color={'primary'} >
        We recommend you the next destinations witha sweet discounted price
            </Typography>
            
       <br />
      <Grid container spacing={4}>
        {holtes.map((holtes,index) => {
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
                      key={holtes.id}
                      
                style={{
                //   padding: "30px",
                //   background: "#ebebeb",
                //   height: "360px
                }}
                // data-aos="fade-up"
                // data-aos-delay={200*index}
                  >
                <Image
                  src={holtes.image}
                  alt=""
                              width="300px" height="300px" 
                               data-aos="fade-up"
                               data-aos-anchor-placement="top-bottom"
                />
                {/* <Typography variant="h6" gutterBottom component="div" color="primary">
                  {holtes.text}
                </Typography>{" "}
                <br /> */}
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
                  {/* {holtes.para} */}
                          </Typography>{" "}
                          
              </Box>
            </Grid>
          );
        })}
      </Grid>
      <br />
      <br />
           
        </>
    )
}
export default About;


