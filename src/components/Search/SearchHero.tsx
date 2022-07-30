import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import SearchBtn from "../helpers/SearchBtn";
import SearchHeroImage from "../../assets/home/search-hero-image.svg";

const SearchHero = () => {
  return (
    <Flex mb="5.625rem" justifyContent={"space-between"} alignItems="center">
      <Box w={"45%"}>
        <Heading
          fontSize={"5.625rem"}
          textShadow="5px 5px 15px #1D1D1D1A"
          color={"GreenLight"}
          fontWeight="medium"
        >
          Search
        </Heading>
        <Text mt="3.4375rem" mb="5.625rem" color={"Grey1D"} fontSize="1.125rem">
          You can now get and pair room and apartments with people. Try now to
          pair your apartment with someone Share the bills and facilities of
          apartment with someone or people
        </Text>
        <SearchBtn />
      </Box>
      <Box w={"45%"} h="423px" position="relative">
        <Image
          src={SearchHeroImage}
          position="absolute"
          left={0}
          w="full"
          objectFit="cover"
          bottom={"-10rem"}
        />
      </Box>
    </Flex>
  );
};

export default SearchHero;
