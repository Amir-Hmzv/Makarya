import Image, { StaticImageData } from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
type SlideProps = {
 img: StaticImageData
  

};
const Slide = ({img}:SlideProps) => {
  return (
    <div className="w-full   relative h-full md:h-full  z-[90]">
      <img
        className="object-fill w-[100%]  absolute h-full   "
        alt=""
        src={img.src}
      />
      <div className="absolute flex flex-col w-full justify-center items-center h-full space-y-5 ">
        <h1 className="  text-3xl md:text-4xl  font-bold text-[#0D0908]  drop-shadow-lg lg:text-6xl">
          Make It Happen
        </h1>
        <p className="md:w-6/12 w-8/12 text-gray-600 leading-7  text-sm md:text-lg  ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          aperiam voluptatem voluptate molestias, minus voluptates voluptatibus
          labore distinctio 
        </p>
      </div>
    </div>
  );
};

export default Slide;
