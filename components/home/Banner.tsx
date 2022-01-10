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

const Banner = ({ data }: any) => {
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
  const BannerText = ({ item }: any) => (
    <>
      <Typography
        variant="h3"
        component="div"
        gutterBottom
        align="center"
        data-aos="fade-up"
      >
        {item.title}
      </Typography>
      <Typography
        variant="body2"
        component="div"
        gutterBottom
        align="center"
        data-aos="fade-up"
      >
        {item.summary}
      </Typography>
    </>
  );
  return (
    <Container>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        virtual
        navigation
        autoplay
        pagination={{ clickable: true }}
      >
        {data.map((item: any, index: any) => (
          <SwiperSlide key={index} virtualIndex={index}>
            <div style={styles.container}>
              <Hidden smUp>
                <Image
                  src={item.xs}
                  alt={item.alt}
                  height="450"
                  width="350"
                  layout="responsive"
                />
                <BannerText item={item} />
              </Hidden>
              <Hidden smDown>
                <Image
                  src={item.xl}
                  alt={item.alt}
                  height="450"
                  width="1080"
                  layout="responsive"
                />
                <BannerText item={item} />
              </Hidden>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Banner;
