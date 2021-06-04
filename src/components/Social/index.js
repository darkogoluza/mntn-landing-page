import React from "react";
import { Container, Icon, Text } from "./socialElements";
import Twitter from "../../assets/twitter.png";
import Instagram from "../../assets/instagram.png";

const Social = () => {
  return (
    <>
      <Container>
        <Text>Follow us</Text>
        <Icon src={Twitter} />
        <Icon src={Instagram} />
      </Container>
    </>
  );
};

export default Social;
