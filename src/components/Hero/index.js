import React from "react";
import {
  HeroContent,
  HeroScrollDownContent,
  HeroScrollDownIcon,
  HeroScrollDownText,
  HeroText,
  HeroTitleContainer,
  HeroTitleLine,
  HeroTitleText,
  HeroContainer,
} from "./HeroElements";
import ArrowDown from "../../assets/arrow_down.png";
import Social from "../Social";
import Slider from "../Slider";

const Hero = () => {
  return (
    <HeroContainer>
      <Social />
      <HeroContent>
        <HeroTitleContainer>
          <HeroTitleLine />
          <HeroTitleText>A Hiking guide</HeroTitleText>
        </HeroTitleContainer>
        <HeroText>Be prepared for the Mountains and beyond!</HeroText>
        <HeroScrollDownContent>
          <HeroScrollDownText>scroll down</HeroScrollDownText>
          <HeroScrollDownIcon src={ArrowDown} />
        </HeroScrollDownContent>
      </HeroContent>
      <Slider />
    </HeroContainer>
  );
};

export default Hero;
