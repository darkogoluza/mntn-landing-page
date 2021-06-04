import React from "react";
import {
  Nav,
  Logo,
  Links,
  Link,
  Account,
  AccountIcon,
  AccountText,
} from "./headerElements";
import AccountIconImage from "../../assets/account_icon.png";

const Header = () => {
  return (
    <>
      <Nav>
        <Logo>MNTN</Logo>
        <Links>
          <Link>Equipment</Link>
          <Link>About us</Link>
          <Link>Blog</Link>
        </Links>
        <Account>
          <AccountIcon src={AccountIconImage} />
          <AccountText>Account</AccountText>
        </Account>
      </Nav>
    </>
  );
};

export default Header;
