import React from "react";
import article from '../../public/Article.png'
const Article = () => {
  return (
<div className="w-full relative  ">
<div className=" flex  flex-col justify-start items-center text-center w-full mt-20 space-y-10  ">
      <div className="w-full ">
        <div className="text-4xl font-bold  text-black  w-full  ">
          <span className="relative w-full">Who Are We
          <div className="after:content-[''] after:w-20 after:text-center after:left-[50%] after:translate-x-[-50%]  mt-1 after:h-1.5 after:absolute after:bg-yellow-300 "></div>

          </span>

        </div>
      </div>
      <div className="  w-8/12 text-gray-500 pt-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolor
        dolorem architecto iure repudiandae quae libero aspernatur, quasi
        voluptatibus repellat sint, laboriosam repellendus, culpa delectus
        sapiente fugit et ipsa aut? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Itaque dolor dolorem architecto iure repudiandae quae
        libero aspernatur, quasi voluptatibus repellat sint, laboriosam
        repellendus, culpa delectus sapiente fugit et ipsa aut?
      </div>
    
    </div>
    <div className="w-full  pt-16  ">
        <img  className="w-full h-aut" src={article.src} alt="" />
      </div>
</div>
  );
};

export default Article;
