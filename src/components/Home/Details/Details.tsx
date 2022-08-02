import { Box, Container, Flex } from "@chakra-ui/react";
import React from "react";
import DetailsCard from "./DetailsCard";
import { ReactComponent as ApplyIcon } from "../../../assets/home/apply-details.svg";
import { ReactComponent as ShareIcon } from "../../../assets/home/share-details.svg";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const navigate = useNavigate();

  return (
    <Container
      maxW={{
        base: "container.sm",
        md: "container.md",
        lg: "container.lg",
        xl: "container.xl",
      }}
      mt={{ base: "2rem", lg: "0rem" }}
    >
      <Box
        fontWeight={"bold"}
        color="GreenLight"
        textAlign="center"
        mb="6rem"
        textStyle="h3"
      >
        Do You Know You Can?
      </Box>

      <Flex justifyContent={"space-between"} flexWrap={"wrap"}>
        <DetailsCard
          headingText="Apply to be a roommate"
          subText="You can share the bills of an apartment or roommate with someone or two. I am sure you will want to check it out."
          image={<ApplyIcon />}
          btnText="Apply now"
          subColor="GreenDark"
          headingColor="GreenDark"
          border="GreenDark"
          btnProps={{
            bg: "GreenDark",
            _hover: {
              background: "Hover.GreenDark",
            },
          }}
          clickHandler={() => navigate("/search")}
        />
        <DetailsCard
          headingText="Share room with partner(s)"
          subText="You can share the bills of an apartment or roommate with someone or two. I am sure you will want to check it out."
          image={<ShareIcon />}
          btnText="Share now"
          subColor="GreenLight"
          headingColor="GreenLight"
          border="GreenLight"
          btnProps={{
            bg: "GreenLight",
            _hover: {
              background: "Hover.GreenLight",
            },
          }}
          clickHandler={() => navigate("/find-roommate")}
        />
      </Flex>
    </Container>
  );
};

export default Details;
