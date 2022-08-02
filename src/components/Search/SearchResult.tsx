import {
  Box,
  Container,
  Flex,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import ExploreCard from "../Home/Explore/ExploreCard";
import Hostel1 from "../../assets/home/hostel-image1.png";
import Hostel2 from "../../assets/home/hostel-image2.png";
import Hostel3 from "../../assets/home/hostel-image3.png";
import Hostel4 from "../../assets/home/hostel-image4.png";
import bgImg2 from "../../assets/search/search-bg-image.svg";
import { motion } from "framer-motion";

const SearchResultVariant = {
  hidden: {
    opacity: 0,
    width: 0,
  },
  visible: {
    opacity: 1,
    width: "90%",
    transition: {
      duration: 0.5,
    },
  },
};

const SearchResultVariant2 = {
  hidden: {
    opacity: 0,
    width: 0,
  },
  visible: {
    opacity: 1,
    width: "90%",
    transition: {
      duration: 0.5,
    },
  },
};

interface Props {
  headerComponent?: JSX.Element;
}

const SearchResult: React.FC<Props> = ({ headerComponent }) => {
  const variant = useBreakpointValue(
    {
      base: SearchResultVariant2,
      md: SearchResultVariant,
    },
    {
      fallback: "base",
    }
  );
  return (
    <Container
      maxW={{
        base: "100%",
        // "2xl": "container.xl",
      }}
      p={0}
      mt="5.0625rem"
    >
      <Box
        position="relative"
        pt="6.5625rem"
        pb={{ base: "30rem", lg: "17rem" }}
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
          {headerComponent ? (
            <>{headerComponent}</>
          ) : (
            <>
              <Box
                fontWeight={"bold"}
                color="white"
                textAlign="center"
                position="relative"
                maxW={"max-content"}
                m={"auto"}
                mt={{ base: "3rem", lg: "auto" }}
                textStyle="h2"
                as="h2"
              >
                Search Results
                <Box
                  position="absolute"
                  height={"2.5px"}
                  width={{ base: "70%", md: "90%" }}
                  backgroundColor={"#EFE307"}
                  ml={{ base: "-14px", md: "-60px" }}
                  bottom="-18px"
                  as={motion.div}
                  variants={variant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                />
                <Box
                  position="absolute"
                  height={"2.5px"}
                  width={{ base: "70%", md: "90%" }}
                  backgroundColor={"#EFE307"}
                  mr={{ base: "-14px", md: "-60px" }}
                  bottom="-32.5px"
                  right={"0"}
                  as={motion.div}
                  variants={variant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                />
              </Box>
            </>
          )}
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
        </Container>
      </Box>
    </Container>
  );
};

export default SearchResult;
