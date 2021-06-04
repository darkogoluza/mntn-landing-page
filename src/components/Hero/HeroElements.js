import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 100px;
  padding: 0 ${(props) => props.theme.sidePadding};
`;

export const HeroContent = styled.div`
  & > * {
    margin-bottom: 2rem;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
`;
export const HeroText = styled.h1`
  color: ${(props) => props.theme.white};
  font-family: "Bentham", serif;
  font-size: 5rem;
  font-weight: 600;
  font-size: 4.5rem;
  line-height: 5.25rem;
  width: 750px;
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
  letter-spacing: 0.375rem;

  font-family: "Khula", sans-serif;
  font-weight: bold;
  text-transform: uppercase;
`;

export const HeroTitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const HeroScrollDownText = styled.p`
  font-size: 1.375rem;
  font-family: "Khula", sans-serif;
  font-weight: bold;
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
