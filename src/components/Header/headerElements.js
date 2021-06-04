import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${(props) => props.theme.sidePadding};
  padding-top: 64px;
`;

export const Logo = styled.h1`
  color: ${(props) => props.theme.white};
  text-transform: uppercase;
  font-size: 2rem;
  font-family: "Bentham", serif;
`;

export const Links = styled.ul`
  display: flex;
`;
export const Link = styled.li`
  font-family: "Khula", sans-serif;
  list-style: none;
  color: ${(props) => props.theme.white};
  font-size: 1.375rem;

  margin-right: 2.5rem;

  &:last-child {
    margin-right: 0rem;
  }
`;

export const AccountText = styled.h2`
  font-family: "Khula", sans-serif;
  color: ${(props) => props.theme.white};
  margin-left: 0.625rem;
`;
export const AccountIcon = styled.img`
  width: 24px;
  height: 24px;
`;
export const Account = styled.div`
  display: flex;
  align-items: center;
`;
