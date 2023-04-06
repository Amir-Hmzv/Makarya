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
const HeaderPage = () => {
  const [open, setOpen] = useState(false);
  const { visible, setVisible,isOpenCollapse,setIsOpenCollapse }: any = useContext(StopPropagination);
  const dropdownRef = useRef(null);

  const path = usePathname();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
    setLinks(
      links.map((link) => {
        return {
          ...link,
          ontToggle: false,
        };
      })
    );
  };
  const sub = path.split('/')

  const isActive = (href: string) => {
    return path  === href ? "block" : "hidden";
  };

  const isActive1 = (href: string) => {
    return path === 'article-list' || '' ? "block" : "hidden";
  };

  const menu = (
    <Menu className="bg-black px-6 py-8  space-y-3  relative mt-2 ml-5" >
      <Menu.Item
        className="text-white focus:bg-transparent   visited:bg-transparent target:bg-transparent bg-transparent active:bg-transparent  text-lg uppercase transition-all ease-linear duration-100 text-center 	  hover:font-bold"
        key="portfolio"
      >
        <div className="hover:font-bold hover:text-transparent ">
          {" "}
          <Link
            className="text-white focus:bg-transparent   visited:bg-transparent target:bg-transparent bg-transparent active:bg-transparent  text-lg uppercase transition-all ease-linear duration-100 text-center 	  hover:font-bold"
            href={"/p-list"}
          >
            Portfolio List
          </Link>
        </div>
      </Menu.Item>
      <Menu.Item
        className="text-white focus:bg-transparent  visited:bg-transparent target:bg-transparent bg-transparent active:bg-transparent  text-lg uppercase transition-all ease-linear duration-100 text-center w-52 "
        key="portfolio"
      >
        <div>
          {" "}
          <Link
            className="text-white focus:bg-transparent   visited:bg-transparent target:bg-transparent bg-transparent active:bg-transparent  text-lg uppercase transition-all ease-linear duration-100 text-center 	  hover:font-bold"
            href={`/p-details`}
          >
            Portfolio Details
          </Link>
        </div>
      </Menu.Item>
    </Menu>
  );
  const article = (
    <Menu className="bg-black py-8 space-y-3 px-6 mt-2 ml-5 ">
      <Menu.Item
        className="text-white focus:bg-transparent  hover:bg-transparent hover:text-transparent  text-center  visited:bg-transparent target:bg-transparent bg-transparent active:bg-transparent   text-lg uppercase hove  hover:font-bold"
        key="article"
      >
        <div>
          {" "}
          <Link
            className="text-white focus:bg-transparent   visited:bg-transparent target:bg-transparent bg-transparent active:bg-transparent  text-lg uppercase transition-all ease-linear duration-100 text-center 	  hover:font-bold"
            href={"/article/article-list"}
          >
            article List
          </Link>
        </div>
      </Menu.Item>
      <Menu.Item
        className="text-white focus:bg-transparent  visited:bg-transparent target:bg-transparent bg-transparent active:bg-transparent  text-lg text-center w-48   uppercase hove hover:font-bold "
        key="article"
      >
        <div>
          {" "}
          <Link
            className="text-white focus:bg-transparent   visited:bg-transparent target:bg-transparent bg-transparent active:bg-transparent  text-lg uppercase transition-all ease-linear duration-100 text-center 	  hover:font-bold"
            href={`/article/article-details`}
          >
            article Details
          </Link>
        </div>
      </Menu.Item>
    </Menu>
  );
  const pages = (
    <Menu className="bg-black py-6 space-y-3 px-8 mt-2 ml-5">
      <Menu.Item
        className="text-white focus:bg-transparent  visited:bg-transparent target:bg-transparent bg-transparent active:bg-transparent  text-lg text-center uppercase hove hover:font-bold "
        key="pages"
      >
        <p>
          <Link
            className="text-white focus:bg-transparent   visited:bg-transparent target:bg-transparent bg-transparent active:bg-transparent  text-lg uppercase transition-all ease-linear duration-100 text-center 	  hover:font-bold"
            href={"/article-list"}
          >
            Login
          </Link>
        </p>
      </Menu.Item>
      <Menu.Item
        className="text-white focus:bg-transparent  visited:bg-transparent target:bg-transparent bg-transparent active:bg-transparent text-lg text-center w-32  uppercase hove hover:font-bold "
        key="pages"
      >
        <p className="">
          <Link
            className="text-white focus:bg-transparent   visited:bg-transparent target:bg-transparent bg-transparent active:bg-transparent  text-lg uppercase transition-all ease-linear duration-100 text-center 	  hover:font-bold"
            href={`/article-details`}
          >
            Register{" "}
          </Link>
        </p>
      </Menu.Item>
      <Menu.Item
        className="text-white text-lg focus:bg-transparent  visited:bg-transparent target:bg-transparent bg-transparent active:bg-transparent  text-center uppercase hove  hover:font-bold"
        key="pages"
      >
        <p>
          {" "}
          <Link
            className="text-white focus:bg-transparent   visited:bg-transparent target:bg-transparent bg-transparent active:bg-transparent  text-lg uppercase transition-all ease-linear duration-100 text-center 	  hover:font-bold"
            href={`/article-details`}
          >
            Pricing{" "}
          </Link>
        </p>
      </Menu.Item>
      <Menu.Item
        className="text-white text-lg text-center focus:bg-transparent  visited:bg-transparent target:bg-transparent bg-transparent active:bg-transparent   uppercase hove hover:font-bold  "
        key="pages"
      >
        <p>
          {" "}
          <Link
            className="text-white focus:bg-transparent   visited:bg-transparent target:bg-transparent bg-transparent active:bg-transparent  text-lg uppercase transition-all ease-linear duration-100 text-center 	  hover:font-bold"
            href={`/article-details`}
          >
            faq{" "}
          </Link>
        </p>
      </Menu.Item>
    </Menu>
  );
  const [links, setLinks] = useState([
    {
      id: 1,

      title: "home",
      href: "/",
      ontToggle: false,
      hrefItems: [],
    },
    {
      id: 2,

      title: "about us",
      href: "/about",
      ontToggle: false,
      hrefItems: [],
    },
    {
      id: 3,
      title: "portfolio",
      href: "/portfolio",
      items: menu,
      hrefItems: ["/portfolio-list", "/portfolio-details"],
      ontToggle: false,
    },
    {
      id: 4,
      title: "article",
      href: "/article",
      items: article,
      hrefItems: ["/article-list", "/article-details"],

      ontToggle: false,
    },
    {
      id: 6,
      title: "pages",
      href: "/pages",
      items: pages,
      ontToggle: false,
      hrefItems: ["login", "register"],
    },
    {
      id: 5,
      title: "contact",
      href: "/contact",
      ontToggle: false,
      hrefItems: [],
    },
  ]);





  const handleComplete = (id: number) => {
    setLinks(
      links.map((link) => {
        if (link.id === id) {
          return {
            ...link,
            ontToggle: !link.ontToggle,
          };
        }
        return link;
      })
    );
  };


  

  return (
    <header
      className={`sticky top-0 w-full shadow-md   transition-all duration-300 ease-out bg-[#0D0908] py-4 px-5 md:px-20 z-10 `}
    >
      <div className="flex flex-wrap   justify-between">
        <div>
          <Link href={`/`}>
            {" "}
            <Image width={30} height={30} src={`/../public/Logo.png`} alt="" />
          </Link>
        </div>
        <ul className=" lg:flex  hidden  lg:w-[70%] 2xl:w-[50%] justify-between  w-full relative  ">
          {links.map((link, i) =>
            !link.items ? (
              <div
                key={i}
                className="text-white uppercase     hover:font-semibold relative"
              >
                <div className="w-full">
                  <span
                    className={`${isActive(
                      link.href
                    )} after:content-['']  after:w-full after:h-[.4rem] after:rounded  after:bg-yellow-300 after:absolute  after:top-10 `}
                  ></span>
                  <div>
                    <Link className="text-lg " href={`${link.href}`}>
                      {link.title}
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div key={link.id}>
                <Dropdown
                  className="bg-transparent dropdown-menu  flex items-center hover:font-semibold  text-white uppercase align-middle  border-none hover:bg-black"
                  overlay={link.items}
                  placement="bottom"
                  trigger={["hover"]}
                >
                  <div className="text-lg cursor-pointer uppercase relative   ">
                    <span   className={`after:w-full after:h-[.4rem] after:rounded hidden ${isActive(link.href)}
                       after:bg-yellow-300 after:right-1.5 after:absolute  after:top-10  `}></span>
                    <span
                    
                    >
                      {" "}
                      {link.title}
                    </span>
                    <AiFillCaretDown
                      size={12}
                      className="text-white  align-middle ml-1 "
                    />
                  </div>
                </Dropdown>
              </div>
            )
          )}
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
            open={open}
          >
            <ul className=" text-center flex-col  flex items-center justify-center space-y-4">
              {links.map((link, i) => {
                return !link.items ? (
                  <Link
                    href={link.href}
                    key={link.href}
                    onClick={() => setOpen(false)}
                  >
                    <div className="uppercase text-white text-2xl hover:font-bold ease-linear transition  duration-300">
                      {link.title}
                    </div>
                  </Link>
                ) : (
                  <div
                    key={link.title}
                    className="collapsible-menu-container  relative"
                  >
                    <button
                      onClick={() => handleComplete(link.id)}
                      className=" uppercase text-white text-2xl relative  text-center "
                    >
                      <span className="absolute left-[110%] top-[30%]    ">
                        {" "}
                        <AiFillCaretDown
                          size={12}
                          className="text-white  align-midd   "
                        />
                      </span>
                      <span className="hover:font-bold ease-linear duration-300 transition-all    ">
                        {" "}
                        {link.title}
                      </span>
                    </button>

                    <ul
                      className={`collapsible-menu ${
                        link.ontToggle ? "open" : ""
                      }`}
                    >
                      <div className="active:bg-transparent  ">
                        <div className="collapsible-menu-link flex mr-5   ">
                          <> {link.items}</>
                        </div>
                      </div>
                    </ul>
                  </div>
                );
              })}
            </ul>
          </Drawer>
        </div>
      </div>
    </header>
  );
};

export default HeaderPage;
