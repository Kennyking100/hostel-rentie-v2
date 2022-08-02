import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import SearchBtn from "../helpers/SearchBtn";
import SearchHeroImage from "./SearchHeroImage";

const SearchHero = () => {
  return (
    <Flex mb="5.625rem" justifyContent={"space-between"} alignItems="center">
      <Box width={{ base: "100%", lg: "47%" }}>
        <Box
          as="h1"
          textStyle="h1"
          textShadow="5px 5px 15px #1D1D1D1A"
          color={"GreenLight"}
          fontWeight="medium"
        >
          Search
        </Box>
        <Text mt="3.4375rem" mb="5.625rem" color={"Grey1D"} textStyle="body">
          You can now get and pair room and apartments with people. Try now to
          pair your apartment with someone Share the bills and facilities of
          apartment with someone or people
        </Text>
        <SearchBtn />
      </Box>
      <Box
        w={"47%"}
        display={{ base: "none", lg: "block" }}
        h="456px"
        position="relative"
      >
        <SearchHeroImage />
      </Box>
    </Flex>
  );
};

export default SearchHero;
