import React from "react";
import { FaCameraRetro, FaNewspaper, FaFile } from "react-icons/fa";
import ServiceContent from "./ServiceContent";

const WorkServices = () => {
  return (
    <div className="mt-32">
      <div className="w-[50%] mx-auto text-center  h-[.15rem] mt-20 mb-20 bg-orange-400 "></div>
      <span className="relative w-full text-3xl text-center grid place-content-center place-items-center mt-10 mb-5  font-bold">
        Our Services
        <div className="after:content-[''] after:mt-1 after:w-14 after:text-center after:left-[50%] after:translate-x-[-50%]  mt-1 after:h-1.5 after:absolute after:bg-orange-300 "></div>
      </span>
      <div className=" grid grid-cols-1  md:grid-cols-2  xl:grid-cols-3  w-[80%] mx-auto space-x-10">
        <ServiceContent
          icon={
            <FaCameraRetro
              size={26}
              className=" absolute text-orange-300 left-[50%] top-[50%] text-center translate-x-[-50%] translate-y-[-50%]"
            />
          }
          title={'Branding'}

        />
        <ServiceContent
          icon={
            <FaNewspaper
              size={26}
              className=" absolute text-orange-300 left-[50%] top-[50%] text-center translate-x-[-50%] translate-y-[-50%]"
            />
          }
          title={'Print Design'}

        />
        <ServiceContent
          icon={
            <FaFile
              size={26}
              className=" absolute text-orange-300 left-[50%] top-[50%] text-center translate-x-[-50%] translate-y-[-50%]"
            />
          }
          title={'PhotoGraphy'}

        />
      </div>

        <div className="text-center my-10">
            <button className="uppercase  bg-[#eecc0d] px-5 py-2 text-white rounded-md ">
                Pricing Plan
            </button>
        </div>

    </div>
  );
};

export default WorkServices;
