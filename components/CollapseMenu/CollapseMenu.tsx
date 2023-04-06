import { StopPropagination } from "@/context/sliderPropagination/SliderPropagination";
import Link from "next/link";
import React, { useContext, useState } from "react";
import {
  AiOutlineCaretDown,
  AiOutlineCaretLeft,
  AiOutlineCaretUp,
} from "react-icons/ai";

export default function App() {
  const { isOpenCollapse, setIsOpenCollapse,setIsOpenCollapse2,setIsOpenCollapse3, setOpenDrawer }: any =
    useContext(StopPropagination);

  const handleToggle = () => setIsOpenCollapse(!isOpenCollapse);
  const menuStyles = {
    transform: isOpenCollapse ? "translateY(0%)" : "translateY(-20%)",
    transition: "all 0.5s ease-out",
    minHeight: isOpenCollapse ? "100px" : 0,
  };

  return (
    <div className="">
      <nav className="navbar relative flex justify-center items-center ml-2">
        <button
          className="menu-toggle text-white text-2xl hover:font-bold transition-all ease-out duration-100"
          onClick={handleToggle}
        >
          Portfolio
        </button>
        {isOpenCollapse ? (
          <span className="mt-3">
            <AiOutlineCaretUp className="ml-2" color="white" />
          </span>
        ) : (
          <span className="mt-3">
            <AiOutlineCaretDown className="ml-2" color="white" />
          </span>
        )}
      </nav>
      <div
        className={`menu  w-40 flex justify-center relative overflow-hidden ${
          isOpenCollapse && "my-5"
        }`}
        style={menuStyles}
      >
        <ul className="menu-items space-y-3  text-md  ">
          <li>
            <Link
              onClick={() => {
                setOpenDrawer(false), setIsOpenCollapse3(false),setIsOpenCollapse2(false),setIsOpenCollapse(false)
              }}
              className="text-white transition-all ease-linear duration-100  hover:font-bold cursor-pointer uppercase"
              href={"/portfolio/portfolio-list"}
            >
              Portfolio List
            </Link>
          </li>

          <li className="">
            <Link
              onClick={() => {
                setOpenDrawer(false), setIsOpenCollapse3(false),setIsOpenCollapse2(false),setIsOpenCollapse(false)
              }}
              className="text-white hover:font-bold transition-all ease-linear duration-100  cursor-pointer uppercase"
              href={"/portfolio/portfolio-details"}
            >
              Portfolio details
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
