import React from "react";
import {
  Description,
  MainWrapper,
  ReadMoreContainer,
  ReadMoreIcon,
  ReadMoreText,
  TagContainer,
  TagLine,
  TagText,
  Title,
  Wrapper,
  SideImage,
  Counter,
} from "./contentCardElements";
import arrowRight from "../../assets/arrow_right.png";

const ContentCard = ({
  id,
  img_src,
  title,
  description,
  tag_line,
  reversed,
}) => {
  const wrapperStyle = {
    padding: "6rem",
  };
  const reversedWrapperStyle = {
    padding: "6rem 0",
    paddingLeft: "12rem",
  };

  return (
    <>
      <MainWrapper flexDirection={reversed ? "row-reverse" : "row"}>
        <Wrapper style={reversed ? reversedWrapperStyle : wrapperStyle}>
          <TagContainer>
            <Counter>
              {(id + 1).toLocaleString("en-US", {
                minimumIntegerDigits: 2,
                useGrouping: false,
              })}
            </Counter>
            <TagLine />
            <TagText>{tag_line}</TagText>
          </TagContainer>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <ReadMoreContainer>
            <ReadMoreText>read more</ReadMoreText>
            <ReadMoreIcon src={arrowRight} />
          </ReadMoreContainer>
        </Wrapper>
        <SideImage src={process.env.PUBLIC_URL + img_src} />
      </MainWrapper>
    </>
  );
};

export default ContentCard;
