import { Box, Container } from "@chakra-ui/react";
import React from "react";
import Layout from "../Layout";
import Newsletter from "../Home/Newsletter";
import SearchResult from "./SearchResult";
import SearchHero from "./SearchHero";
import SearchFilter from "./SearchFilter";

const SearchPage = () => {
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
        <SearchHero />
        <SearchFilter />
      </Container>
      <SearchResult />
      <Box mt={{ base: "-25rem", lg: "0rem" }}>
        <Newsletter />
      </Box>
    </Layout>
  );
};

export default SearchPage;
