import { Container, Typography } from "@mui/material";
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
// import "/node-modules/swiper/swiper-bundle.min.css";
SwiperCore.use([Virtual, Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const Banner = () => {
    const slides = [
    "slide 1",
    "slide 2",
    "slide 3",
    "slide 11",
    "slide 12",
    "slide 13",
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
      {slides.map((slideContent, index) => (
        <SwiperSlide key={index} virtualIndex={index}>
          <div style={{ height: 500 }}>{slideContent}</div>
        </SwiperSlide>
      ))}
    </Swiper>
  </Container>
  );
}

export default Banner;