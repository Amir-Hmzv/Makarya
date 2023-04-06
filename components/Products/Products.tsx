import React from "react";
import pr1 from "../../public/kiazen/kaizen-nguy-n-1.png";
import pr2 from "../../public/kiazen/kaizen-nguy-n-2.png";
import pr3 from "../../public/kiazen/kaizen-nguy-n-3.png";
import pr4 from "../../public/kiazen/kaizen-nguy-n-4.png";
import pr5 from "../../public/kiazen/kaizen-nguy-n-5.png";
import pr6 from "../../public/kiazen/kaizen-nguy-n-760637-unsplash.png";
import Product from "./Product";

const Products = () => {
  return (
    <>
        <span className="relative w-full text-3xl text-center grid place-content-center place-items-center mt-10 font-bold">Our Works
          <div className="after:content-[''] after:w-20 after:text-center after:left-[50%] after:translate-x-[-50%]  mt-1 after:h-1.5 after:absolute after:bg-orange-400 "></div>

          </span>

      <div className="my-10 flex w-[100%] justify-center items-center mx-auto">
        <div className="grid place-items-center content-center gap-6 text-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          <Product img={pr1} title={"Branding"} />
          <Product img={pr2} title={"Branding"} />
          <Product img={pr3} title={"Photography"} />
          <Product img={pr4} title={"Photography"} />
          <Product img={pr5} title={"Design"} />
          <Product img={pr6} title={"Design"} />
        </div>
      </div>
     <div className="flex justify-center my-5">
     <button className="font-bold  text-white bg-orange-400 text-lg px-5 py-3 hover:bg-orange-500 ease-out duration-75 transition-all ">
        View All
      </button>
     </div>
    </>
  );
};

export default Products;
