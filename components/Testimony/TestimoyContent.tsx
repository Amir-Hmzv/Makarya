import { Avatar } from 'antd'
import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import avt from "../../public/testimony/photo_2020-12-02_09-36-16.jpg";

const TestimoyContent = () => {
  return (
<div className=" border-yellow-400  w-[80%] mx-auto px-10  ">
                <div className="">
                <div className="bg-black w-[100%] flex items-center px-36 justify-center py-4 space-x-2 ">
              <span>
                <AiFillStar className="text-yellow-400" />
              </span>
              <span>
                <AiFillStar className="text-yellow-400" />
              </span>
              <span>
                <AiFillStar className="text-yellow-400" />
              </span>
              <span>
                <AiFillStar className="text-yellow-400" />
              </span>
              <span>
                <AiFillStar className="text-yellow-400" />
              </span>
            </div>
            <div className="py-4  w-full border-l border-r border-b border-yellow-400 rounded-md  ">
              <Avatar src={avt.src} size={64} />
              <h2 className="mt-2 text-xl font-bold">Amir hmzv</h2>
              <span className="text-yellow-500 mb-1">(spark)</span>
              <p className="w-[300px] text-center flex justify-center items-center mt-2 mx-auto text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempore fugiat, nulla molestiae assumenda 
              
              </p>
            </div>
                </div>
          </div>  )
}

export default TestimoyContent