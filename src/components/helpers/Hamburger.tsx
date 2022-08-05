import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button, Container, Link, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { navBarHeight } from "../NavBar";

const Variant = {
  hidden: {
    opacity: 0,
    transform: "scale(0.8) translateZ(0px)",
  },
  visible: {
    opacity: 1,
    transform: "none",
  },
};

const Hamburger = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Box
        as={Button}
        bg="GreenLight"
        color={"white"}
        display={{ base: "block", md: "none" }}
        _hover={{
          background: "Hover.GreenLight",
        }}
        _focus={{
          background: "Hover.GreenLight",
        }}
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? <CloseIcon /> : <HamburgerIcon />}
      </Box>
      {open && (
        <>
          <Box
            position={"absolute"}
            top={navBarHeight}
            left={0}
            w={"100vw"}
            h="100vh"
            onClick={() => setOpen((prev) => !prev)}
            zIndex={2}
          />
          <Box
            w="100vw"
            border="none"
            borderTop={"1px solid #e2e8f0"}
            borderRadius="none"
            pb={10}
            shadow="md"
            zIndex={3}
            position={"absolute"}
            top={navBarHeight}
            left={0}
            bg="white"
            as={motion.div}
            variants={Variant}
            initial={"hidden"}
            animate={"visible"}
          >
            <Container
              maxW={{
                base: "container.sm",
                md: "container.md",
                lg: "container.lg",
                xl: "container.xl",
              }}
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
                <Text fontSize="lg" py={2}>
                  Home
                </Text>
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
                <Text fontSize="lg" py={2}>
                  Search
                </Text>
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
                <Text fontSize="lg" py={2}>
                  Saves
                </Text>
              </Link>
              <Button
                layerStyle="base"
                size="md"
                fontSize="lg"
                px={10}
                py={6}
                mt={2}
                bg="GreenLight"
                color={"white"}
                _hover={{
                  background: "Hover.GreenLight",
                }}
              >
                Account
              </Button>
            </Container>
          </Box>
        </>
      )}
    </>
  );
};

export default Hamburger;
