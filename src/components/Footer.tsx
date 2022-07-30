import { Box, Container, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const subs = { base: "1rem", md: "1.125rem" };
const boxW = { base: "100%", sm: "45%", md: "30%" };
const titleMb = "14px";
const iconSize = "28px";

const Footer = () => {
  return (
    <Box bg="GreenLight">
      <Container
        maxW={{
          base: "container.sm",
          md: "container.md",
          lg: "container.lg",
          xl: "container.xl",
        }}
      >
        <Flex
          textColor={"white"}
          flexWrap="wrap"
          justifyContent={"space-between"}
          pb="27px"
        >
          <Box w={boxW} mt="27px">
            <Box
              fontWeight={"semibold"}
              fontSize={{ base: "1.25rem", md: "1.5rem" }}
              mb={titleMb}
            >
              Hostel Rentie
            </Box>
            <Text fontSize={subs}>
              Awesome hostels in Nigeria Campuses. All Right reserved Hostel
              Rentie Ltd. 2021
            </Text>
          </Box>
          <Box w={boxW} mt="27px" fontSize={subs}>
            <Box fontWeight={"semibold"} mb={titleMb}>
              Legal
            </Box>
            <Text>Privacy policy</Text>
            <Text>Terms and conditions</Text>
            <Text>Cookies Policy</Text>
          </Box>
          <Box w={boxW} fontSize={subs} mt="27px">
            <Box fontWeight={"semibold"} mb={titleMb}>
              Contact
            </Box>
            <Text>hello@hostelrentie.com</Text>
            <Text>support@hostelrentie.com</Text>
            <Text>+234-81106-474-09</Text>
          </Box>
          <Box w={boxW} fontSize={subs} mt="27px">
            <Box fontWeight={"semibold"} mb={titleMb}>
              Company
            </Box>
            <Text>About Us</Text>
            <Text>Explore</Text>
            <Text>Locations</Text>
          </Box>
          <Box w={boxW} fontSize={subs} mt="27px">
            <Box fontWeight={"semibold"} mb={titleMb}>
              Learn
            </Box>
            <Text>Blog</Text>
            <Text>FAQ</Text>
          </Box>
          <Flex gap={"2rem"} w={boxW} mt="27px">
            <Icon as={FaFacebookF} w={iconSize} h={iconSize} />
            <Icon as={FaTwitter} w={iconSize} h={iconSize} />
            <Icon as={FaInstagram} w={iconSize} h={iconSize} />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
