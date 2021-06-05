import React from "react";
import {
  Link,
  LinksContainer,
  LinksTitle,
  FooterContainerr,
  LinksWrapper,
  SideContent,
  Logo,
  Description,
  CopyRight,
} from "./footerElements";

const Footer = () => {
  return (
    <>
      <FooterContainerr>
        <SideContent>
          <Logo>MNTN</Logo>
          <Description>
            Get out there & discover your next
            <br /> slope, mountain & destination!
          </Description>
          <CopyRight>Copyright 2019 MNTN, Inc. Terms & Privacy</CopyRight>
        </SideContent>
        <LinksWrapper>
          <LinksContainer>
            <LinksTitle>More on The Blog</LinksTitle>
            <Link href="#">About MNTN</Link>
            <Link href="#">Contributors & Writers</Link>
            <Link href="#">Write For Us</Link>
            <Link href="#">Contact Us</Link>
            <Link href="#">Privacy Policy</Link>
          </LinksContainer>
          <LinksContainer>
            <LinksTitle>More on The Blog</LinksTitle>
            <Link href="#">The Team </Link>
            <Link href="#">Jobs</Link>
            <Link href="#">Press</Link>
          </LinksContainer>
        </LinksWrapper>
      </FooterContainerr>
    </>
  );
};

export default Footer;
