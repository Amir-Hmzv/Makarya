import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillFacebook,
} from "react-icons/ai";
import { FaWhatsappSquare, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-black">
        <div className=" grid  place-items-center w-[90%] mx-auto grid-cols-1  md:grid-cols-4">
          <div className="text-white">
            <div className="py-12 flex justify-center items-center flex-col md:block">
              <Link href={`/`}>
                {" "}
                <Image
                  width={36}
                  height={36}
                  src={`/../public/Logo.png`}
                  alt=""
                />
              </Link>
              <p className="text-white mt-5 text-sm md:w-[220px] md:mt-2 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
                neque. Fugiat quas
              </p>
              <p className="text-yellow-400 text-sm pt-6">
                dolor sit amet consectetur adipisicing elit. Ipsum, neque.
                Fugiat quas
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center mb-10 space-y-2 py-12">
            <div>
              <Link
                className="text-white hover:font-bold duration-200 transition-all ease-out"
                href={"/"}
              >
                Home
              </Link>
            </div>
            <div>
              <Link
                className="text-white hover:font-bold duration-200 transition-all ease-out"
                href={"/about"}
              >
                About us
              </Link>
            </div>
            <div className="flex flex-col items-center pt-3 ">
              <div className="text-white mb-2">Portfolio </div>
              <div className="relative left-8">
                <div className="">
                  {" "}
                  <Link
                    className="text-gray-300  hover:font-bold duration-200 transition-all ease-out "
                    href={"/portfolio/portfolio-list"}
                  >
                    Portfolio list
                  </Link>
                </div>
                <div className="">
                  <Link
                    className="text-gray-300   hover:font-bold duration-200 transition-all ease-out"
                    href={"/portfolio/portfolio-details"}
                  >
                    Portfolio details
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center pt-3 ">
              <div className="text-white mb-2">Article </div>
              <div className="relative left-8">
                <div className="">
                  {" "}
                  <Link
                    className="text-gray-300  hover:font-bold duration-200 transition-all ease-out "
                    href={"/article/article-list"}
                  >
                    Article list
                  </Link>
                </div>
                <div className="">
                  <Link
                    className="text-gray-300   hover:font-bold duration-200 transition-all ease-out"
                    href={"/article/article-details"}
                  >
                    Article details
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="text- flex flex-col items-center mb-10 space-y-2 py-16 ">
            <div className="flex flex-col items-center pt-3 ">
              <div className="text-white mb-2">Pages </div>
              <div className="relative left-8 space-y-2">
                <div className="">
                  {" "}
                  <Link
                    className="text-gray-300  hover:font-bold duration-200 transition-all ease-out "
                    href={"/pages/register"}
                  >
                    Register
                  </Link>
                </div>
                <div className="">
                  {" "}
                  <Link
                    className="text-gray-300  hover:font-bold duration-200 transition-all ease-out "
                    href={"/pages/faq"}
                  >
                    Faq
                  </Link>
                </div>
                <div className="">
                  {" "}
                  <Link
                    className="text-gray-300  hover:font-bold duration-200 transition-all ease-out "
                    href={"/pages/pricing"}
                  >
                    Pricing
                  </Link>
                </div>
                <div className="">
                  <Link
                    className="text-gray-300   hover:font-bold duration-200 transition-all ease-out"
                    href={"/pages/login"}
                  >
                    Login
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <Link
                className="text-white hover:font-bold duration-200 transition-all ease-out"
                href={"/contact"}
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="my-4">
            <h1 className="text-2xl text-white text-center  font-bold">Follow us on :</h1>

            <div className="mt-5  space-x-2 px-5 ">
              <div className=" grid grid-cols-6 md:grid-cols-3 gap-3">
                <div className="cursor-pointer">
                  <AiFillLinkedin size={38} className="text-yellow-400" />
                </div>
                <div className="cursor-pointer">
                  <AiFillInstagram size={38} className="text-yellow-400" />
                </div>
                <div className="cursor-pointer">
                  <AiFillTwitterSquare size={38} className="text-yellow-400" />
                </div>
                <div className="cursor-pointer">
                  <AiFillFacebook size={38} className="text-yellow-400" />
                </div>
                <div className="cursor-pointer">
                  <FaWhatsappSquare size={38} className="text-yellow-400" />
                </div>
                <div className="cursor-pointer">
                  <FaTelegram size={38} className="text-yellow-400" />
                </div>
              </div>
            </div>
          </div>
        
        </div>
        <div className="resreve bg-yellow-400 text-white p-2 text-center">2018 Makarya all rights reserved</div>
      </div>
    </>
  );
};

export default Footer;
