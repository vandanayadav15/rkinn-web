
import { makeStyles } from '@mui/styles';
import React from 'react'
import Image from "next/image"
import { Typography } from '@mui/material';

const useStyles = makeStyles({
  bannerIntroContainer: {
            width: "100%",
            display: "flex",
            flexDirection: "column",
            marginTop:"60px",
            margin: "24px auto"
    },
     bannerIntroImage: { 
            width: "100%",
            height: "300px",
            margin: "0 auto",
    }
})

export const BannerIntro = (props: any) => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.bannerIntroContainer}>
               <div className={classes.bannerIntroContainer}>
                        <div className={classes.bannerIntroImage}> 
                        <Image src={props.data.image}
                            alt=''
                            height="25px"
                            width="100%"
                            layout="responsive" /> 
                    </div>
                </div>
            </div>
     </div>
    )
}
export default BannerIntro;
