import styled from "styled-components";

export const BackgroundContainer = styled.section`
  margin-top: 500px;
  margin-bottom: 12.5rem;
`;
export const Content = styled.ul`
  & > * {
    margin-bottom: 12.5rem;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
`;
