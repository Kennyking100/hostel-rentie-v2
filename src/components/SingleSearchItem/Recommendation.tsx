import { Box, Container, Grid } from "@chakra-ui/react";
import React from "react";
import ExploreCard from "../Home/Explore/ExploreCard";
import Hostel1 from "../../assets/home/hostel-image1.png";
import Hostel2 from "../../assets/home/hostel-image2.png";
import { motion } from "framer-motion";

const RecommendationVariant = {
  hidden: {
    opacity: 0,
    width: 0,
  },
  visible: {
    opacity: 1,
    width: "100%",
    transition: {
      duration: 0.5,
    },
  },
};

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
      p={{ base: 4, sm: 16 }}
      pb={0}
      mb="10rem"
    >
      <Box
        fontWeight={"bold"}
        color="white"
        position="relative"
        mt={{ base: "3rem", lg: "auto" }}
        textStyle="h3"
        as="h3"
      >
        Recommendations
        <Box
          position="absolute"
          height={"1.5px"}
          width="100%"
          backgroundColor={"#EFE307"}
          bottom="-18px"
          as={motion.div}
          variants={RecommendationVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />
      </Box>
      <Grid
        mt="5rem"
        gridTemplateColumns={"repeat(auto-fill,minmax(288px,1fr))"}
        columnGap={"5rem"}
      >
        <ExploreCard name="Queens Hostel" price="N 138,000" imgSrc={Hostel1} />
        <ExploreCard name="Amore Hostel" price="N 175,000" imgSrc={Hostel2} />
        <ExploreCard name="Queens Hostel" price="N 138,000" imgSrc={Hostel1} />
      </Grid>
    </Container>
  );
};

export default Recommendation;
