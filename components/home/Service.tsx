
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
