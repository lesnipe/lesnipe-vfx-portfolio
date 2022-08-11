import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

const CarouselBox = ({ dataGallery }) => {
  return (
    <>
      <Swiper
        direction="vertical"
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 1,
        }}
        pagination={{ clickable: "true" }}
        modules={[EffectCube, Pagination]}
        className="my-swiper-gallery"
      >
        {dataGallery.map((photo, id) => (
          <SwiperSlide key={id} className="my-swiper-slider-gallery">
            <img src={photo.url} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CarouselBox;
