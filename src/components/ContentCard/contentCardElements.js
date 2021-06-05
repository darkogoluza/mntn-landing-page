import styled from "styled-components";

export const MainWrapper = styled.section`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  align-items: center;
  padding: 0 ${(props) => props.theme.sidePadding};
`;
export const Wrapper = styled.div`
  & > * {
    margin-bottom: 1.688rem;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  padding: 4.5rem;
`;
export const TagText = styled.p`
  font-weight: 800;
  font-size: 1.125rem;
  line-height: 1.375rem;
  letter-spacing: 0.375rem;
  text-transform: uppercase;

  font-family: "Khula", sans-serif;
  color: ${(props) => props.theme.yellow};
`;
export const TagContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
export const TagLine = styled.div`
  width: 4.5rem;
  height: 0.125rem;

  margin-right: 1.5rem;

  background-color: ${(props) => props.theme.yellow};
`;
export const Title = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 4rem;
  line-height: 4.813rem;

  font-family: "Bentham", serif;
  color: ${(props) => props.theme.white};
`;
export const Description = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 1.125rem;
  line-height: 2rem;

  color: ${(props) => props.theme.white};
  font-family: "Khula", sans-serif;
`;

export const ReadMoreContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const ReadMoreText = styled.p`
  font-size: 1.125rem;
  line-height: 1.375rem;

  color: ${(props) => props.theme.yellow};
  font-family: "Khula", sans-serif;
  margin-right: 1rem;
`;
export const ReadMoreIcon = styled.img`
  width: 1.5rem;
  height: 1rem;
`;

export const SideImage = styled.img`
  height: 620px;
`;

export const Counter = styled.h1`
  position: absolute;
  z-index: -1;
  left: -125px;
  top: -50px;

  font-style: normal;
  font-weight: bold;
  font-size: 240px;
  line-height: 240px;

  color: ${(props) => props.theme.white};
  opacity: 0.1;
  font-family: "Khula", sans-serif;
`;
