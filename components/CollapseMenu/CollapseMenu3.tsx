import { StopPropagination } from "@/context/sliderPropagination/SliderPropagination";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

export default function App() {
  const { isOpenCollapse3, setIsOpenCollapse3, setIsOpenCollapse2 , setIsOpenCollapse, setOpenDrawer }: any =
    useContext(StopPropagination);

  const handleToggle = () => setIsOpenCollapse3(!isOpenCollapse3);

  const menuStyles = {
    transform: isOpenCollapse3 ? "translateY(0%)" : "translateY(-20%)",
    transition: "all 0.5s ease-out",
    minHeight: isOpenCollapse3 ? "135px" : 0,
  };

  return (
    <div className="">
      <nav className="navbar relative flex justify-center items-center ml-2">
        <button
          className="menu-toggle text-white text-2xl hover:font-bold transition-all ease-out duration-100"
          onClick={handleToggle}
        >
          Pages
        </button>
        {isOpenCollapse3 ? (
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
          isOpenCollapse3 && "my-5"
        }`}
        style={menuStyles}
      >
        <ul className="menu-items space-y-2  text-md  ">
          <li>
            <Link
              onClick={() => {
                setOpenDrawer(false), setIsOpenCollapse3(false),setIsOpenCollapse2(false),setIsOpenCollapse(false)
              }}
              className="text-white hover:font-bold cursor-pointer uppercase  transition-all ease-linear duration-100  "
              href={"/pages/login"}
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setOpenDrawer(false), setIsOpenCollapse3(false),setIsOpenCollapse2(false),setIsOpenCollapse(false)
              }}
              className="text-white hover:font-bold cursor-pointer uppercase  transition-all ease-linear duration-100  "
              href={"/pages/register"}
            >
              Register
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setOpenDrawer(false), setIsOpenCollapse3(false),setIsOpenCollapse2(false),setIsOpenCollapse(false)
              }}
              className="text-white hover:font-bold cursor-pointer uppercase  transition-all ease-linear duration-100  "
              href={"/pages/fqa"}
            >
              fqa
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setOpenDrawer(false), setIsOpenCollapse3(false),setIsOpenCollapse2(false),setIsOpenCollapse(false)
              }}
              className="text-white hover:font-bold cursor-pointer uppercase  transition-all ease-linear duration-100  "
              href={"/pages/pricing"}
            >
              pricing
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
