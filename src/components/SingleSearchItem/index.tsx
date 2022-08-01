import { Box, Container } from "@chakra-ui/react";
import React from "react";
import Layout from "../Layout";
import Recommendation from "./Recommendation";
import SearchItemDetails from "./SearchItemDetails";
import SearchItemHero from "./SearchItemHero";

const SingleSearchItemPage = () => {
  return (
    <Layout>
      <Container
        maxW={{
          base: "container.sm",
          md: "container.md",
          lg: "container.lg",
          xl: "container.xl",
        }}
      >
        <Box
          as="h1"
          textStyle="h1"
          textShadow="5px 5px 15px #1D1D1D1A"
          color={"GreenLight"}
          fontWeight="medium"
          mb="3rem"
        >
          Queen’s Hostel
        </Box>
      </Container>
      <SearchItemHero />
      <SearchItemDetails />
      <Recommendation />
    </Layout>
  );
};

export default SingleSearchItemPage;
