import { Box, Flex, Grid } from "@chakra-ui/react";
import React from "react";
import Btn from "../helpers/Btn";
import FindField from "./FindField";

export const MiddleSection = () => {
  return (
    <Box mt={8} mb="15.5rem">
      <Grid
        gridTemplateColumns={{ base: "1fr", sm: "1fr 1fr" }}
        gap="2.8125rem 5rem"
      >
        <FindField name="Location" />
        <FindField name="Number of roommates needed" />
        <FindField name="Price" />
        <FindField name="Number of bedrooms" />
      </Grid>
      <Flex justifyContent={"flex-end"} mt="7.625rem">
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
          Find roommate
        </Btn>
      </Flex>
    </Box>
  );
};
