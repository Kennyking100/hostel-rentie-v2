import { Box, Container, Flex, Image } from "@chakra-ui/react";
import React from "react";
import bgImg from "../../../assets/home/explore-bg-image.svg";
import ExploreCard from "./ExploreCard";
import Hostel1 from "../../../assets/home/hostel-image1.png";
import Hostel2 from "../../../assets/home/hostel-image2.png";
import Hostel3 from "../../../assets/home/hostel-image3.png";
import Hostel4 from "../../../assets/home/hostel-image4.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ExploreVariant = {
  hidden: {
    opacity: 0,
    width: 0,
  },
  visible: {
    opacity: 1,
    width: "70%",
    transition: {
      duration: 0.5,
    },
  },
};

const ArrowVariant = {
  hidden: {
    x: 0,
    opacity: 1,
  },
  visible: {
    x: [0, 10, -10, 0],
    scale: [1, 0.9, 0.9, 1],
    opacity: [1, 0, 0, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
    },
  },
};

const Explore = () => {
  const navigate = useNavigate();

  return (
    <Container
      maxW={{
        base: "100%",
        // "2xl": "container.xl",
      }}
      // className="hero-bg-image"
      p={0}
    >
      <Box
        position="relative"
        pt="10.125rem"
        pb={{ base: "10rem", lg: "17rem" }}
        // my={{ "2xl": "2rem" }}
        // bg="#01923F"
      >
        <Box
          position={"absolute"}
          h="full"
          w={"full"}
          clipPath={{
            base: "polygon(50% 1%, 100% 0.5%, 100% 99.5%, 50% 99%, 0 99.5%, 0 0.5%)",
            md: "polygon(50% 2%, 100% 1%, 100% 99%, 50% 98%, 0 99%, 0 1%)",
            "2xl": "polygon(50% 3%, 100% 1%, 100% 99%, 50% 90%, 0 99%, 0 1%)",
          }}
          bg={"GreenLight"}
          top={0}
          zIndex={-1}
        ></Box>
        <Box
          position={"absolute"}
          h="full"
          w={"full"}
          clipPath={{
            base: "polygon(50% 1%, 100% 0%, 100% 100%, 50% 99%, 0 100%, 0 0)",
            md: "polygon(50% 2%, 100% 0%, 100% 100%, 50% 98%, 0 100%, 0 0)",
            "2xl": "polygon(50% 3%, 100% 0%, 100% 100%, 50% 90%, 0 100%, 0 0)",
          }}
          bg={"#91C6A3"}
          top={0}
          zIndex={-2}
        ></Box>
        {/* <Image
          src={bgImg}
          position="absolute"
          top={"0"}
          zIndex={"-1"}
          h="full"
          w={"full"}
          objectFit={"cover"}
        /> */}
        <Container
          maxW={{
            base: "container.sm",
            md: "container.md",
            lg: "container.lg",
            xl: "container.xl",
          }}
        >
          <Box
            fontWeight={"bold"}
            color="white"
            textAlign="center"
            position="relative"
            maxW={"max-content"}
            m={"auto"}
            mt={{ base: "3rem", lg: "auto" }}
            textStyle="h2"
          >
            Explore Around you
            <Box
              position="absolute"
              height={"3px"}
              width={"70%"}
              backgroundColor={"#EFE307"}
              ml={{ base: 0, md: "-34px" }}
              bottom="-15px"
              as={motion.div}
              variants={ExploreVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />
            <Box
              position="absolute"
              height={"3px"}
              width={"70%"}
              backgroundColor={"#EFE307"}
              mr={"20px"}
              bottom="-37.5px"
              right={"0"}
              as={motion.div}
              variants={ExploreVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />
          </Box>

          <Flex mt="10.375rem" justifyContent={"space-between"} flexWrap="wrap">
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
          </Flex>
          <Flex
            justifyContent={"center"}
            textColor={"white"}
            textStyle="h3"
            m="auto"
            alignItems={"center"}
            mb={"5rem"}
            fontWeight={"500"}
            position="relative"
            maxW={"max-content"}
          >
            <Box
              textColor={"white"}
              textStyle="h3"
              w={"max-content"}
              onClick={() => navigate("/search")}
              mr={2}
            >
              View more{" "}
            </Box>
            <Box
              as={motion.span}
              variants={ArrowVariant}
              initial="hidden"
              animate="visible"
              display={"inline-block"}
            >
              {">"}
            </Box>{" "}
            <Box
              as={motion.span}
              variants={ArrowVariant}
              initial="hidden"
              animate="visible"
              display={"inline-block"}
            >
              {">"}
            </Box>
            <Box
              position="absolute"
              height={"1.5px"}
              width="100%"
              backgroundColor={"white"}
              as={motion.div}
              bottom={"8px"}
            />
          </Flex>
        </Container>
      </Box>
    </Container>
  );
};

export default Explore;
