import Slider from "@/components/Slider/Slider";
import SliderPropagination from "../context/sliderPropagination/SliderPropagination";
import React from "react";
import Article from "@/components/Article/Article";
import Products from "@/components/Products/Products";
import WorkServices from "@/components/WorkServices/WorkServices";
import Testimony from "@/components/Testimony/Testimony";
export const metadata = {
  title: 'Home',
};

const Home = () => {
  return (
      <div className="">
        <Slider />
        <Article/>
        <Products/>
        <WorkServices/>
       <Testimony/>
      </div>
  );
};

export default Home;
