import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Select,
  Text,
} from "@chakra-ui/react";
import React from "react";
import SearchBtn from "../helpers/SearchBtn";
import Layout from "../Layout";
import Btn from "../helpers/Btn";
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
      <Newsletter />
    </Layout>
  );
};

export default SearchPage;
