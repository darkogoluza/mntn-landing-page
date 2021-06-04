import styled from "styled-components";

export const Container = styled.div`
  & > * {
    margin-bottom: 1.5rem;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
`;
export const Icon = styled.a`
  width: 1.5rem;
  height: 1.5rem;
  display: block;
  background-image: url(${(props) => props.src});
`;
export const Text = styled.h3`
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-size: 1.125rem;
  color: ${(props) => props.theme.white};
  font-family: "Khula", sans-serif;
`;
