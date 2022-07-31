import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import SearchBtn from "../helpers/SearchBtn";
import SearchHeroImage from "../../assets/home/search-hero-image.svg";

const SearchHero = () => {
  return (
    <Flex mb="5.625rem" justifyContent={"space-between"} alignItems="center">
      <Box width={{ base: "100%", lg: "47%" }}>
        <Heading
          // fontSize={{ base: "2.875rem", sm: "3.75rem", lg: "5.625rem" }}
          size={"4xl"}
          textShadow="5px 5px 15px #1D1D1D1A"
          color={"GreenLight"}
          fontWeight="medium"
        >
          Search
        </Heading>
        <Text
          mt="3.4375rem"
          mb="5.625rem"
          color={"Grey1D"}
          fontSize={{
            base: "1.25rem",
            md: "1.5rem",
          }}
        >
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
        <Image
          src={SearchHeroImage}
          position="absolute"
          left={0}
          w="full"
          objectFit="cover"
          bottom={"-5rem"}
        />
      </Box>
    </Flex>
  );
};

export default SearchHero;
