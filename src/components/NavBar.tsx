import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import Logo from "../assets/home/logo.png";
import Hamburger from "./helpers/Hamburger";
import { NavLink } from "react-router-dom";

export const navBarHeight = 92;

const NavBar = () => {
  const [sticky, setSticky] = useState(false);

  // on render, set listener
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop >= navBarHeight ? true : false;
    setSticky(stickyClass);
  };

  return (
    <Box
      boxShadow="lg"
      h={"navBarHeight"}
      mb="3.375rem"
      position={sticky ? "sticky" : "relative"}
      top={sticky ? 0 : ""}
      zIndex={sticky ? 100 : ""}
      bg="white"
    >
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
            <Link
              as={NavLink}
              to="/"
              _activeLink={{
                color: "GreenLight",
                borderBottom: "1px solid",
                borderColor: "YellowLight",
              }}
            >
              <Text fontSize="xl">Home</Text>
            </Link>
            <Link
              as={NavLink}
              to="/search"
              _activeLink={{
                color: "GreenLight",
                borderBottom: "1px solid",
                borderColor: "YellowLight",
              }}
            >
              <Text fontSize="xl">Search</Text>
            </Link>
            <Link
              as={NavLink}
              to="/saves"
              _activeLink={{
                color: "GreenLight",
                borderBottom: "1px solid",
                borderColor: "YellowLight",
              }}
            >
              <Text fontSize="xl">Saves</Text>
            </Link>
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
