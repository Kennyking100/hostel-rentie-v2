import { Box, Center, Grid, Heading, Icon, Image } from "@chakra-ui/react";
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
        py={"23px"}
        px={"40px"}
      >
        <Image src={imgSrc} w={"100%"} h={"320px"} borderRadius={"10px"} />
      </Box>
      <Heading mt={"52px"} color="white" fontSize={"4xl"}>
        {name}
      </Heading>
      <Box
        color={"white"}
        mt="31px"
        mb="53px"
        fontSize={{ base: "lg", lg: "md" }}
        fontWeight="500"
      >
        <Box
          as={"span"}
          pr={"22.5px"}
          mr={"22.5px"}
          borderRight="3px solid #EFE307"
        >
          1 bedroom
        </Box>
        <Box
          as={"span"}
          pr={"22.5px"}
          mr={"22.5px"}
          borderRight="3px solid #EFE307"
        >
          Shared toilet
        </Box>
        <Box
          as={"span"}
          pr={"22.5px"}
          mr={"22.5px"}
          borderRight="3px solid #EFE307"
        >
          Shared Kitchen
        </Box>
        <Box as={"span"} fontWeight={"bold"}>
          Funaab
        </Box>
      </Box>

      <Grid
        templateColumns="2fr 1fr max-content"
        color={"white"}
        gap="25px"
        templateRows={"75px"}
      >
        <Btn
          h={"full"}
          _hover={{
            background: "Hover.GreenDark",
          }}
          bg="GreenDark"
        >
          View room
        </Btn>

        <Btn
          h={"full"}
          _hover={{
            background: "Hover.GreenDark",
          }}
          bg="white"
          color="#01923F"
        >
          {price}
        </Btn>
        <Center
          w={"89px"}
          h={"full"}
          borderRadius="10px"
          cursor={"pointer"}
          bg="#EFE307"
        >
          <Icon as={MdFavorite} w="42px" h={"42px"} fill="GreenDark" />
        </Center>
      </Grid>
    </Box>
  );
};

export default ExploreCard;
