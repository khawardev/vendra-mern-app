/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from 'react';
import BodyTableProduct from './BodyTableProduct';
import CreateCategoryButton from './CreateCategoryButton';
import CreateProductButton from './CreateProductButton';
import FooterTableProduct from './FooterTableProduct';
import HeaderTableProduct from './HeaderTableProduct';
import SearchProduct from './SearchProduct';
import { FaRegEye } from "react-icons/fa6";
import BodyTableCategory from './BodyTableCategory';
import { IoMenuOutline } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { SlOptions } from "react-icons/sl";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { CiDiscount1 } from "react-icons/ci";
import { MdOutlineSell } from "react-icons/md";
import { SlOptionsVertical } from "react-icons/sl";
import { LuContact } from "react-icons/lu";
import { CgArrowsExchangeAlt } from "react-icons/cg";

import { FaListUl } from "react-icons/fa6";

const TableProduct = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const Navigate = useNavigate();

    const toggleProduct = () => {
        setDropdownVisible(!isDropdownVisible);
    };




    const [showActions, setShowActions] = useState(false);
    const dropdownRef = useRef(null);

    const handleButtonClick = (productId) => {
        setShowActions((prev) => ({
            ...prev,
            [productId]: !prev[productId],
        }));
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setShowActions(false);
        }
    };
    return (
        <div>
            <section className=" dark:bg-gray-900 p-3 sm:p-5 antialiased">
                <p className=' font-bold text-yellow-500   text-6xl  text-center my-12 '>Vendor Panel </p>
                <div className="mx-auto max-w-screen-2xl px-4 lg:px-12">
                    <div className="  relative   overflow-hidden">
                        <div className="  flex flex-col md:flex-row items-stretch md:items-center md:space-x-3 space-y-3 md:space-y-0 justify-between mx-4 py-8  dark:border-gray-700">
                            <div className='w-full  flex items-center  gap-3   '>

                                {/* <button
                                    onClick={toggleProduct}
                                    type="button"
                                    id="createProductButton"
                                    data-modal-toggle="createProductModal"
                                    className="flex items-center justify-center gap-2   bg-blue-500 text-white font-bold   focus:ring-2 focus:ring-primary-300  transition-all ease-in rounded-full text-sm px-4 py-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 focus:outline-none dark:focus:ring-primary-800"
                                >
                                    <FaCircle size={12} />
                                    {isDropdownVisible ? 'View Products' : 'View Category'}
                                </button> */}

                            </div>

                            <div className="w-full ">
                                <SearchProduct />
                            </div>

                            <div className="w-full flex justify-end items-center  gap-3  ">
                                <div className="relative inline-block text-left" ref={dropdownRef} >
                                    <div>
                                        <button

                                            onClick={() => handleButtonClick()}
                                            className={`inline-flex justify-center p-2 rounded-md ${showActions && "bg-gray-200"
                                                } border hover:bg-gray-200 bg-gray-100`}
                                        >
                                            <FaListUl />
                                        </button>
                                    </div>
                                    {showActions && (
                                        <div
                                            ref={dropdownRef}
                                            className="origin-top-right z-30  absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                            role="menu"
                                            aria-orientation="vertical"
                                            aria-labelledby="options-menu"

                                        >
                                            <div className="py-1" role="none">

                                                <CreateProductButton />
                                                {/* <CreateCategoryButton /> */}

                                                {/* <button
                                                    className="w-full text-left gap-2 items-center flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                                    role="menuitem"
                                                    onClick={() => Navigate("/OrderManage")}
                                                >
                                                    <MdOutlineSell /> Order Manage
                                                </button> */}
                                                <button
                                                    className="w-full  text-left gap-2 items-center flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                                    role="menuitem"
                                                    onClick={() => Navigate("/ContactManage")}
                                                >
                                                    <LuContact /> Contact Manage
                                                </button>
                                                {/* <button
                                                    onClick={toggleProduct}
                                                    type="button"
                                                    id="createProductButton"
                                                    data-modal-toggle="createProductModal"
                                                    className="w-full  text-left gap-2 items-center flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                                >
                                                    <CgArrowsExchangeAlt size={20} />
                                                    {isDropdownVisible ? 'View Products' : 'View Category'}
                                                </button> */}
                                            </div>
                                        </div>
                                    )}
                                </div>

                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            {isDropdownVisible ? <BodyTableCategory /> : <BodyTableProduct />}
                        </div>
                        {/* <FooterTableProduct /> */}
                    </div>
                </div>
            </section>

        </div >
    )
}

export default TableProduct