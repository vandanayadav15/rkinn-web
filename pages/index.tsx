import type { GetStaticProps, NextPage } from "next";
import * as React from "react";
import Container from "@mui/material/Container";
import item from "./api/index.json";
import Banner from "../components/utils/Banner";
import Service from "../components/utils/Service";
import About from "../components/utils/About";
import Footer from "../components/utils/Footer";
const Home: NextPage = (props: any) => {
  return (
    <Container >
      <Banner />
      <Service />
      <About />
      <Footer />
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // const res = await fetch('/data/index.json')
  // const item = await res.json();
  // const item = {};
  return {
    props: {
      data: item,
    },
    revalidate: 5000000,
  };
};
export default Home;
