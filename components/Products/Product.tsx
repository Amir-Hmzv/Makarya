import React from "react";

const Product = ({ img, title }: any) => {
  return (
    <div className=" ">
      <img src={img.src} alt="" />
      <div className="flex justify-between px-2 border-b border-r border-l  rounded-b-md border-orange-400">
        <div className="p-2">
          <h1 className="text-start  text-2xl font-bold italic">{title}</h1>
          <p className="text-gray-500 text-sm text-start">Toom-shit</p>
        </div>
        <div className="p-2">
          <button className="bg-orange-400  text-white px-4 py-2 rounded-sm hover:bg-orange-500 ease-out duration-75 transition-all">
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
