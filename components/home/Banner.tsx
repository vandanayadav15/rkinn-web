import { Container, Hidden, Typography } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Virtual,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import "swiper/css";
import Image from "next/image";
// import "/node-modules/swiper/swiper-bundle.min.css";
SwiperCore.use([Virtual, Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const Banner = () => {
  const slides = [
    {
      xl: "/img/banner/1-xl.jpeg",
      xs: "/img/banner/1-xs.jpeg",
      alt: "banner-1",
    },
    {
      xl: "/img/banner/2-xl.jpeg",
      xs: "/img/banner/2-xs.jpeg",
      alt: "banner-2",
    },
    {
      xl: "/img/banner/3-xl.jpeg",
      xs: "/img/banner/3-xs.jpeg",
      alt: "banner-3",
    },
    {
      xl: "/img/banner/4-xl.jpeg",
      xs: "/img/banner/4-xs.jpeg",
      alt: "banner-4",
    },
    {
      xl: "/img/banner/5-xl.jpeg",
      xs: "/img/banner/5-xs.jpeg",
      alt: "banner-5",
    },
  ];
  const styles: any = {
    container: {
      position: "relative",
      textAlign: "center",
      color: "white",
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    centered: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      fontSize: "32px",
    },
  };
  return (
<<<<<<< HEAD
    <Container> 
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      virtual
      navigation
      autoplay
      pagination={{ clickable: true }}
    >
      {slides.map((item, index) => (
        <SwiperSlide key={index} virtualIndex={index}>
          <Hidden smUp>
            <div style={styles.container}>
            <Image src={item.xs} alt={item.alt} height="450" width="350" layout="responsive" />
              {/* <p style={styles.centered}>Some text here</p> */}
              <Typography  style={styles.centered}
        variant="h1"
        component="div"
        gutterBottom
        align="center"
        data-aos="fade-up"
=======
    <Container>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        virtual
        navigation
        autoplay
        pagination={{ clickable: true }}
>>>>>>> 46e94bf27c8549b47e7538b4fb19a4911f2c5210
      >
        {slides.map((item, index) => (
          <SwiperSlide key={index} virtualIndex={index}>
            <div style={styles.container}>
<<<<<<< HEAD
            <Image src={item.xl} alt={item.alt} height="450" width="1080" layout="responsive" />
              {/* <p style={styles.centered}>Some text here</p> */}
                <Typography  style={styles.centered}
        variant="h1"
        component="div"
        gutterBottom
        align="center"
        data-aos="fade-up"
      >
        WE BUILD TRUST
      </Typography>
              </div>
          </Hidden> 
        </SwiperSlide>
      ))}
=======
              <Hidden smUp>
                <Image
                  src={item.xs}
                  alt={item.alt}
                  height="450"
                  width="350"
                  layout="responsive"
                />
                {/* <p style={styles.centered}>Some text here</p> */}
                <Typography
                  style={styles.centered}
                  variant="h2"
                  component="div"
                  gutterBottom
                  align="center"
                  data-aos="fade-up"
                >
                  WE BUILD TRUST
                </Typography>
              </Hidden>
              <Hidden smDown>
                <Image
                  src={item.xl}
                  alt={item.alt}
                  height="450"
                  width="1080"
                  layout="responsive"
                />
                {/* <p style={styles.centered}>Some text here</p> */}
                <Typography
                  style={styles.centered}
                  variant="h2"
                  component="div"
                  gutterBottom
                  align="center"
                  data-aos="fade-up"
                >
                  WE BUILD TRUST
                </Typography>
              </Hidden>
            </div>
          </SwiperSlide>
        ))}
>>>>>>> 46e94bf27c8549b47e7538b4fb19a4911f2c5210
      </Swiper>
    </Container>
  );
};

export default Banner;
