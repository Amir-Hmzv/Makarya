"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Keyboard,
  Pagination,
  Navigation,
  EffectFade,
  Mousewheel,
  Autoplay,
} from "swiper";
import { FaAlignRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import "swiper/css/pagination";
import "../../style/slider.css";
import Slide from "./Slide";
import { StopPropagination } from "@/context/sliderPropagination/SliderPropagination";
import srcSlider from "../../public/Slide.png";
import srcSlider2 from "../../public/Slide3.png";

const Slider = () => {
  const { showDropdown, setShowDropdown,setIsFocused ,setIsFocused2, setIsFocused3}: any = useContext(StopPropagination);

  return (
    <div className="z-[-1]">
      <Swiper
      
      
        onClick={() => {
          setIsFocused3(false)
          setIsFocused2(false)
          setIsFocused(false)

        }}
        effect="fade"
        autoplay={{ delay: 5000 }}
        slidesPerView={1}
        spaceBetween={30}
        // touchMoveStopPropagation
        // preventInteractionOnTransition
        draggable={false}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        fadeEffect={{ crossFade: true }}
        navigation={true}
        modules={[
          Keyboard,
          Pagination,
          Navigation,
          Autoplay,
          EffectFade,
          Mousewheel,
        ]}
        className="lg:h-[93.6vh] w-full h-[40vh]  md:h-[50vh]   "
      >
        <SwiperSlide>
          <Slide img={srcSlider} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide img={srcSlider2} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
