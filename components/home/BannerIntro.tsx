
import { makeStyles } from '@mui/styles';
import React from 'react'

const useStyles = makeStyles({
  bannerIntroContainer: {
            width: "100%",
            display: "flex",
            flexDirection: "column",
            margin: "24px auto"
    },
     bannerIntroImage: { 
            width: "100%",
            height: "300px",
         margin: "0 auto",
    },
    // bannerIntrocontent:{
    //      position: "absolute",
    //      bottom: 0,
    //     color: "#f1f1f1",
    //     width: "100%",
    //     padding: "20px"
    //  }
})
export const BannerIntro = (props:any) => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.bannerIntroContainer}>
               <div className={classes.bannerIntroContainer}>
                        <div className={classes.bannerIntroImage}> 
                        <img src="/img/banner/9-xl.jpeg" className={classes.bannerIntroImage} /> 
                        {/* <div className={classes.bannerIntrocontent}>
    <h1>Heading</h1>
    <p>Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri ponderum tractatos ei.</p>
  </div> */}
                    </div>
                    </div>
            </div>
        </div>
    )
}
export default BannerIntro;
