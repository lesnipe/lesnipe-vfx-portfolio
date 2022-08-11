import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#f9f9f9" : "#090909")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 36px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#171923" : "#f9f9f9")};
  font-size: ${({ fontbig }) => (fontbig ? "16px" : "12px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  z-index: 3;
  font-weight: 700;
  text-decoration: none;

  &:hover {
    transition: all 0.3s ease-in-out;
    background: #ff7700;
    color: #171923;
    font-weight: 800;
    box-shadow: 0px 10px 15px rgb(0 0 0 / 0.4) ;
    transform: translateY(5px);
  }
`;
