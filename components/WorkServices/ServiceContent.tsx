import React from "react";
import { FaCameraRetro } from "react-icons/fa";

const ServiceContent = ({ icon,title }: any) => {
  return (
    <div className="flex flex-col  mt-10 space-y-2">
      <div className="flex justify-center">
        <div className="w-20 h-20 bg-black rounded-full relative text-center  items-center ">
          {icon}
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-bold ">{title}</h1>
      </div>
      <div className="text-center">
        <span className="text-gray-600 mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In inventore
          suscipit quaerat commodi aperiam est impedit magni eum iusto iste?
          Itaque nisi esse, numquam ab at explicabo. Enim, culpa atque? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. In inventore
          suscipit quaerat commodi aperiam est impedit magni eum iusto iste?
          Itaque nisi esse, numquam ab at explicabo. Enim, culpa atque?Itaque
          nisi esse, numquam ab at explicabo. Enim, culpa atque? Lorem ipsum
          dolor sit amet consectetur adipisicing elit. In inventore suscipit
          quaerat commodi aperiam est impedit magni eum
        </span>
      </div>
    </div>
  );
};

export default ServiceContent;
