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

const Hero = () => {
  return (
    <HeroContainer>
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
    </HeroContainer>
  );
};

export default Hero;
