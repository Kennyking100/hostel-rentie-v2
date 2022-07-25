import {
  Box,
  Center,
  Container,
  Flex,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import HeroImage from "../assets/home/hero-image.svg";
import SearchIcon from "../assets/home/search-icon.svg";
import Btn from "./helpers/Btn";

const Hero = () => {
  return (
    <Container
      maxW={{
        base: "container.sm",
        md: "container.md",
        lg: "container.lg",
        xl: "container.xl",
      }}
    >
      <Flex
        justifyContent={"space-between"}
        // p={"x.100"}
        pt={10}
        alignItems="center"
        pb={120}
      >
        <Box width={{ base: "100%", lg: "50%" }}>
          <Box
            textColor={"GreenLight"}
            fontSize={{ base: "2.25rem", sm: "3rem", lg: "4rem" }}
            fontWeight="medium"
            textAlign={{ base: "center", sm: "start" }}
            textShadow="5px 5px 15px #1D1D1D1A"
          >
            Do you need <br /> a roommate?
          </Box>
          <Text
            textColor={"GreenDarker"}
            fontSize={{ base: "lg", lg: "xl" }}
            mt="32px"
            mb={"60px"}
            textAlign={{ base: "center", sm: "start" }}
          >
            You can now get and pair room and apartments with people.
            <br /> Try now to pair your apartment with someone Share the bills
            and facilities of apartment with someone or people
          </Text>
          <Btn
            mr={{ base: "0", sm: "50px" }}
            base2
            width={{ base: "100%", sm: "max-content" }}
            mb={{ base: "1rem", sm: "0" }}
            _hover={{
              background: "Hover.GreenDark",
            }}
          >
            Post a room
          </Btn>
          <Btn
            width={{ base: "100%", sm: "max-content" }}
            _hover={{
              background: "Hover.GreenLight",
            }}
          >
            Join a room
          </Btn>
          <Flex gap={10} alignItems="center" mt="100" height={"70px"}>
            <Input
              placeholder="Search"
              border={`3px solid`}
              borderRadius="35px"
              borderColor={"YellowLight"}
              textColor="GreenDarker"
              height="full"
              _placeholder={{ fontSize: "20px", paddingLeft: "20px" }}
            />
            <Center
              borderRadius={"100%"}
              bg="GreenLight"
              width={"90px"}
              height="full"
              cursor={"pointer"}
              _hover={{
                background: "Hover.GreenLight",
              }}
            >
              <Image src={SearchIcon} width={"21px"} height={"21px"} />
            </Center>
          </Flex>
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
