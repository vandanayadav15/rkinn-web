import { Grid, Paper, Typography } from "@mui/material";

const styles:any = {
  paperContainer: {
    backgroundImage: `url(${"../../../new_banner.jpeg"})`,
    height: "600px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    marginTop: "60px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end"
  },
};

const Banner = (Props: any) => {
  return (
    <Paper style={styles.paperContainer} sx={{color: "white"}} >
        <Typography
        variant="h2"
        component="div"
        gutterBottom
        align="center"
        data-aos="fade-up"
      >
        WE BUILD TRUST
      </Typography>
      <Typography
        variant="h6"
        component="div"
        gutterBottom
        align="center"
        data-aos="zoom-in-up"
        sx={{ padding: "20"}}
      >
       Indane has now become one of the largest packed-LPG brands in the world with IndianOil as the second largest marketer of LPG globally. Indane is a Consumer Superbrand as conferred by the Superbrands Council of India. It is a brand synonymous with safety, reliability, and convenience.
      </Typography> 
    </Paper>

  );
};

export default Banner;
