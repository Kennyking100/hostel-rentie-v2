import { Box, Center, Grid, GridItem, Icon, Image } from "@chakra-ui/react";
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
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
};

const ExploreCard: React.FC<Props> = ({ name, price, imgSrc }) => {
  const navigate = useNavigate();

  return (
    <Box textAlign={"center"} w="full" mb="10.25rem">
      <Box
        border="2.25px solid #EFE307"
        borderRadius={"20px"}
        p={{ base: "1rem", sm: "1.125rem 1.3rem" }}
        as={motion.div}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        variants={cardVariants}
      >
        <Image
          src={imgSrc}
          w={"100%"}
          h={"200px"}
          borderRadius={"10px"}
          objectFit={"cover"}
        />
      </Box>
      <Box mt={"39px"} color="white" fontWeight={"semibold"} textStyle="h3">
        {name}
      </Box>
      <Grid
        gridTemplateColumns={"1fr 1fr"}
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
        <Box as={"span"} pr={"22.5px"}>
          Shared toilet
        </Box>
        <Box as={"span"} pr={"22.5px"} borderRight="2.25px solid #EFE307">
          Shared Kitchen
        </Box>
        <Box as={"span"} fontWeight={"bold"}>
          Funaab
        </Box>
      </Grid>

      <Grid
        templateColumns={"1fr 70px"}
        color={"white"}
        gap="25px"
        templateRows={"50px 60px"}
      >
        <GridItem colSpan={{ base: 2 }} rowStart={{ base: 2 }}>
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
          h={"50px"}
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
          w={"full"}
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
