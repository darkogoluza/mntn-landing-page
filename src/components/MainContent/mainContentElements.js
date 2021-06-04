import styled from "styled-components";

export const BackgroundContainer = styled.section`
  background-color: ${(props) => props.theme.bg};
  position: relative;
  top: 900px;
`;
export const Content = styled.ul`
  position: absolute;
  top: -400px;
  & > * {
    margin-bottom: 12.5rem;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
`;
