import React from "react";
import { Button } from "../ButtonElements";
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
  BtnWrap,
  ImgWrap,
  Img,
} from "./InfoElements";
import Form from "../Form"
import CarouselBox from "../Carousels/CarouselBox"
import CarouselHorizontal from "../Carousels/CarouselHorizontal";

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
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine >
                  {toplineIcon} {topline}
                </TopLine>
                <Heading1 lightText={lightText}>{headline1}</Heading1>
                <Heading2>{headline2}</Heading2>
                <Subtitle lightText={lightText}>{description}</Subtitle>
              
              </TextWrapper>
            </Column1>
            <Column2>
              {id === "portfolio" && <CarouselHorizontal dataPortfolio={dataPortfolio} />}
              {id === "gallery" && <CarouselBox dataGallery={dataGallery} />}
              {id === "contact" && <Form /> }
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Info;
