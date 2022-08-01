import { Button } from "@chakra-ui/react";
import React from "react";

const Btn = (props: any) => {
  return (
    <Button
      size="lg"
      borderRadius={"10px"}
      px={"49px"}
      py={{ base: 6, md: 8 }}
      fontWeight="medium"
      boxShadow="5px 5px 15px #1D1D1D26"
      {...props}
      textStyle="body"
    >
      {props.children}
    </Button>
  );
};

export default Btn;
