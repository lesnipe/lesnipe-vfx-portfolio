import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";

export const CreditsContainer = styled.footer`
  height: 5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
`;

export const CreditsAllWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 50px;
`;

export const CreditsText = styled.p`
  
  color: ${({isTitle}) => (isTitle ? "#ffffff"  : "#ff7700")};
  font-size: ${({isTitle}) => (isTitle ? "16px"  : "12px")};;
  font-weight: 600;
  white-space: nowrap;
  padding-top: 10px;
  align-items: center;
  justify-content: center;

`;

export const BackToTopContainer = styled.div`
  justify-content: center;
  align-items: center;
  width: 200px;
  margin-top: 10px;
  display: block;
`;

export const BackToTopArrow = styled(LinkScroll)`
  color: #ff7700;
  font-size: 50px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    color: #fff;
    font-size: 55px;
    transition: 0.3s all ease;
  }
`;