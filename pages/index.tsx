import type { GetStaticProps, NextPage } from "next";
import * as React from "react";
import PageData from "./api/index.json";
import Footer from "../components/utils/Footer";
import Banner from "../components/home/Banner";
import Service from "../components/home/Service";
import Container from "@mui/material/Container";
import About from "../components/home/About";
import Branch from "../components/home/Branch";
import Amenities from "../components/home/Amenities";
import Maps from "../components/home/Maps";

const Home: NextPage = ({ data }: any) => {
  return (
    <>
      <Container sx={{ marginTop: 2 }}>
        <Banner data={data.slides} />
        <Service data={data.service} />
        <About data={data.about} />
        <Branch data={data.branch_master} />
        <Amenities data={data.amenities} />
        <Maps />
      </Container>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // const res = await fetch('/data/index.json')
  // const item = await res.json();
  const item = PageData;
  // console.log("Index Page :", item);
  return {
    props: {
      data: item,
    },
    revalidate: 5000000,
  };
};
export default Home;
