import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#171923")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 1080px;
  width: 100%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    align-items: center;
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 25px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 25px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 20px;
`;

export const TopLine = styled.p`
  color: #ff7700;
  font-size: 20px;
  line-height: 16px;
  font-weight: 1000;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  align-items: center;
  margin-bottom: 16px;
  border-left: 50px;
`;

export const Heading1 = styled.h1`
  margin-bottom: auto;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 800;
  color: ${({ lightText }) => (lightText ? "#f9f9f9" : "#171923")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Heading2 = styled.h1`
  margin-bottom: 18px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 800;
  color: #ff7700;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  color: ${({ lightText }) => (lightText ? "#f9f9f9" : "#171923")};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const ImgWrap = styled.div`
  max-width: 800px;
  height: 100%;
  justify-content: center;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 100px 0px;
`;
