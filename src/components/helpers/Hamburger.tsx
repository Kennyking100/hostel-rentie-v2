import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Button,
  Container,
  Menu,
  MenuButton,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

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
      <MenuList
        w="100vw"
        mt={"18px"}
        border="none"
        borderTop={"1px solid #e2e8f0"}
        borderRadius="none"
        pb={10}
        shadow="md"
      >
        <Container
          maxW={{
            base: "container.sm",
            md: "container.md",
            lg: "container.lg",
            xl: "container.xl",
          }}
        >
          <Text fontSize="lg" py={2}>
            Home
          </Text>
          <Text fontSize="lg" py={2}>
            Search
          </Text>
          <Text fontSize="lg" py={2}>
            Saves
          </Text>
          <Button
            layerStyle="base"
            size="md"
            fontSize="lg"
            px={10}
            py={6}
            mt={2}
            _hover={{
              background: "Hover.GreenLight",
            }}
          >
            Account
          </Button>
        </Container>
      </MenuList>
    </Menu>
  );
};

export default Hamburger;
