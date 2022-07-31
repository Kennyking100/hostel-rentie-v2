import { Container } from "@chakra-ui/react";
import React from "react";
import Layout from "../Layout";
import { MiddleSection } from "./MiddleSection";
import TopSection from "./TopSection";

const FindRoommatesPage = () => {
  return (
    <Layout>
      <Container
        maxW={{
          base: "container.sm",
          md: "container.md",
          lg: "container.lg",
          xl: "container.xl",
        }}
      >
        <TopSection />
        <MiddleSection />
      </Container>
    </Layout>
  );
};

export default FindRoommatesPage;
