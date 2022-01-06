import type { GetStaticProps, NextPage } from "next";
import * as React from "react";
import Container from "@mui/material/Container";

import Footer from "../components/utils/Footer";
import Banner from "../components/home/Banner";
import PageData from "./api/index.json";
import Service from "../components/home/service";

const Home: NextPage = ({ data }: any) => {
  return (
    <>
      <Container sx={{ marginTop: 2 }}>
        <Banner data={data.slides} />
        <Service />
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
