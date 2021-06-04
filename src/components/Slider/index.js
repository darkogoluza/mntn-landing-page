import React from "react";
import { Container, SliderBox, Text, TextContainer } from "./sliderElements";

const Slider = () => {
  return (
    <>
      <Container>
        <TextContainer>
          <Text>Start</Text>
          <Text>01</Text>
          <Text>02</Text>
          <Text>03</Text>
        </TextContainer>
        <SliderBox />
      </Container>
    </>
  );
};

export default Slider;
