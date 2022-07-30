import { Box, Container, Grid, Heading, Image } from "@chakra-ui/react";
import React from "react";
import ExploreCard from "../Home/Explore/ExploreCard";
import Hostel1 from "../../assets/home/hostel-image1.png";
import Hostel2 from "../../assets/home/hostel-image2.png";
import Hostel3 from "../../assets/home/hostel-image3.png";
import Hostel4 from "../../assets/home/hostel-image4.png";
import bgImg2 from "../../assets/search/search-bg-image.svg";

const SearchResult = () => {
  return (
    <Container
      maxW={{
        base: "100%",
        "2xl": "container.xl",
      }}
      p={0}
      mt="5.0625rem"
    >
      <Box
        position="relative"
        pt="6.5625rem"
        pb={{ base: "40rem", lg: "17rem" }}
      >
        <Image
          src={bgImg2}
          position="absolute"
          top={"0"}
          zIndex={"-1"}
          h="full"
          w={"full"}
          objectFit={"cover"}
        />
        <Container
          maxW={{
            base: "container.sm",
            md: "container.md",
            lg: "container.lg",
            xl: "container.xl",
          }}
        >
          <Heading
            fontWeight={"bold"}
            color="white"
            fontSize={{ base: "2rem", md: "3.25rem" }}
            textAlign="center"
            position="relative"
            maxW={"max-content"}
            m={"auto"}
            mt={{ base: "3rem", lg: "auto" }}
          >
            Search Results
            <Box
              position="absolute"
              height={"2.5px"}
              width={"70%"}
              backgroundColor={"#EFE307"}
              ml={"-34px"}
              bottom="-15px"
            />
            <Box
              position="absolute"
              height={"2.5px"}
              width={"70%"}
              backgroundColor={"#EFE307"}
              mr={"20px"}
              bottom="-37.5px"
              right={"0"}
            />
          </Heading>
          <Grid
            templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
            columnGap={"10rem"}
            rowGap={{ base: "7rem", md: "10rem" }}
            mt="10.375rem"
          >
            <ExploreCard
              name="Queens Hostel"
              price="N 138,000"
              imgSrc={Hostel1}
            />
            <ExploreCard
              name="Amore Hostel"
              price="N 175,000"
              imgSrc={Hostel2}
            />
            <ExploreCard
              name="Chidi House"
              price="N 205,000"
              imgSrc={Hostel3}
            />
            <ExploreCard
              name="Villa Homes"
              price="N 300,000"
              imgSrc={Hostel4}
            />
          </Grid>
        </Container>
      </Box>
    </Container>
  );
};

export default SearchResult;
