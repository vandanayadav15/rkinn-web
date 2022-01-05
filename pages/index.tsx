import type { GetStaticProps, NextPage } from "next";
import * as React from "react";
import Container from "@mui/material/Container";
import item from "./api/index.json";
import PUC from "../components/utils/PUC";
import Footer from "../components/utils/Footer";
const Home: NextPage = (props: any) => {
  return (
    <Container >
      <PUC />
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
