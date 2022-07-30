import { Flex, Select, Text } from "@chakra-ui/react";
import React from "react";
import { BsThreeDots } from "react-icons/bs";

interface Props {
  name: string;
}
const FindField: React.FC<Props> = ({ name }) => {
  return (
    <Flex justifyContent={"space-between"} flexDir="column">
      <Text fontSize={"3xl"} fontWeight="semibold" color={"#2b2024"} mb={2}>
        {name}
      </Text>
      <Select
        placeholder="Select here"
        icon={<BsThreeDots />}
        iconColor="#2b2024"
        borderRadius="15px"
        textColor={"GreenDark"}
        border={"1px solid"}
        borderColor="GreenLight"
        bg={"GreenLightest"}
        h="59px"
      >
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
    </Flex>
  );
};

export default FindField;
