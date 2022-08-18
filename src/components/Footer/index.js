import React from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import {
  CreditsContainer,
  CreditsAllWrapper,
  CreditsText,
  BackToTopContainer,
  BackToTopArrow,
} from "./FooterElements";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <CreditsContainer>
        <BackToTopContainer>
          <BackToTopArrow
            to="introduction"
            smooth={true}
            duration={1000}
            spy={true}
            exact={"true"}
            offset={-80}
          >
            <MdOutlineKeyboardArrowUp />
          </BackToTopArrow>
        </BackToTopContainer>
        <CreditsAllWrapper>
          <CreditsText isTitle="true">
            Le Snipe' Visuals © {year} - All rights reserved.
          </CreditsText>
          <CreditsText>
            Passionately designed & developed by Myron Sfyrakis.
          </CreditsText>
        </CreditsAllWrapper>
      </CreditsContainer>
    </>
  );
};

export default Footer;
