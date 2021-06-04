import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;
export const Text = styled.p`
  font-size: 1.125rem;
  line-height: 1.375rem;
  text-align: right;

  color: ${(props) => props.theme.white};
  font-family: "Khula", sans-serif;
`;
export const TextContainer = styled.div`
  & > * {
    margin-bottom: 2.5rem;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
`;
export const SliderBox = styled.div`
  width: 3px;
  height: 240px;
  margin-left: 2rem;

  background-color: ${(props) => props.theme.whiteTransparent};

  &::after {
    content: " ";
    display: block;
    width: 100%;
    background-color: red;
    height: 60px;
    z-index: 2;
    background-color: ${(props) => props.theme.white};
  }
`;
