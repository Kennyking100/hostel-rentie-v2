import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import Newsletter from "../Home/Newsletter";
import Layout from "../Layout";
import SearchResult from "../Search/SearchResult";
import Recommendation from "../SingleSearchItem/Recommendation";

const SavesVariant = {
  hidden: {
    opacity: 0,
    width: 0,
  },
  visible: {
    opacity: 1,
    width: "150%",
    transition: {
      duration: 0.5,
    },
  },
};

const SavesVariant2 = {
  hidden: {
    opacity: 0,
    width: 0,
  },
  visible: {
    opacity: 1,
    width: "200%",
    transition: {
      duration: 0.5,
    },
  },
};

const SavesPage = () => {
  const header = (
    <Box
      fontWeight={"bold"}
      color="white"
      textAlign="center"
      position="relative"
      maxW={"max-content"}
      mt={{ base: "3rem", lg: "auto" }}
      textStyle="h2"
      as="h2"
    >
      Saves
      <Box
        position="absolute"
        height={"2.5px"}
        width="150%"
        backgroundColor={"#EFE307"}
        bottom="-18px"
        as={motion.div}
        variants={SavesVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      />
      <Box
        position="absolute"
        height={"2.5px"}
        width="200%"
        backgroundColor={"#EFE307"}
        bottom="-32.5px"
        as={motion.div}
        variants={SavesVariant2}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      />
    </Box>
  );
  return (
    <Layout>
      <Box mt="-80px" mb={200}>
        <SearchResult headerComponent={header} />
      </Box>
      <Recommendation />
      <Box mt={{ base: "0", lg: "0rem" }}>
        <Newsletter />
      </Box>
    </Layout>
  );
};

export default SavesPage;
