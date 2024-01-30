/* eslint-disable no-unused-vars */
import { useState } from 'react';
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
const TableProduct = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const toggleProduct = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    return (
        <div>
            
            <section className=" dark:bg-gray-900 p-3 sm:p-5 antialiased">
                <p className=' font-bold text-6xl  text-center my-12'>Vendor Panel</p>
                <div className="mx-auto max-w-screen-2xl px-4 lg:px-12">

                    <div className="  relative   overflow-hidden">
                        <div className="  flex flex-col md:flex-row items-stretch md:items-center md:space-x-3 space-y-3 md:space-y-0 justify-between mx-4 py-8  dark:border-gray-700">
                            <div className='w-full  flex items-center  gap-3   '>

                                <button
                                    onClick={toggleProduct}
                                    type="button"
                                    id="createProductButton"
                                    data-modal-toggle="createProductModal"
                                    className="flex items-center justify-center gap-2   bg-blue-500 text-white font-bold focus:ring-2 focus:ring-primary-300  transition-all ease-in rounded-full text-sm px-4 py-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 focus:outline-none dark:focus:ring-primary-800"
                                >
                                    <FaCircle size={12} />
                                    {isDropdownVisible ? 'View Products' : 'View Category'}
                                </button>

                            </div>

                            <div className="w-full ">
                                <SearchProduct />
                            </div>

                            <div className="w-full flex justify-end items-center  gap-3  ">
                                <CreateProductButton />
                                <CreateCategoryButton />
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