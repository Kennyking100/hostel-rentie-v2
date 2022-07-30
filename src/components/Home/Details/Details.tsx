import { Container, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import DetailsCard from "./DetailsCard";
import { ReactComponent as ApplyIcon } from "../../../assets/home/apply-details.svg";
import { ReactComponent as ShareIcon } from "../../../assets/home/share-details.svg";

const Details = () => {
  return (
    <Container
      maxW={{
        base: "container.sm",
        md: "container.md",
        lg: "container.lg",
        xl: "container.xl",
      }}
      mt={{ base: "-20rem", lg: "0rem" }}
    >
      <Heading
        fontWeight={"bold"}
        color="GreenLight"
        textAlign="center"
        mb="6rem"
        size={{ base: "xl", md: "2xl" }}
      >
        Do You Know You Can?
      </Heading>

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
        />
      </Flex>
    </Container>
  );
};

export default Details;
