import { Box, Center, Flex, Grid, Input, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const TopSection = () => {
  return (
    <Box pb={10} borderBottom="1px solid rgba(0, 0, 0, 0.2)">
      <Box
        textShadow="5px 5px 15px #1D1D1D1A"
        color={"GreenLight"}
        fontWeight="medium"
        mb="1.875rem"
        as="h1"
        textStyle="h1"
      >
        Find roommate
      </Box>
      <Flex
        justifyContent={"space-between"}
        alignItems="center"
        flexDir={{ base: "column", lg: "row" }}
        mb={"0.75rem"}
      >
        <Box width={{ base: "100%", lg: "47%" }} mb={{ base: "2rem", lg: "0" }}>
          <Flex gap={"0.5rem"} alignItems="center" mb="0.75rem">
            <Box
              w={"15px"}
              h="15px"
              borderRadius={"full"}
              bg="YellowLight"
            ></Box>
            <Text fontWeight={"light"} textStyle="body">
              Upload your apartment
            </Text>
          </Flex>
          <Flex
            gap={"0.5rem"}
            alignItems="center"
            fontWeight={"light"}
            textStyle="body"
          >
            <Box
              w={"15px"}
              h="15px"
              borderRadius={"full"}
              bg="YellowLight"
            ></Box>
            <Text>Pair with roommate</Text>
          </Flex>
          <Text
            mt="1.375rem"
            fontSize={"sm"}
            fontWeight="light"
            w={{ base: "100%", md: "60%" }}
          >
            Upload at least 2 pictures describing the property Max of 10 media
          </Text>
        </Box>
        <Grid
          gridTemplateColumns={{ base: "1fr 1fr", sm: "1fr 1fr 1fr" }}
          columnGap="5rem"
          width={{ base: "100%", lg: "47%" }}
        >
          <Center
            minW={"112px"}
            w="full"
            h="112px"
            border={"1px solid"}
            borderColor="GreenLight"
            mb={4}
          >
            <Box w="40px" h="40px" color={"GreenLight"}>
              <AiOutlinePlus />
            </Box>
          </Center>

          <Box
            minW={"112px"}
            w="full"
            h="112px"
            border={"1px solid"}
            borderColor="GreenLight"
            mb={4}
          ></Box>
          <Box
            minW={"112px"}
            w="full"
            h="112px"
            border={"1px solid"}
            borderColor="GreenLight"
            mb={4}
          ></Box>
        </Grid>
      </Flex>
      <Flex gap={"2rem"} flexDir={{ base: "column", sm: "row" }}>
        <Text textStyle={"h4"} fontWeight="semibold" color={"#2b2024"}>
          Description
        </Text>
        <Input
          placeholder="Type here"
          border={"1px solid"}
          borderColor="GreenLight"
          bg={"GreenLightest"}
          h="59px"
          _placeholder={{
            fontStyle: "italic",
          }}
        />
      </Flex>
    </Box>
  );
};

export default TopSection;
