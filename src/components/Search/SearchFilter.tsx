import { Box, Select, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import Btn from "../helpers/Btn";
import { BsFillCaretDownFill } from "react-icons/bs";
import { motion } from "framer-motion";

const SearchVariant = {
  hidden: {
    opacity: 0,
    width: 0,
  },
  visible: {
    opacity: 1,
    width: "110%",
    transition: {
      duration: 0.5,
    },
  },
};

const SearchVariant2 = {
  hidden: {
    opacity: 0,
    width: 0,
  },
  visible: {
    opacity: 1,
    width: "70%",
    transition: {
      duration: 0.5,
    },
  },
};

const SearchFilter = () => {
  const variant = useBreakpointValue(
    {
      base: SearchVariant2,
      md: SearchVariant,
    },
    {
      fallback: "base",
    }
  );
  return (
    <Box width={{ base: "100%", lg: "60%" }}>
      <Box
        fontWeight={"medium"}
        color="GreenLight"
        as="h2"
        textStyle="h2"
        position="relative"
        maxW={"max-content"}
        mb="3.5rem"
        lineHeight={"4.25rem"}
      >
        Search Filter
        <Box
          position="absolute"
          height={"2.5px"}
          width={{ base: "70%", md: "110%" }}
          backgroundColor={"#EFE307"}
          as={motion.div}
          variants={variant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />
        <Box
          position="absolute"
          height={"2.5px"}
          width={{ base: "70%", md: "110%" }}
          backgroundColor={"#EFE307"}
          mr={{ base: "5rem", md: "20px" }}
          bottom="-1rem"
          right={"-50%"}
          as={motion.div}
          variants={variant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />
      </Box>
      <Select
        placeholder="Location"
        icon={<BsFillCaretDownFill />}
        bg="GreenLighter"
        borderColor={"GreenDark"}
        iconColor="GreenLight"
        borderRadius="15px"
        textColor={"GreenDark"}
        mb="1rem"
        size={"lg"}
      >
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
      <Select
        placeholder="Price range"
        icon={<BsFillCaretDownFill />}
        bg="GreenLighter"
        borderColor={"GreenDark"}
        iconColor="GreenLight"
        borderRadius="15px"
        textColor={"GreenDark"}
        mb="1rem"
        size={"lg"}
      >
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
      <Select
        placeholder="Rooms"
        icon={<BsFillCaretDownFill />}
        bg="GreenLighter"
        borderColor={"GreenDark"}
        iconColor="GreenLight"
        borderRadius="15px"
        textColor={"GreenDark"}
        mb="1rem"
        size={"lg"}
      >
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
      <Select
        placeholder="Number of roommates"
        icon={<BsFillCaretDownFill />}
        bg="GreenLighter"
        borderColor={"GreenDark"}
        iconColor="GreenLight"
        borderRadius="15px"
        textColor={"GreenDark"}
        mb="1rem"
        size={"lg"}
      >
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>

      <Btn
        width={{ base: "100%", sm: "max-content" }}
        bg="GreenLight"
        color={"white"}
        fontSize={"1.3125rem"}
        _hover={{
          background: "Hover.GreenLight",
        }}
        mt="3.1875rem"
      >
        Search
      </Btn>
    </Box>
  );
};

export default SearchFilter;
