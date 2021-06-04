import React from "react";
import { Container, Icon, Text } from "./socialElements";
import Twitter from "../../assets/twitter.png";
import Instagram from "../../assets/instagram.png";

const Social = () => {
  return (
    <>
      <Container>
        <Text>Follow us</Text>
        <Icon href="#" src={Twitter} />
        <Icon href="#" src={Instagram} />
      </Container>
    </>
  );
};

export default Social;
