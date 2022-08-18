import React from "react";
import {
  FaBars,
  FaInstagramSquare,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import {
  Nav,
  NavContainer,
  NavLogo,
  MobileIcon,
  NavItem,
  NavMenu,
  NavLinks,
  SocialMenu,
  SocialItem,
  SocialLinks,
} from "./NavbarElements";

import Logo from "../../images/logo.png";

const Navbar = ({ redirectTo, toggleIsOpen }) => {
  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogo
            to="introduction"
            smooth={true}
            duration={500}
            spy={true}
            exact={1}
            offset={-80}
          >
            <img src={Logo} width={100} height={100} />
          </NavLogo>
          <MobileIcon onClick={toggleIsOpen}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="introduction"
                smooth={true}
                duration={500}
                spy={true}
                exact={1}
                offset={-80}
              >
                Introduction
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="portfolio"
                smooth={true}
                duration={500}
                spy={true}
                exact={1}
                offset={-80}
              >
                Portfolio
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="gallery"
                smooth={true}
                duration={500}
                spy={true}
                exact={1}
                offset={-80}
              >
                Gallery
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact={1}
                offset={-80}
              >
                Contact
              </NavLinks>
            </NavItem>
          </NavMenu>
          <SocialMenu>
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
                <FaYoutube size={28} />
              </SocialLinks>
            </SocialItem>
          </SocialMenu>
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;
