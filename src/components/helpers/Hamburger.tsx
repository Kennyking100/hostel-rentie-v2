import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Button,
  Container,
  Link,
  Menu,
  MenuButton,
  MenuList,
  Portal,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Hamburger = () => {
  const [open, setOpen] = useState(false);
  return (
    <Menu onOpen={() => setOpen(true)} onClose={() => setOpen(false)}>
      <MenuButton
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
      >
        {open ? <CloseIcon /> : <HamburgerIcon />}
      </MenuButton>
      <Portal>
        <MenuList
          w="100vw"
          mt={"18px"}
          border="none"
          borderTop={"1px solid #e2e8f0"}
          borderRadius="none"
          pb={10}
          shadow="md"
          zIndex={2}
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
        </MenuList>
      </Portal>
    </Menu>
  );
};

export default Hamburger;
