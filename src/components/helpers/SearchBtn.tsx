import { Center, Flex, Image, Input } from "@chakra-ui/react";
import React from "react";
import SearchIcon from "../../assets/home/search-icon.svg";

const SearchBtn = () => {
  return (
    <Flex gap={10} alignItems="center" mt="84px" height={"62px"}>
      <Input
        placeholder="Search"
        border={`3px solid`}
        borderRadius="35px"
        borderColor={"YellowLight"}
        textColor="GreenDarker"
        height="full"
        boxShadow="5px 5px 15px #1D1D1D1A"
        _placeholder={{ fontSize: "20px", paddingLeft: "20px" }}
      />
      <Center
        borderRadius={"100%"}
        bg="GreenLight"
        width={"81px"}
        height="full"
        cursor={"pointer"}
        boxShadow="5px 5px 15px #1D1D1D26"
        _hover={{
          background: "Hover.GreenLight",
        }}
      >
        <Image src={SearchIcon} width={"21px"} height={"21px"} />
      </Center>
    </Flex>
  );
};

export default SearchBtn;
