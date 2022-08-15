import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import CustomCard from "../../Card";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const CarouselHorizontal = ({
  dataPortfolio,
  portfolioModalIsOpen,
  setPortfolioModalIsOpen,
  videoForModal,
  setVideoForModal
}) => {

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="my-swipper-portfolio"
      >
        {dataPortfolio.map((video, id) => (
          <SwiperSlide key={id} className="my-swiper-slider-portfolio">
            <CustomCard
              data={video}
              portfolioModalIsOpen={portfolioModalIsOpen}
              setPortfolioModalIsOpen={setPortfolioModalIsOpen}
              videoForModal={videoForModal}
              setVideoForModal={setVideoForModal}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CarouselHorizontal;
