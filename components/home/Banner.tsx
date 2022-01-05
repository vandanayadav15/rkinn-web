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
import 'swiper/css';
import Image from "next/image";
// import "/node-modules/swiper/swiper-bundle.min.css";
SwiperCore.use([Virtual, Navigation, Pagination, Scrollbar, A11y, Autoplay]);


const styles:any = {
  paperContainer: {
    backgroundImage: `url(${"../../../hotel_banner.jpeg"})`,
    height: "600px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    marginTop: "60px",
  },
};

const Banner = () => {
    const slides = [
      { xl: "/img/banner/1-xl.jpeg", xs: "/img/banner/1-xs.jpeg", alt: "banner-1" },
      { xl: "/img/banner/2-xl.jpeg", xs: "/img/banner/2-xs.jpeg", alt: "banner-2" },
      { xl: "/img/banner/3-xl.jpeg", xs: "/img/banner/3-xs.jpeg", alt: "banner-3" },
      { xl: "/img/banner/4-xl.jpeg", xs: "/img/banner/4-xs.jpeg", alt: "banner-4" },
      { xl: "/img/banner/5-xl.jpeg", xs: "/img/banner/5-xs.jpeg", alt: "banner-5" }

  ];
  return (
  <Container >
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
            <Image src={item.xs} alt={item.alt} height="450" width="350" layout="responsive"/>
          </Hidden>
         <Hidden smDown>
            <Image src={item.xl} alt={item.alt} height="450" width="1080" layout="responsive" />
          </Hidden> 
           
        </SwiperSlide>
      ))}
    </Swiper>
  </Container>
  );
}

export default Banner;