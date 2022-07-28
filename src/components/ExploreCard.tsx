import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Image,
} from "@chakra-ui/react";
import React from "react";
import Btn from "./helpers/Btn";
import { MdFavorite } from "react-icons/md";

interface Props {
  name: string;
  price: string;
  imgSrc: string;
}

const ExploreCard: React.FC<Props> = ({ name, price, imgSrc }) => {
  return (
    <Box textAlign={"center"} maxW="690px">
      <Box
        border="3px solid #EFE307"
        borderRadius={"20px"}
        p={{ base: "1rem", sm: "1.4375rem 2.5rem" }}
      >
        <Image
          src={imgSrc}
          w={"100%"}
          h={"320px"}
          borderRadius={"10px"}
          objectFit={"cover"}
        />
      </Box>
      <Heading mt={"52px"} color="white" fontSize={{ base: "3xl", md: "4xl" }}>
        {name}
      </Heading>
      <Flex
        justifyContent={"space-evenly"}
        flexWrap="wrap"
        color={"white"}
        mt="31px"
        mb="53px"
        fontSize={{ base: "md", lg: "md" }}
        fontWeight="500"
      >
        <Box as={"span"} pr={"22.5px"} borderRight="3px solid #EFE307">
          1 bedroom
        </Box>
        <Box as={"span"} pr={"22.5px"} borderRight="3px solid #EFE307">
          Shared toilet
        </Box>
        <Box as={"span"} pr={"22.5px"} borderRight="3px solid #EFE307">
          Shared Kitchen
        </Box>
        <Box as={"span"} fontWeight={"bold"}>
          Funaab
        </Box>
      </Flex>

      <Grid
        templateColumns={{ base: "1fr max-content", md: "2fr 1fr max-content" }}
        color={"white"}
        gap="25px"
        templateRows={"75px"}
      >
        <GridItem colSpan={{ base: 2, md: 1 }} rowStart={{ base: 2, md: 1 }}>
          <Btn
            h={"full"}
            w={"full"}
            _hover={{
              background: "Hover.GreenDark",
            }}
            bg="GreenDark"
            boxShadow="5px 5px 15px #1D1D1D1A"
          >
            View room
          </Btn>
        </GridItem>

        <Btn
          h={"full"}
          _hover={{
            opacity: 0.85,
          }}
          bg="white"
          color="#01923F"
          boxShadow="5px 5px 15px #1D1D1D1A"
        >
          {price}
        </Btn>
        <Center
          w={"89px"}
          h={"full"}
          borderRadius="10px"
          cursor={"pointer"}
          bg="#EFE307"
          boxShadow="5px 5px 15px #1D1D1D1A"
          _hover={{
            opacity: 0.85,
          }}
        >
          <Icon as={MdFavorite} w="42px" h={"42px"} fill="GreenDark" />
        </Center>
      </Grid>
    </Box>
  );
};

export default ExploreCard;
