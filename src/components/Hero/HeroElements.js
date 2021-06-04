import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  margin-top: 200px;
`;

export const HeroContent = styled.div`
  width: 960px;
  margin: auto;
`;
export const HeroText = styled.h1`
  color: ${(props) => props.theme.white};
  font-family: "Bentham", serif;
  font-size: 5rem;
`;
export const HeroTitleLine = styled.div`
  width: 72px;
  height: 2px;
  background-color: ${(props) => props.theme.yellow};
  margin-right: 2rem;
`;

export const HeroTitleText = styled.p`
  color: ${(props) => props.theme.yellow};
  font-size: 1.375rem;
  font-family: "Khula", sans-serif;
`;

export const HeroTitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const HeroScrollDownText = styled.p`
  font-size: 1.375rem;
  font-family: "Khula", sans-serif;
  color: ${(props) => props.theme.white};
  margin-right: 1rem;
`;
export const HeroScrollDownContent = styled.div`
  display: flex;
  align-items: center;
`;
export const HeroScrollDownIcon = styled.img`
  width: 16px;
  height: 24px;
`;
