
import { Container, ImageListItem,Grid, Typography, Paper, Box, CssBaseline } from '@mui/material'
import React from 'react'
import Image from "next/image"

const styles: any = {
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
            
        },
        img :{
                width: "100%",
                height: "100%"
        }
    }; 

export const Service = (props: any) => {
    
    return (
        <>
            <div style={styles.serviceContainer}>
                <div style={styles.serviceHeading}>
                    <Typography variant="h2" gutterBottom component="div">
                        <b>Service</b>
                    </Typography>
                </div>
                <div style={styles.Content}>
                    <div style={styles.serviceContent}>
                        <Typography
                            variant="body1"
                            component="p"
                            gutterBottom 
                            style={styles.serviceText}
                        >
                            
                        The best service apartments in Hyderabad for your short and extended stays.You travel with a purpose and we assure an effortlessly comfortable, convenient and absolutely homelike stay every time you visit the City of Nizams.Embrace congenial pleasures and a home like environment with Blobb, Premium Serviced Apartments. The apartment offers an outdoor pool. A car rental service is available at Blobb Serviced Apartment.
                    </Typography>
                    </div>
                    <div style={styles.serviceImageContainer}>
                        <div style={styles.serviceImage}> 
                            <img src="/hotel_banner.jpeg" style={styles.img} /> 
                        </div>
                    </div>
                </div>
            </div>

        </> 
  );
};

export default Service;