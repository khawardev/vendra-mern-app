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

const TableProduct = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const toggleProduct = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    return (
        <div>
            <section className=" dark:bg-gray-900 p-3 sm:p-5 antialiased">
                <p className=' font-bold text-6xl text-yellow-500  text-center my-12'>Admin Panel</p>
                <div className="mx-auto max-w-screen-2xl px-4 lg:px-12">

                    <div className="  relative   overflow-hidden">
                        <div className="  flex flex-col md:flex-row items-stretch md:items-center md:space-x-3 space-y-3 md:space-y-0 justify-between mx-4 py-8  dark:border-gray-700">
                            <div className='w-full  flex items-center  gap-3   '>

                                <button
                                    onClick={toggleProduct}
                                    type="button"
                                    id="createProductButton"
                                    data-modal-toggle="createProductModal"
                                    className="flex items-center justify-center gap-2 text-primary-700 bg-primary-100 hover:bg-primary-200 font-bold focus:ring-2 focus:ring-primary-300  transition-all ease-in rounded-full text-sm px-4 py-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 focus:outline-none dark:focus:ring-primary-800"
                                >
                                    <FaRegEye size={17} />
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
                        <FooterTableProduct />
                    </div>
                </div>
            </section>

            {/* End block */}



            {/* Delete Modal */}
            <div
                id="delete-modal"
                tabIndex={-1}
                className="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
                <div className="relative w-full h-auto max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button
                            type="button"
                            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                            data-modal-toggle="delete-modal"
                        >
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="p-6 text-center">
                            <svg
                                aria-hidden="true"
                                className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                Are you sure you want to delete this product?
                            </h3>
                            <button
                                data-modal-toggle="delete-modal"
                                type="button"
                                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                            >
                                Yes, Im sure
                            </button>
                            <button
                                data-modal-toggle="delete-modal"
                                type="button"
                                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                            >
                                No, cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>



        </div >
    )
}

export default TableProduct