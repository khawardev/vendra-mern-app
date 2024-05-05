/* eslint-disable no-unused-vars */

import Timmer from "./Timmer";
import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { BsStars } from "react-icons/bs";

import { WiStars } from "react-icons/wi";
import Types from "./Types";
import Gurus from "./Gurus";
import { IoMdArrowForward } from "react-icons/io";

const AshanStepsComp = () => {

    const [inputValue, setInputValue] = useState('');
    const [isExpanded, setIsExpanded] = useState(false);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const toggleInputSize = () => {
        setIsExpanded(!isExpanded);
    };
    return (
        <div className="  p-11  ">
            <div className="flex justify-center items-center my-5 ">
                <section className='flex  justify-center items-center border rounded-full shadow-2xl'>
                    <div className='px-3'>
                        <BsStars size={19} />
                    </div>
                    <input
                        type="text"
                        className="py-4 outline-none border-none "
                        size={65}
                        placeholder="Enter Prompt ..."
                    />
                    {/* <input type="text" className='py-3 outline-none border-none ' size={65} placeholder='Search your favorite product ...' /> */}
                    <button className='py-2 px-4 mr-1 rounded-full  bg-grad    font-bold flex gap-1 items-center'>Shoot <WiStars size={19} /></button>
                </section>
            </div>
            <div className=" flex items-center  gap-6 my-20">
                <div className="w-full ">
                    <Timmer />
                </div>
                <div className="w-full">
                    <Types />
                </div>
            </div>
            <div className=" flex items-center  gap-6 my-20">
                <div className="w-full">
                    <Gurus />
                </div>
                <div className="w-[20%]  ">
                    <button className='cart-button p-[120px] rounded-xl cursor-pointer  text-nowrap w-full justify-center  bg-black  text-white  flex items-center gap-2  text-lg font-bold transition-all ease-in-out'>
                        Submit
                        <span className=' cart-span transition-all ease-in-out transform'>
                            <IoMdArrowForward />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AshanStepsComp;
