import React from "react";
import Details from "./Details/Details";
import Explore from "./Explore/Explore";
import Hero from "./Hero/Hero";
import Layout from "../Layout";
import Newsletter from "./Newsletter";

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <Explore />
      <Details />
      <Newsletter />
    </Layout>
  );
};

export default HomePage;
