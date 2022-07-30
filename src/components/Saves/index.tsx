import { Box, Container, Heading } from "@chakra-ui/react";
import React from "react";
import Newsletter from "../Home/Newsletter";
import Layout from "../Layout";
import SearchResult from "../Search/SearchResult";
import Recommendation from "../SingleSearchItem/Recommendation";

const SavesPage = () => {
  const header = (
    <Heading
      fontWeight={"bold"}
      color="white"
      fontSize={{ base: "2.375rem", md: "3.375rem" }}
      textAlign="center"
      position="relative"
      maxW={"max-content"}
      mt={{ base: "3rem", lg: "auto" }}
    >
      Saves
      <Box
        position="absolute"
        height={"2.5px"}
        width="150%"
        backgroundColor={"#EFE307"}
        bottom="-18px"
      />
      <Box
        position="absolute"
        height={"2.5px"}
        width="200%"
        backgroundColor={"#EFE307"}
        bottom="-32.5px"
      />
    </Heading>
  );
  return (
    <Layout>
      <Box mt="-80px" mb={200}>
        <SearchResult headerComponent={header} />
      </Box>
      <Container
        maxW={{
          base: "container.sm",
          md: "container.md",
          lg: "container.lg",
          xl: "container.xl",
        }}
      >
        <Recommendation />
      </Container>
      <Box mt={{ base: "0", lg: "0rem" }}>
        <Newsletter />
      </Box>
    </Layout>
  );
};

export default SavesPage;
