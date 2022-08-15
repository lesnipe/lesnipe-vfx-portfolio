import styled from "styled-components";
import { MdArrowForwardIos } from "react-icons/md";
import { Canvas } from "@react-three/fiber";

export const HeroContainer = styled.div`
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  margin-top: 80ox;
  height: 1080px;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const HeroBgVideo = styled.iframe`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100vw;
  height: 100vh;
  transform: translate(-50%, -50%);
  user-select: none;

  @media (min-aspect-ratio: 16/9) {
    height: 56.25vw;
  }

  @media (max-aspect-ratio: 16/9) {
    width: 177.78vh;
  }
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Hero3dLogoContainer = styled.div`
  z-index: 3;
  width: 60%;
  height: 400px;
  margin-top: -20%;
  align-items: center;
`;

export const Hero3dLogo = styled(Canvas)`
  width: 100%;
  height: 100%;
  align-items: center;
  cursor: pointer;
`;

export const HeroH1 = styled.span`
  color: #ff7000;
  font-size: 68px;
  font-weight: 800;
  display: inline;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 34px;
  }
`;

export const HeroParagraphsContainer = styled.div`
  max-width: 600px;
  justify-content: center;
`

export const HeroP = styled.p`
  margin-top: 10px;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  justify-items: center;
  max-width: 550px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 768px) {
    transform: scale(0.8);
  }
`;

export const ArrowStart = styled(MdArrowForwardIos)`
  margin-left: 8px;
  font-size: 20px;
  font-weight: 1000;
`;
