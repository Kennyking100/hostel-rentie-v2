import { Box, chakra, Container, Flex, Image, Text } from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";
import HeroImage from "../../../assets/home/hero-image.svg";
import Btn from "../../helpers/Btn";
import SearchBtn from "../../helpers/SearchBtn";

const Variant = {
  hidden: { opacity: 0, transform: "rotateY(95deg)" },
  visible: {
    opacity: 1,
    transform: "rotateY(0deg)",
  },
};

const ChakraBox = chakra(motion.span, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});

const Hero = () => {
  const navigate = useNavigate();
  const HeroTextTop = ["D", "o", " ", "y", "o", "u", " ", "n", "e", "e", "d"];
  const HeroTextBottom = [
    "a",
    " ",
    "r",
    "o",
    "o",
    "m",
    "m",
    "a",
    "t",
    "e",
    "?",
  ];

  return (
    <Container
      maxW={{
        base: "container.sm",
        md: "container.md",
        lg: "container.lg",
        xl: "container.xl",
      }}
    >
      <Flex justifyContent={"space-between"} mb={"1rem"} alignItems="center">
        <Box width={{ base: "100%", lg: "50%" }}>
          <Box
            textColor={"GreenLight"}
            as="h1"
            textStyle="h1"
            fontWeight="medium"
            textAlign={{ base: "center", sm: "start" }}
            textShadow="5px 5px 15px #1D1D1D1A"
            position={"relative"}
          >
            <Box as={motion.span} initial={"hidden"} animate={"visible"}>
              {HeroTextTop.map((ev, i) => {
                if (ev === " ") return ev;
                return (
                  <ChakraBox
                    display={"inline-block"}
                    variants={Variant}
                    initial={"hidden"}
                    animate={"visible"}
                    // @ts-ignore
                    transition={{
                      duration: 0.2,
                      delay: i * 0.1,
                    }}
                  >
                    {ev}
                  </ChakraBox>
                );
              })}
              <br />
            </Box>

            <Box as={motion.span} initial={"hidden"} animate={"visible"}>
              {HeroTextBottom.map((ev, i) => {
                if (ev === " ") return ev;
                return (
                  <ChakraBox
                    key={i}
                    display={"inline-block"}
                    variants={Variant}
                    initial={"hidden"}
                    animate={"visible"}
                    // @ts-ignore
                    transition={{
                      duration: 0.2,
                      delay: i * 0.15,
                    }}
                  >
                    {ev}
                  </ChakraBox>
                );
              })}
            </Box>
          </Box>
          <Text
            textColor={"Grey1D"}
            textStyle="body"
            mt="47px"
            mb={"70px"}
            textAlign={{ base: "center", sm: "start" }}
          >
            You can now get and pair room and apartments with people.
            <br /> Try now to pair your apartment with someone Share the bills
            and facilities of apartment with someone or people
          </Text>
          <Btn
            mr={{ base: "0", sm: "30px", md: "50px" }}
            bg="GreenDark"
            width={{ base: "100%", sm: "max-content" }}
            mb={{ base: "1rem", sm: "0" }}
            color={"white"}
            _hover={{
              background: "Hover.GreenDark",
            }}
            onClick={() => navigate("/find-roommate")}
          >
            Post a room
          </Btn>

          <Btn
            width={{ base: "100%", sm: "max-content" }}
            bg="GreenLight"
            color={"white"}
            _hover={{
              background: "Hover.GreenLight",
            }}
            onClick={() => navigate("/search")}
          >
            Join a room
          </Btn>

          <SearchBtn />
        </Box>
        <Image
          src={HeroImage}
          width={"40%"}
          height="490px"
          display={{ base: "none", lg: "block" }}
        />
      </Flex>
    </Container>
  );
};

export default Hero;
