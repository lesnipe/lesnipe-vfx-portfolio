import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarWrapper,
  SidebarLink,
} from "./SidebarElements";
import { SocialMenu, SocialItem, SocialLinks } from "../Navbar/NavbarElements";
import { FaInstagramSquare, FaYoutube, FaLinkedin } from "react-icons/fa";

const Sidebar = ({ redirectTo, isOpen, toggleIsOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggleIsOpen}>
      <Icon onClick={toggleIsOpen}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to="introduction"
            smooth={true}
            duration={500}
            spy={true}
            exact={"true"}
            offset={-80}
            onClick={toggleIsOpen}
          >
            Introduction
          </SidebarLink>
          <SidebarLink
            to="portfolio"
            smooth={true}
            duration={500}
            spy={true}
            exact={"true"}
            offset={-80}
            onClick={toggleIsOpen}
          >
            Portfolio
          </SidebarLink>
          <SidebarLink
            to="gallery"
            smooth={true}
            duration={500}
            spy={true}
            exact={"true"}
            offset={-80}
            onClick={toggleIsOpen}
          >
            Gallery
          </SidebarLink>
          <SidebarLink
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            exact={"true"}
            offset={-80}
            onClick={toggleIsOpen}
          >
            Contact
          </SidebarLink>

          <SocialMenu isOpen={isOpen}>
            <SocialItem>
              <SocialLinks
                onClick={() =>
                  redirectTo("https://www.instagram.com/myron_sfyrakis/")
                }
              >
                <FaInstagramSquare />
              </SocialLinks>
            </SocialItem>
            <SocialItem>
              <SocialLinks
                onClick={() =>
                  redirectTo("https://www.linkedin.com/in/myronsfyrakis/")
                }
              >
                <FaLinkedin />
              </SocialLinks>
            </SocialItem>
            <SocialItem>
              <SocialLinks
                onClick={() => redirectTo("https://www.youtube.com/c/lesnipe")}
              >
                <FaYoutube size={30} />
              </SocialLinks>
            </SocialItem>
          </SocialMenu>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
