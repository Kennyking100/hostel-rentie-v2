import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Btn from "./helpers/Btn";

interface Props {
  headingText: string;
  subText: string;
  btnText: string;
  image: any;
  subColor: string;
  border: string;
  headingColor: string;
  btnProps: {
    bg: string;
    _hover: {
      background: string;
    };
  };
}

const DetailsCard: React.FC<Props> = ({
  headingText,
  headingColor,
  subText,
  btnText,
  btnProps,
  image,
  subColor,
  border,
}) => {
  return (
    <Flex
      flexDir={"column"}
      alignItems="center"
      border={`3px solid`}
      borderColor={border}
      borderRadius="20px"
      maxW={{ base: "95%", lg: "45%" }}
      p="40px"
      textAlign={"center"}
      mb="3rem"
    >
      <Heading as="h3" size="lg" fontWeight={"semibold"} color={headingColor}>
        {headingText}
      </Heading>
      <Flex
        justifyContent={"center"}
        width={"264px"}
        h={"210px"}
        mt="20px"
        mb="36px"
      >
        {image}
      </Flex>
      <Text color={subColor} fontSize="sm" fontStyle={"italic"}>
        {subText}
      </Text>
      <Btn
        width={{ base: "100%", sm: "max-content" }}
        color={"white"}
        {...btnProps}
        my="18px"
        px={16}
        fontSize={"1.3125rem"}
      >
        {btnText}
      </Btn>
    </Flex>
  );
};

export default DetailsCard;
