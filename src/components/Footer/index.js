import React from "react";
import { FaRegQuestionCircle } from "react-icons/fa";
import { MdLocationOn, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { RiContactsLine } from "react-icons/ri";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  CreditsContainer,
  CreditsDeveloper,
  CreditsSkinakas,
  CreditsAllWrapper,
  CreditsText,
  CreditsItemWrapper,
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
          <CreditsText >
            Passionately designed & developed by Myron Sfyrakis.
          </CreditsText>
        </CreditsAllWrapper>
      </CreditsContainer>
      {/* <CreditsContainer>
        <CreditsAllWrapper>
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
              <p>(back to top ↑)</p>
            </BackToTopArrow>
          </BackToTopContainer>

          <CreditsItemWrapper>
            <CreditsSkinakas>
              Le Snipe' Visuals © {year} - All rights reserved.
            </CreditsSkinakas>
          </CreditsItemWrapper>
          <CreditsItemWrapper>
            <CreditsDeveloper>
              Passionately designed & developed by Myron Sfyrakis.
            </CreditsDeveloper>
          </CreditsItemWrapper>
        </CreditsAllWrapper>
      </CreditsContainer> */}
    </>
  );
};

export default Footer;
