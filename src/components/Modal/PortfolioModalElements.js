import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

export const ModalContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: grid;
  align-items: center;
  left: 0;
  transition: 5s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  backdrop-filter: blur(5px);
`;

export const ModalExitButton = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  top: -1rem;
  right: 0;
  margin: 1.5rem;
  font-size: 3rem;
  &:hover {
    cursor: pointer;
    color: #ff7700;
    transition: 0.2s ease-in-out;
  }
`;

export const CloseIcon = styled(AiOutlineClose)`
  color: #fff;
`;

export const ModalContent = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;
`;

export const ModalVideo = styled.iframe`
  position: absolute;
  top: 0;
  left: 5%;
  bottom: 0;
  right: 0;
  width: 90%;
  height: 90%;

  @media screen and (min-width: 2000px) {
    transform: scale(0.8);
  }

  @media screen and (min-width: 2700px) {
    transform: scale(0.65);
  }
`;
