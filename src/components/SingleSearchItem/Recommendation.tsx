import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import ExploreCard from "../Home/Explore/ExploreCard";
import Hostel1 from "../../assets/home/hostel-image1.png";
import Hostel2 from "../../assets/home/hostel-image2.png";

const Recommendation = () => {
  return (
    <Container
      maxW={{
        base: "container.sm",
        md: "container.md",
        lg: "container.lg",
        xl: "container.xl",
      }}
      borderRadius={"20px"}
      backgroundImage="linear-gradient(#144B34, #01923F)"
      p={16}
      pb={0}
      mb="10rem"
    >
      <Heading
        fontWeight={"bold"}
        color="white"
        size={"2xl"}
        position="relative"
        mt={{ base: "3rem", lg: "auto" }}
      >
        Recommendations
        <Box
          position="absolute"
          height={"1.5px"}
          width="100%"
          backgroundColor={"#EFE307"}
          bottom="-18px"
        />
      </Heading>
      <Flex mt="5rem" justifyContent={"space-between"} flexWrap="wrap">
        <ExploreCard name="Queens Hostel" price="N 138,000" imgSrc={Hostel1} />
        <ExploreCard name="Amore Hostel" price="N 175,000" imgSrc={Hostel2} />
      </Flex>
    </Container>
  );
};

export default Recommendation;
