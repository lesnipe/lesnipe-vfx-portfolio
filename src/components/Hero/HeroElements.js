import styled from "styled-components";
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
  background-color: black;

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

export const HeroBgVideo = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: black;
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

  @media screen and (max-width: 768px) {
    width: 85%;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
  }
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
  display: block;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 34px;
  }
`;

export const HeroParagraphsContainer = styled.div`
  max-width: 650px;
  display: block;
  justify-content: center;
  align-items: center;
`;

export const HeroP = styled.p`
  margin-top: 10px;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  max-width: 100%;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;
