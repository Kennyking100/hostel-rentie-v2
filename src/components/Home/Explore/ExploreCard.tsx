import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Icon,
  Image,
} from "@chakra-ui/react";
import React from "react";
import Btn from "../../helpers/Btn";
import { MdFavorite } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { motion, Variants } from "framer-motion";

interface Props {
  name: string;
  price: string;
  imgSrc: string;
}

const cardVariants: Variants = {
  offscreen: {
    y: 100,
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const ExploreCard: React.FC<Props> = ({ name, price, imgSrc }) => {
  const navigate = useNavigate();

  return (
    <Box
      textAlign={"center"}
      w="full"
      maxW={{ base: "100%", lg: "45%" }}
      mb="10.25rem"
    >
      <Box
        border="2.25px solid #EFE307"
        borderRadius={"20px"}
        p={{ base: "1rem", sm: "1.125rem 1.875rem" }}
        as={motion.div}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        variants={cardVariants}
      >
        <Image
          src={imgSrc}
          w={"100%"}
          h={"264px"}
          borderRadius={"10px"}
          objectFit={"cover"}
        />
      </Box>
      <Box mt={"39px"} color="white" fontWeight={"semibold"} textStyle="h3">
        {name}
      </Box>
      <Flex
        justifyContent={"space-evenly"}
        flexWrap="wrap"
        color={"white"}
        mt="24px"
        mb="39.5px"
        textStyle="body"
        fontWeight="500"
        gap={"0.4rem"}
      >
        <Box as={"span"} pr={"22.5px"} borderRight="2.25px solid #EFE307">
          1 bedroom
        </Box>
        <Box as={"span"} pr={"22.5px"} borderRight="2.25px solid #EFE307">
          Shared toilet
        </Box>
        <Box as={"span"} pr={"22.5px"} borderRight="2.25px solid #EFE307">
          Shared Kitchen
        </Box>
        <Box as={"span"} fontWeight={"bold"}>
          Funaab
        </Box>
      </Flex>

      <Grid
        templateColumns={{
          base: "1fr max-content",
          md: "2fr 1fr max-content",
          lg: "1fr max-content",
          xl: "2fr 1fr max-content",
        }}
        color={"white"}
        gap="25px"
        templateRows={"60px"}
      >
        <GridItem
          colSpan={{ base: 2, md: 1, lg: 2, xl: 1 }}
          rowStart={{ base: 2, md: 1, lg: 2, xl: 1 }}
        >
          <Btn
            h={"full"}
            w={"full"}
            _hover={{
              background: "Hover.GreenDark",
            }}
            bg="GreenDark"
            boxShadow="5px 5px 15px #1D1D1D1A"
            onClick={() => navigate("/search/new")}
            className="btn-three"
          >
            View room
          </Btn>
        </GridItem>

        <Btn
          h={"full"}
          _hover={{
            opacity: 1,
          }}
          bg="white"
          color="#01923F"
          boxShadow="5px 5px 15px #1D1D1D1A"
          cursor="default"
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
