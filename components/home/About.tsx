
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Image from "next/image"
import React from 'react'


// const holtes = [
//   {
//     id: 1,
//         image: "img/banner/1-xl.jpeg",
//   },
//   {
//     id: 2,
//     image: "img/banner/2-xl.jpeg",
//   },
//   {
//     id: 3,
//     image: "img/banner/3-xl.jpeg",
//   },
// ];

const useStyles = makeStyles({
        aboutContainer: {
            width: "100%",
            display: "flex",
            flexDirection: "column",
            margin: "24px auto"       
    },
    aboutHeading: {
            textAlign:"center"
    },
     aboutImageContainer: {
            width: "50%",
            display: "flex",
            justifyContent:"flex-end"
    },
      aboutImage: { 
            width: "700px",
            height: "300px",
            margin: "0 auto",
     }
});

const About = (props:any) => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.aboutContainer}>
                <div className={classes.aboutHeading}>
                    <Typography variant="h2" gutterBottom component="div">
                        <b>Where do you want to go?</b>
                    </Typography>
                </div>
                    <div className={classes.aboutImageContainer}>
                    <div className={classes.aboutImage}> 
                         <Image src="/img/banner/1-xl.jpeg"
                                alt='' height="300px"
                                width="300px"
                                data-aos="fade-up"/>   
                    </div>
                    <div className={classes.aboutImage}> 
                         <Image src="/img/banner/1-xl.jpeg"
                                alt='' height="300px"
                                width="300px"
                                 data-aos="fade-up" />   
                    </div>
                     <div className={classes.aboutImage}> 
                         <Image src="/img/banner/1-xl.jpeg"
                                alt='' height="300px"
                                width="300px"
                                 data-aos="fade-up" />   
                       </div>
                 </div>
            </div>
        </>
    )
}
export default About;


