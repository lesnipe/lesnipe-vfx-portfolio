import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import CustomCard from '../../Card'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";




const CarouselHorizontal = ({ dataPortfolio }) => {

  console.log(dataPortfolio);
  
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
        {
          
            dataPortfolio.map((video, id) => 
                <SwiperSlide key={id} className="my-swiper-slider-portfolio">
              
                    <CustomCard data={video} />
                </SwiperSlide>
            )
          
        }
       {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
}

export default CarouselHorizontal;
