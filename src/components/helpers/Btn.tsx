import { Button } from "@chakra-ui/react";
import React from "react";

const Btn = (props: any) => {
  return (
    <Button
      size="lg"
      textStyle={"popM28"}
      layerStyle={props.base2 ? "base2" : "base"}
      borderRadius={"10px"}
      px={10}
      py={8}
      fontWeight="medium"
      {...props}
    >
      {props.children}
    </Button>
  );
};

export default Btn;
