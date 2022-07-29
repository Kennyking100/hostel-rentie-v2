import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import Logo from "../assets/home/logo.png";
import Hamburger from "./helpers/Hamburger";

const NavBar = () => {
  return (
    <Box boxShadow="lg" h={"navBarHeight"}>
      <Container
        maxW={{
          base: "container.sm",
          md: "container.md",
          lg: "container.lg",
          xl: "container.xl",
        }}
      >
        <Flex justifyContent="space-between" alignItems={"center"} py={4}>
          <Image
            src={Logo}
            style={{
              height: "60px",
            }}
          />
          <HStack
            spacing={16}
            fontWeight={"medium"}
            color="#144B34"
            display={{ base: "none", md: "flex" }}
          >
            <Text fontSize="xl">Home</Text>
            <Text fontSize="xl">Search</Text>
            <Text fontSize="xl">Saves</Text>
            <Button
              layerStyle="base"
              size="md"
              fontSize="xl"
              px={10}
              py={6}
              bg="GreenLight"
              color={"white"}
              _hover={{
                background: "Hover.GreenLight",
              }}
            >
              Account
            </Button>
          </HStack>
          <Hamburger />
        </Flex>
      </Container>
    </Box>
  );
};

export default NavBar;
