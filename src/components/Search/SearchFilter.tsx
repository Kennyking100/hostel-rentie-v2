import { Box, Heading, Select } from "@chakra-ui/react";
import React from "react";
import Btn from "../helpers/Btn";
import { BsFillCaretDownFill } from "react-icons/bs";

const SearchFilter = () => {
  return (
    <Box width={{ base: "100%", lg: "60%" }}>
      <Heading
        fontWeight={"medium"}
        color="GreenLight"
        size={"2xl"}
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
        />
        <Box
          position="absolute"
          height={"2.5px"}
          width={{ base: "70%", md: "110%" }}
          backgroundColor={"#EFE307"}
          mr={{ base: "5rem", md: "20px" }}
          bottom="-1rem"
          right={"-50%"}
        />
      </Heading>
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
