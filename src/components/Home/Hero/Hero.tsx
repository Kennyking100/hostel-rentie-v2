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
import { useNavigate } from "react-router-dom";
import HeroImage from "../../../assets/home/hero-image.svg";
import SearchIcon from "../../../assets/home/search-icon.svg";
import Btn from "../../helpers/Btn";

const Hero = () => {
  const navigate = useNavigate();

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
            // size="4xl"
            fontSize={{ base: "2.25rem", sm: "3rem", lg: "4rem" }}
            // lineHeight={{ base: "54px", sm: "72px", lg: "102px" }}
            fontWeight="medium"
            textAlign={{ base: "center", sm: "start" }}
            textShadow="5px 5px 15px #1D1D1D1A"
          >
            Do you need <br /> a roommate?
          </Box>
          <Text
            textColor={"Grey1D"}
            fontSize={{ base: "lg", lg: "lg" }}
            mt="47px"
            mb={"70px"}
            textAlign={{ base: "center", sm: "start" }}
          >
            You can now get and pair room and apartments with people.
            <br /> Try now to pair your apartment with someone Share the bills
            and facilities of apartment with someone or people
          </Text>
          <Btn
            mr={{ base: "0", sm: "50px" }}
            bg="GreenDark"
            width={{ base: "100%", sm: "max-content" }}
            mb={{ base: "1rem", sm: "0" }}
            color={"white"}
            fontSize={"1.3125rem"}
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
            fontSize={"1.3125rem"}
            _hover={{
              background: "Hover.GreenLight",
            }}
            onClick={() => navigate("/search")}
          >
            Join a room
          </Btn>

          <Flex gap={10} alignItems="center" mt="84px" height={"62px"}>
            <Input
              placeholder="Search"
              border={`3px solid`}
              borderRadius="35px"
              borderColor={"YellowLight"}
              textColor="GreenDarker"
              height="full"
              boxShadow="5px 5px 15px #1D1D1D1A"
              _placeholder={{ fontSize: "20px", paddingLeft: "20px" }}
            />
            <Center
              borderRadius={"100%"}
              bg="GreenLight"
              width={"81px"}
              height="full"
              cursor={"pointer"}
              boxShadow="5px 5px 15px #1D1D1D26"
              _hover={{
                background: "Hover.GreenLight",
              }}
              onClick={() => navigate("/search")}
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
