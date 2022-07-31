import React from "react";
import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import Btn from "../helpers/Btn";

export const TextS = "5px 5px 15px #1D1D1D1A";

const SearchItemDetails = () => {
  return (
    <Container
      maxW={{
        base: "container.sm",
        md: "container.md",
        lg: "container.lg",
        xl: "container.xl",
      }}
    >
      <Flex px={{ base: 4, sm: 8 }} mb="7.375rem" flexDir={"column"}>
        <Flex justifyContent={"space-between"} flexWrap="wrap">
          <Heading
            fontWeight={"medium"}
            size="2xl"
            textColor={"GreenLight"}
            textShadow={TextS}
            m={{ base: "auto", sm: "0" }}
            mb={4}
          >
            Funaab
          </Heading>
          <Btn
            bg="YellowLight"
            width={{ base: "100%", sm: "max-content" }}
            mb={4}
            color={"GreenDark"}
            fontWeight="bold"
            fontSize={{ base: "1.3rem", md: "1.5rem" }}
            _hover={{
              background: "YellowLight",
            }}
            cursor="default"
          >
            N 138,000.00
          </Btn>
        </Flex>
        <Text
          color={"GreenDark"}
          fontWeight="medium"
          fontStyle={"italic"}
          fontSize="1.1875rem"
          textAlign={{ base: "center", sm: "start" }}
        >
          14, Abode street, Abeokuta , Ogun state
        </Text>
        <Flex
          justifyContent={"space-evenly"}
          flexWrap="wrap"
          color={"GreenLight"}
          mt="29px"
          mb="79px"
          fontSize={{ base: "md", lg: "3xl" }}
          fontWeight="500"
          gap={"22.5px"}
          alignSelf="flex-start"
        >
          <Box as={"span"} pr={"22.5px"} borderRight="2.25px solid #EFE307">
            1 bedroom
          </Box>
          <Box as={"span"} pr={"22.5px"} borderRight="2.25px solid #EFE307">
            Shared toilet
          </Box>
          <Box as={"span"}>Shared Kitchen</Box>
        </Flex>
        <Box
          color={"Grey1D"}
          fontSize={{ base: "md", lg: "lg" }}
          mb="5.8125rem"
          textAlign={{ base: "center", sm: "start" }}
        >
          <Text>A very newly furnished apartment.</Text>
          <Text>With cctv camera Need just one roommate</Text>
          <Text>Preferably a female.</Text>
        </Box>
        <Flex justifyContent={"space-between"} flexWrap="wrap">
          <Flex
            gap={"1rem"}
            flexWrap="wrap"
            mb={4}
            w={{ base: "100%", sm: "auto" }}
          >
            <Btn
              bg="GreenDark"
              width={{ base: "100%", sm: "max-content" }}
              color={"white"}
              fontSize={"1.3125rem"}
              _hover={{
                background: "Hover.GreenDark",
              }}
              mb={8}
            >
              Apply as roommate
            </Btn>
            <Btn
              width={{ base: "100%", sm: "max-content" }}
              minW={{ base: "100%", sm: "310px", md: "auto" }}
              bg="GreenLight"
              color={"white"}
              fontSize={"1.3125rem"}
              _hover={{
                background: "Hover.GreenLight",
              }}
              mb={8}
            >
              Make a payment
            </Btn>
          </Flex>
          <Btn
            bg="GreenDark"
            width={{ base: "100%", sm: "max-content" }}
            mb={8}
            color={"white"}
            fontSize={"1.3125rem"}
            _hover={{
              background: "Hover.GreenDark",
            }}
          >
            Save
          </Btn>
        </Flex>
      </Flex>
    </Container>
  );
};

export default SearchItemDetails;