import { Box, Container, Flex } from "@chakra-ui/react";
import PrettyRating from "pretty-rating-react";
import React from "react";
import Layout from "../Layout";
import Recommendation from "./Recommendation";
import SearchItemDetails from "./SearchItemDetails";
import SearchItemHero from "./SearchItemHero";

const SingleSearchItemPage = () => {
  const colors = {
    star: ["#d9ad26", "#d9ad26", "#434b4d"],
  };
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
        <Flex
          justifyContent={"space-between"}
          alignItems="center"
          mb="3rem"
          flexWrap={"wrap"}
        >
          <Box
            as="h1"
            textStyle="h1"
            textShadow="5px 5px 15px #1D1D1D1A"
            color={"GreenLight"}
            fontWeight="medium"
            w={{ base: "100%", sm: "auto" }}
          >
            Queen’s Hostel
          </Box>
          <Flex className="pretty-rating" alignItems={"center"} textStyle="h4">
            <PrettyRating value={3.5} colors={colors.star} />
            <Box as="span" color={"GreenLight"}>
              &nbsp; (0)
            </Box>
          </Flex>
        </Flex>
      </Container>
      <SearchItemHero />
      <SearchItemDetails />
      <Recommendation />
    </Layout>
  );
};

export default SingleSearchItemPage;
