
import { Container, ImageListItem,Grid, Typography, Paper, Box, CssBaseline } from '@mui/material'
import React from 'react'
import Image from "next/image"
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
        serviceContainer: {
            width: "100%",
            display: "flex",
            flexDirection: "column",
            margin: "24px auto"
    },
    serviceHeading: {
            textAlign:"center"
    },
    Content: {
            display: "flex",
            padding: "24px"
    },
    serviceContent: {
        width: "50%"
    },
    serviceText:{
            fontSize: "16px",
            lineHeight: "1.9", 
            textAlign: "justify",
            color: "rgb(99, 102, 111)"
            
    },
     serviceImageContainer: {
            width: "50%",
            display: "flex",
    justifyContent:"flex-end"
    },
       serviceImage: { 
            width: "400px",
            height: "300px",
            margin: "0 auto"
            
    }
});

export const Service = (props: any) => {
    console.log(props)
     const classes = useStyles();
    return (
        <>
            
         {/* <br />
      <Typography
        variant="h3"
        gutterBottom
        component="div"
        sx={{ textAlign: "center" }}
        color={'primary'}
      >
       {data.name}
      </Typography>
      <br />
      <Grid container spacing={4}>
        {data.map((item:any,index:any) => {
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
              <ImageListItem key={item.id}>
                <Image src={item.image} alt="" width="48" height="48"/>
              </ImageListItem>
              <Typography
                variant="h6"
                gutterBottom
                color={'primary'}
              >
                {item.image}
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
                {item.content}
              </Typography>
            </Grid>
          );
        })}
      </Grid> */}


            <div className={classes.serviceContainer}>
                <div className={classes.serviceHeading}>
                    <Typography variant="h2" gutterBottom component="div">
                        <b>{props.data.name}</b>
                    </Typography>
                </div>
                <div className={classes.Content}>
                    <div className={classes.serviceContent}>
                        <Typography
                            variant="body1"
                            component="p"
                            gutterBottom 
                            className={classes.serviceText}
                            data-aos="fade-right"
                        >   
                        {props.data.content}
                    </Typography>
                    </div>
                    <div className={classes.serviceImageContainer}>
                        <div className={classes.serviceImage}> 
                            <Image src={props.data.image}
                                alt='' height="100%"
                                width="100%"
                                layout="responsive"
                                data-aos="fade-left" />     
                        </div>
                    </div>
                </div>
            </div>
        </> 
  );
};

export default Service;
