import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading1,
  Heading2,
  Subtitle,
} from "./InfoElements";
import Form from "../Form";
import CarouselBox from "../Carousels/CarouselBox";
import CarouselHorizontal from "../Carousels/CarouselHorizontal";
import VideoModal from "../Modal";

const Info = ({
  dataGallery,
  dataPortfolio,
  id,
  lightBg,
  lightText,
  description,
  topline,
  toplineIcon,
  headline1,
  headline2,
  imgStart,
  portfolioModalIsOpen,
  setPortfolioModalIsOpen,
  videoForModal,
  setVideoForModal,
}) => {
  return (
    <>
      <VideoModal
        data={videoForModal}
        portfolioModalIsOpen={portfolioModalIsOpen}
        setPortfolioModalIsOpen={setPortfolioModalIsOpen}
      />
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>
                  {toplineIcon} {topline}
                </TopLine>
                <Heading1 lightText={lightText}>{headline1}</Heading1>
                <Heading2>{headline2}</Heading2>
                <Subtitle lightText={lightText}>{description}</Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              {id === "portfolio" && (
                <CarouselHorizontal
                  dataPortfolio={dataPortfolio}
                  portfolioModalIsOpen={portfolioModalIsOpen}
                  setPortfolioModalIsOpen={setPortfolioModalIsOpen}
                  videoForModal={videoForModal}
                  setVideoForModal={setVideoForModal}
                />
              )}
              {id === "gallery" && <CarouselBox dataGallery={dataGallery} />}
              {id === "contact" && <Form />}
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Info;
