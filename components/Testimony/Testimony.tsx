"use client";
import React, { useContext, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { AiFillStar } from "react-icons/ai";
// import required modules
import { Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Avatar } from "antd";
import TestimoyContent from "./TestimoyContent";
import { StopPropagination } from "@/context/sliderPropagination/SliderPropagination";

export default function Testimony() {
  const {
    showDropdown,
    setShowDropdown,
    setIsFocused,
    setIsFocused2,
    setIsFocused3,
  }: any = useContext(StopPropagination);

  return (
    <div className="mt-32">
      <div className="w-[50%] mx-auto text-center  h-[.15rem] mt-20 mb-20 bg-orange-400 "></div>
      <span className="relative w-full text-3xl text-center grid place-content-center place-items-center mt-10 mb-5  font-bold">
        Testimony
        <div className="after:content-[''] after:mt-1 after:w-14 after:text-center after:left-[50%] after:translate-x-[-50%]  mt-1 after:h-1.5 after:absolute after:bg-orange-300 "></div>
      </span>
      <Swiper
        onClick={() => {
          setIsFocused3(false);
          setIsFocused2(false);
          setIsFocused(false);
        }}
        breakpoints={{
          1180: {
            slidesPerView: 2,
            spaceBetween: -70
          },
        }}
        slidesPerView={1}
        spaceBetween={130}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper "
      >
        <SwiperSlide>
          <TestimoyContent />
        </SwiperSlide>
        <SwiperSlide>
          <TestimoyContent />
        </SwiperSlide>
        <SwiperSlide>
          <TestimoyContent />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
