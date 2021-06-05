import styled from "styled-components";

export const FooterContainerr = styled.footer`
  display: flex;

  justify-content: space-between;
  padding: 0 ${(props) => props.theme.sidePadding};

  margin-bottom: 7.5rem;
`;
export const LinksWrapper = styled.div`
  display: flex;
  width: 487px;

  justify-content: space-between;
`;

export const LinksContainer = styled.div`
  & > * {
    margin-bottom: 1rem;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
`;
export const LinksTitle = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 2rem;
  margin-bottom: 1.5rem;

  font-family: "Khula", sans-serif;
  color: ${(props) => props.theme.yellow};
`;
export const Link = styled.a`
  display: block;

  font-style: normal;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 2rem;

  text-decoration: none;

  font-family: "Khula", sans-serif;
  color: ${(props) => props.theme.white};
`;

export const SideContent = styled.div``;
export const Logo = styled.h1`
  font-size: 2rem;
  line-height: 2.375rem;
  letter-spacing: 0.2em;
  text-transform: capitalize;

  font-family: "Bentham", serif;
  color: ${(props) => props.theme.white};

  margin-bottom: 1.5rem;
`;
export const Description = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 1.125rem;
  line-height: 2rem;

  font-family: "Khula", sans-serif;
  color: ${(props) => props.theme.white};

  margin-bottom: 7.625rem;
`;
export const CopyRight = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 2rem;

  opacity: 0.5;
  font-family: "Khula", sans-serif;
  color: ${(props) => props.theme.white};
`;
