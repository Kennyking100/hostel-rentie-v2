import React from "react";
import { Box, Container, Flex, Icon, Text } from "@chakra-ui/react";
import Btn from "../helpers/Btn";
import DetailsBadge from "../helpers/DetailsBadge";
import { MdSmokeFree, MdPets, MdFavorite } from "react-icons/md";
import { TbLineHeight, TbLetterSpacing } from "react-icons/tb";
import { FaGraduationCap } from "react-icons/fa";

export const TextS = "5px 5px 15px #1D1D1D1A";

const SearchItemDetails = () => {
  return (
    <Container
      maxW={{
        base: "container.sm",
        md: "container.md",
        lg: "container.lg",
        xl: "container.xl",
      }}
    >
      <Flex px={{ base: 4, sm: 8 }} mb="7.375rem" flexDir={"column"}>
        <Flex justifyContent={"space-between"} flexWrap="wrap">
          <Box
            fontWeight={"medium"}
            textColor={"GreenLight"}
            textShadow={TextS}
            m={{ base: "auto", sm: "0" }}
            mb={4}
            as="h2"
            textStyle="h2"
          >
            Funaab
          </Box>
          <Btn
            bg="YellowLight"
            width={{ base: "100%", sm: "max-content" }}
            mb={4}
            color={"GreenDark"}
            fontWeight="bold"
            fontSize={{ base: "1.3rem", md: "1.5rem" }}
            _hover={{
              background: "YellowLight",
            }}
            cursor="default"
          >
            N 138,000.00
          </Btn>
        </Flex>
        <Text
          color={"GreenDark"}
          fontWeight="medium"
          fontStyle={"italic"}
          fontSize="1.1875rem"
          textAlign={{ base: "center", sm: "start" }}
          textStyle="body"
        >
          14, Abode street, Abeokuta , Ogun state
        </Text>
        <Flex
          justifyContent={"space-evenly"}
          flexWrap="wrap"
          color={"GreenLight"}
          mt="29px"
          mb="79px"
          textStyle="h4"
          fontWeight="500"
          gap={"22.5px"}
          alignSelf="flex-start"
        >
          <Box as={"span"} pr={"22.5px"} borderRight="2.25px solid #EFE307">
            1 bedroom
          </Box>
          <Box as={"span"} pr={"22.5px"} borderRight="2.25px solid #EFE307">
            Shared toilet
          </Box>
          <Box as={"span"}>Shared Kitchen</Box>
        </Flex>
        <Box color={"Grey1D"} textStyle="body" mb="5.8125rem">
          <Text>A very newly furnished apartment.</Text>
          <Text>With cctv camera Need just one roommate</Text>
          <Text>Preferably a female.</Text>
        </Box>
        <Box color={"Grey1D"} textStyle="body" mb="5.8125rem">
          <Text>A very newly furnished apartment.</Text>
          <Text>With cctv camera Need just one roommate</Text>
          <Text>Preferably a female.</Text>
        </Box>
        <Box color={"Grey1D"} textStyle="body" mb="5.8125rem">
          <Text>A very newly furnished apartment.</Text>
          <Text>With cctv camera Need just one roommate</Text>
          <Text>Preferably a female.</Text>
        </Box>
        <Flex gap={"0.5rem"} flexWrap="wrap" mb="5.8125rem">
          <DetailsBadge icon={<MdSmokeFree />} name="Non-smoker" />
          <DetailsBadge icon={<MdPets />} name="No Pets" />
          <DetailsBadge icon={<TbLineHeight />} name="135 cm" />
          <DetailsBadge icon={<TbLetterSpacing />} name="English" />
          <DetailsBadge icon={<FaGraduationCap />} name="Final year" />
        </Flex>
        <Flex
          gap={"1rem"}
          flexWrap="wrap"
          mb={4}
          w={{ base: "100%", sm: "auto" }}
        >
          <Btn
            bg="GreenDark"
            width={{ base: "100%", md: "max-content" }}
            color={"white"}
            _hover={{
              background: "Hover.GreenDark",
            }}
            mb={8}
          >
            Apply as roommate
          </Btn>
          <Btn
            width={{ base: "100%", md: "max-content" }}
            bg="GreenLight"
            color={"white"}
            _hover={{
              background: "Hover.GreenLight",
            }}
            mb={8}
          >
            <Icon as={MdFavorite} w="25px" h={"25px"} mr={4} />
            Save
          </Btn>
        </Flex>
      </Flex>
    </Container>
  );
};

export default SearchItemDetails;
