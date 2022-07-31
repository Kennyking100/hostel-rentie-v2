import { Box, Container, Flex, Heading, Input, Text } from "@chakra-ui/react";
import React from "react";
import Btn from "../helpers/Btn";

const Newsletter = () => {
  return (
    <Container
      maxW={{
        base: "container.sm",
        md: "container.md",
        lg: "container.lg",
        xl: "container.xl",
      }}
    >
      <Box
        boxShadow="5px 5px 25px"
        color={"#1D1D1D1A"}
        borderRadius="20px"
        w={{ base: "100%", md: "80%" }}
        m="auto"
        p={{ base: "31px", md: "52px 100px" }}
        textAlign="center"
        bg={"GreenLighter"}
        borderRight="20px"
        mb={180}
        mt={"105px"}
      >
        <Heading as="h3" size="xl" fontWeight={"semibold"} color={"GreenDark"}>
          Our Newsletter
        </Heading>
        <Text color="GreenDark" mt="22px" mb="33px" fontStyle={"italic"}>
          Subscribe to our email list to get the latest updates on apartments
        </Text>
        <Flex
          gap={10}
          alignItems="center"
          flexDir={{ base: "column", lg: "row" }}
        >
          <Input
            placeholder="Email"
            border={`3px solid`}
            borderRadius="35px"
            borderColor={"YellowLight"}
            textColor="GreenDarker"
            height="62px"
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
    </Container>
  );
};

export default Newsletter;
