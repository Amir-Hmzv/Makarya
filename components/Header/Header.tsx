"use client"; // this is a client component 👈🏽
import Image from "next/image";
import React, { useContext, useRef } from "react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Dropdown, Menu, Drawer, Collapse } from "antd";
import { Button, Space } from "antd";
import { AiFillCaretDown, AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { MenuProps } from "antd/es/menu";
// import { article, menu, pages } from "../helper/menuItem";
import { StopPropagination } from "@/context/sliderPropagination/SliderPropagination";
import ResponsiveMdMenu from "../ResponsiveMdMenu/ResponsiveMdMenu";
const HeaderPage = () => {
  const {
    isFocused3,
    setIsFocused3,
    isFocused2,
    setIsFocused2,
    isFocused,
    setIsFocused,
    openDrawer,
    setOpenDrawer,
    setIsOpenCollapse,
    setIsOpenCollapse2,
    setIsOpenCollapse3
  }: any = useContext(StopPropagination);


  const handleVisibleChange = (visible: any) => {
    setIsFocused(visible);
  };
  const handleVisibleArticle = (visible: any) => {
    setIsFocused2(visible);
  };
  const handleVisiblePages = (visible: any) => {
    setIsFocused3(visible);
  };
  const path = usePathname();

  const showDrawer = () => {
    setOpenDrawer(true);
  };

  const onClose = () => {
    setOpenDrawer(false);
    setIsOpenCollapse(false)
    setIsOpenCollapse2(false)
    setIsOpenCollapse3(false)

  };

  const isActive = (href: string) => {
    const act = path === href ? "after:block" : "after:hidden";
    return act;
  };

  const isActiveDropDown = (href: string) => {
    const pathSplit = path.split("/");
    const act = pathSplit[1] === href ? "after:block" : "after:hidden";
    return act;
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div className=" text-lg  bg-transparent text-white text-center ">
          <Link
            className="hover:text-white hover:font-bold  transition-all duration-100 ease-linear  uppercase  "
            rel="noopener noreferrer"
            href="/portfolio/portfolio-list"
          >
            Portfolio List
          </Link>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div className="text-lg  bg-transparent text-white w-44 text-center">
          <Link
            className="hover:text-white  hover:font-bold transition-all duration-100 ease-linear whitespace-nowrap    uppercase "
            rel="noopener noreferrer"
            href="/portfolio/portfolio-details"
          >
            Portfolio Details
          </Link>
        </div>
      ),
    },
  ];
  const items2: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div className=" text-lg  bg-transparent text-white text-center ">
          <Link
            className="hover:text-white hover:font-bold  transition-all duration-100 ease-linear   uppercase "
            rel="noopener noreferrer"
            href="/article/article-list"
          >
            Article List
          </Link>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div className="text-lg  bg-transparent text-white w-36 text-center">
          <Link
            className="hover:text-white  hover:font-bold transition-all duration-100 ease-linear whitespace-nowrap    uppercase "
            rel="noopener noreferrer"
            href="/article/article-details"
          >
            Article Details
          </Link>
        </div>
      ),
    },
  ];

  const items3: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div className=" text-lg  bg-transparent text-white text-center ">
          <Link
            className="hover:text-white hover:font-bold  transition-all duration-100 ease-linear   uppercase  "
            rel="noopener noreferrer"
            href="/pages/login"
          >
            Login
          </Link>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div className="text-lg  bg-transparent text-white w-36 text-center">
          <Link
            className="hover:text-white  hover:font-bold transition-all duration-100 ease-linear uppercase "
            rel="noopener noreferrer"
            href="/pages/register"
          >
            Register
          </Link>
        </div>
      ),
    },

    {
      key: "3",
      label: (
        <div className="text-lg  bg-transparent text-white w-36 text-center">
          <Link
            className="hover:text-white  hover:font-bold transition-all duration-100 ease-linear  uppercase  "
            rel="noopener noreferrer"
            href="/pages/faq"
          >
            faq
          </Link>
        </div>
      ),
    },
    {
      key: "4",
      label: (
        <div className="text-lg  bg-transparent text-white w-36 text-center">
          <Link
            className="hover:text-white  hover:font-bold transition-all duration-100 ease-linear   uppercase "
            rel="noopener noreferrer"
            href="/pages/faq"
          >
            pricing
          </Link>
        </div>
      ),
    },
  ];
  return (
    <header
      className={`sticky top-0 w-full shadow-md   transition-all duration-300 ease-out bg-[#0D0908] py-4 px-5 md:px-20 z-10 `}
    >
      <div className="flex flex-wrap   justify-between items-center">
        <div>
          <Link href={`/`}>
            {" "}
            <Image width={30} height={30} src={`/../public/Logo.png`} alt="" />
          </Link>
        </div>
        <ul className=" lg:flex  hidden  lg:w-[60%] 2xl:w-[40%] justify-end items-center h-full  w-full  lg:space-x-14   2xl:space-x-24 ">
          <li className="text-white w-20 text-xl italic relative uppercase  hover:font-bold px-2 transition-all duration-100 ease-linear  ">
            <Link href={"/"}>
              <span
                className={`after:content-[''] ${isActive(
                  "/"
                )} after:w-full after:left-[-0px] after:h-[.4rem] after:rounded  after:bg-yellow-300 after:absolute  after:top-10 `}
              >
                Home
              </span>
            </Link>
          </li>
          <li className="text-white relative text-xl w-20 italic uppercase hover:font-bold   transition-all duration-100 ease-linear  ">
            <Link href={"/about"}>
              <span
                className={`after:content-[''] ${isActive(
                  "/about"
                )} after:w-[135%] after:left-[-6px]  after:h-[.4rem] after:rounded  after:bg-yellow-300 after:absolute  after:top-10 whitespace-nowrap `}
              >
                about us
              </span>
            </Link>
          </li>
          <Dropdown
            menu={{ items }}
            placement="bottom"
            open={isFocused}
            onOpenChange={handleVisibleChange}
            trigger={["click"]}
            overlayClassName={"overlayClassName"}
          >
            <li
              className={`text-white flex space-x-1 italic relative  text-xl uppercase cursor-pointer  w-[6rem] ${
                isFocused && "font-bold"
              } `}
            >
              <span
                className={`after:w-full after:left-[0px] ${isActiveDropDown(
                  "portfolio"
                )}  after:h-[.4rem]  after:rounded  after:bg-yellow-300 after:absolute  after:top-10`}
              >
                PORTFOLIO
              </span>
            <span className="align-middle flex items-center ">  <AiFillCaretDown size={14} /></span>
            </li>
          </Dropdown>
          <Dropdown
            menu={{ items: items2 }}
            placement="bottom"
            open={isFocused2}
            onOpenChange={handleVisibleArticle}
            trigger={["click"]}
            overlayClassName={"overlayClassName"}
          >
            <li
              className={`text-white flex space-x-1 italic relative  text-xl uppercase cursor-pointer  w-[4.5rem] ${
                isFocused2 && "font-bold"
              } `}
            >
              <span
                className={`after:w-full after:left-[0px] ${isActiveDropDown(
                  "article"
                )}  after:h-[.4rem]  after:rounded  after:bg-yellow-300 after:absolute  after:top-10`}
              >
                Article
              </span>
              <span className="align-middle flex items-center ">  <AiFillCaretDown size={14} /></span>

            </li>
          </Dropdown>
          <Dropdown
            menu={{ items: items3 }}
            placement="bottom"
            open={isFocused3}
            onOpenChange={handleVisiblePages}
            trigger={["click"]}
            overlayClassName={"overlayClassName"}
          >
            <li
              className={`text-white flex space-x-1 italic relative  text-xl uppercase cursor-pointer w-[3.5rem] ${
                isFocused3 && "font-bold"
              } `}
            >
              <span
                className={`after:w-full after:left-[0px] ${isActiveDropDown(
                  "pages"
                )}  after:h-[.4rem]  after:rounded  after:bg-yellow-300 after:absolute  after:top-10`}
              >
                Pages
              </span>
              <span className="align-middle flex items-center ">  <AiFillCaretDown size={14} /></span>

            </li>
          </Dropdown>
          <li className="text-white w-[4.5rem]  relative text-xl italic uppercase hover:font-bold  transition-all duration-100 ease-linear ">
            <Link href={"/contact"}>
              <span
                className={`after:content-[''] ${isActive(
                  "/contact"
                )} after:w-[120%]  after:left-[0px] after:h-[.4rem] after:rounded  after:bg-yellow-300 after:absolute  after:top-10 `}
              >
                contact
              </span>
            </Link>
          </li>
        </ul>
        <div className="  flex items-center  lg:hidden   ">
          <button onClick={showDrawer} className="text-yellow-300  ">
            <FaBars size={26} />
          </button>
          <Drawer
            className="bg-[#0D0908] absolute "
            placement={"top"}
            closable={true}
            height="100%"
            onClose={onClose}
            closeIcon={<AiOutlineClose size={26} className="text-white" />}
            open={openDrawer}
          >
            <ul className=" text-center flex-col  flex items-center justify-center space-y-4">
              <ResponsiveMdMenu/>
            </ul>
          </Drawer>
        </div>
      </div>
    </header>
  );
};

export default HeaderPage;
