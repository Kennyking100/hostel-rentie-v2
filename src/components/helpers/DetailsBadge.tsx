import { Box, Flex } from "@chakra-ui/react";
import React from "react";

interface Props {
  icon: JSX.Element;
  name: string;
}

const DetailsBadge: React.FC<Props> = ({ icon, name }) => {
  return (
    <Flex
      color={"Grey1D"}
      textStyle="body"
      gap={"0.3rem"}
      bg="GreenLighter"
      py={2}
      px={4}
      borderRadius="20px"
    >
      <Box width={"25px"} height="25px">
        {icon}
      </Box>
      <Box as="span">{name}</Box>
    </Flex>
  );
};

export default DetailsBadge;
