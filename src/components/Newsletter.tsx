import { Box, Flex, Heading, Input, Text } from "@chakra-ui/react";
import React from "react";
import Btn from "./helpers/Btn";

const Newsletter = () => {
  return (
    <Box
      boxShadow="5px 5px 25px"
      color={"#1D1D1D1A"}
      borderRadius="20px"
      w={"70%"}
      m="auto"
      p={"31px 100px"}
      textAlign="center"
      bg={"GreenLighter"}
      borderRight="20px"
      mb={200}
    >
      <Heading as="h3" size="lg" color={"GreenDark"}>
        Our Newsletter
      </Heading>
      <Text color="GreenDark" mt="29px" mb="44px">
        Subscribe to our email list to get the latest updates on apartments
      </Text>
      <Flex gap={10} alignItems="center" height={"70px"}>
        <Input
          placeholder="Email"
          border={`3px solid`}
          borderRadius="35px"
          borderColor={"YellowLight"}
          textColor="GreenDarker"
          height="full"
          boxShadow="5px 5px 15px #1D1D1D1A"
          _placeholder={{ fontSize: "20px", paddingLeft: "20px" }}
          bg="white"
        />
        <Btn
          width={{ base: "100%", sm: "max-content" }}
          _hover={{
            background: "Hover.GreenLight",
          }}
          bg="GreenLight"
          color={"white"}
          px={16}
        >
          Subscribe
        </Btn>
      </Flex>
    </Box>
  );
};

export default Newsletter;
