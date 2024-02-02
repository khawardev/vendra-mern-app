/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from 'react'
import { Context } from "../../context/AppContext";
import { useSelector } from 'react-redux';
import { selectProducts } from '../../toolkit/Slices/ProductsSlice'
import { useParams } from 'react-router-dom';
import { selectCategories } from '../../toolkit/Slices/CategoriesSlice'

const EditProduct = () => {
    const products = useSelector(selectProducts);
    const { productid } = useParams();
    const [SingleProduct, setSingleProduct] = useState()

    const categories = useSelector(selectCategories);

    const [productName, setProductName] = useState();
    const [productDescription, setProductDescription] = useState();
    const [productStock, setProductStock] = useState();
    const [productPrice, setProductPrice] = useState();


    useEffect(() => {
        const productsDetails = products?.find(item => item?._id === productid);
        setSingleProduct(productsDetails)
    }, [productid])



    const handleProductNameChange = (e) => {
        setProductName(e.target.value);
    };
    const handleProductDescriptionChange = (e) => {
        setProductDescription(e.target.value);
    };
    const handleProductStockChange = (e) => {
        setProductStock(e.target.value);
    };
    const handleProductPriceChange = (e) => {
        setProductPrice(e.target.value);
    };
    const handleCategoryChange = (e) => {
        const selectedCategoryName = e.target.value;
        console.log(selectedCategoryName)
    };

    useEffect(() => {
        setProductName(SingleProduct?.name);
        setProductDescription(SingleProduct?.description);
        setProductStock(SingleProduct?.stock);
        setProductPrice(SingleProduct?.price);
    }, [SingleProduct]);



    const filteredcategory = categories.filter(categories => categories?._id === SingleProduct?.category);
    console.log(filteredcategory[0]?.name)
    const filteredRelatedProducts = products.filter(products => products?.category === filteredcategory[0]?._id);


    return (
        <form
            className='py-10'>
            <div className="relative m-auto p-4 w-11/12 h-full md:h-auto">
                <div className="relative p-4 bg-white rounded-lg  dark:bg-gray-800 sm:p-5">
                    <h5
                        id="drawer-label"
                        className="items-center mb-16 font-bold     text-4xl   text-center dark:text-gray-400"
                    >
                        Update Product
                    </h5>

                    <div className="grid gap-4 sm:grid-cols-3 sm:gap-6 ">
                        <div className="space-y-4 sm:col-span-2 sm:space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block mb-2 text-sm font-bold   text-gray-900 dark:text-white"
                                >
                                    Product Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Write product name here"
                                    value={productName}
                                    onChange={handleProductNameChange}
                                    required=""
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="description"
                                    className="block mb-2 text-sm font-bold   text-gray-900 dark:text-white"
                                >
                                    Description
                                </label>
                                <div className="w-full border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                                    <div className="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">

                                        <button
                                            type="button"
                                            data-tooltip-target="tooltip-fullscreen"
                                            className="p-2 text-gray-500 rounded cursor-pointer sm:ml-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                                        >

                                            <span className="sr-only">Full screen</span>
                                        </button>
                                        <div
                                            id="tooltip-fullscreen"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-bold   text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                                            data-popper-reference-hidden=""
                                            data-popper-escaped=""
                                            data-popper-placement="bottom"
                                            style={{
                                                position: "absolute",
                                                inset: "0px auto auto 0px",
                                                margin: 0,
                                                transform: "translate3d(0px, 335px, 0px)"
                                            }}
                                        >
                                            Show full screen
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </div>
                                    <div className=" bg-white rounded-b-lg dark:bg-gray-800">
                                        <textarea
                                            id="description"
                                            rows={8}
                                            className=" p-2 block w-full text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                                            required=""
                                            placeholder="Write product description here"
                                            value={productDescription}
                                            onChange={handleProductDescriptionChange}

                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mb-4  ">
                                <span className="block mb-2 text-sm font-bold   text-gray-900 dark:text-white">
                                    Product Images
                                </span>
                                <div className="grid grid-cols-4 gap-4  ">
                                    <div className="relative p-9  bg-gray-100 rounded-lg dark:bg-gray-700">
                                        <div>
                                            {/* <div className=' p-4 border  flex justify-center items-center rounded-xl   cursor-pointer  '>
                                                <img className='mix-blend-multiply ' src={`https://ucarecdn.com/${filteredProduct?.image}/`} alt="" />
                                            </div> */}
                                            <img
                                                className='mix-blend-multiply w-full'
                                                src={`https://ucarecdn.com/${SingleProduct?.image}/`}
                                                alt="imac image"
                                            />
                                            <button
                                                type="button"
                                                className="absolute text-red-600 dark:text-red-500 hover:text-red-500 dark:hover:text-red-400 p-2 bg-red-200 rounded-full left-3 bottom-3"
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
                                                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    {/* <div className="relative p-2 bg-gray-100 rounded-lg dark:bg-gray-700">

                                        <img
                                            src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                                            alt="imac image"
                                        />
                                        <button
                                            type="button"
                                            className="absolute text-red-600 dark:text-red-500 hover:text-red-500 dark:hover:text-red-400 bottom-1 left-1"
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
                                                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <span className="sr-only">Remove image</span>
                                        </button>
                                    </div>
                                    <div className="relative p-2 bg-gray-100 rounded-lg dark:bg-gray-700">

                                        <img
                                            src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png"
                                            alt="imac image"
                                        />
                                        <button
                                            type="button"
                                            className="absolute text-red-600 dark:text-red-500 hover:text-red-500 dark:hover:text-red-400 bottom-1 left-1"
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
                                                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <span className="sr-only">Remove image</span>
                                        </button>
                                    </div>
                                    <div className="relative p-2 bg-gray-100 rounded-lg dark:bg-gray-700">

                                        <img
                                            src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-side-image.png"
                                            alt="imac image"
                                        />
                                        <button
                                            type="button"
                                            className="absolute text-red-600 dark:text-red-500 hover:text-red-500 dark:hover:text-red-400 bottom-1 left-1"
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
                                                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <span className="sr-only">Remove image</span>
                                        </button>
                                    </div> */}
                                </div>

                            </div>


                        </div>
                        <div className="  flex flex-col justify-between ">
                            <div className=" space-y-4 sm:space-y-6">
                                <div>
                                    <label
                                        htmlFor="stock"
                                        className="block mb-2 text-sm font-bold   text-gray-900 dark:text-white  text-start"
                                    >
                                        Stock
                                    </label>
                                    <input
                                        type="number"
                                        name="stock"
                                        id="stock"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Write product stock here"
                                        value={productStock}
                                        onChange={handleProductStockChange}

                                        required=""
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="price"
                                        className="block mb-2 text-sm font-bold   text-gray-900 dark:text-white  text-start"
                                    >
                                        Price
                                    </label>
                                    <input
                                        type="number"
                                        name="price"
                                        id="price"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Write product price here"
                                        value={productPrice}
                                        onChange={handleProductPriceChange}

                                        required=""
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="category"
                                        className="block mb-2 text-sm font-bold   text-gray-900 dark:text-white"
                                    >
                                        Category
                                    </label>
                                    <select onChange={handleCategoryChange} id="category" className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                        <option value={filteredcategory[0]?.id}>
                                            {filteredcategory[0]?.name}
                                        </option>
                                        {categories.map((cat) => (
                                            <option key={cat._id} value={cat._id}>
                                                {cat.name}
                                            </option>
                                        ))}

                                    </select>


                                </div>
                                <div className="flex items-center justify-center w-full">
                                    <label
                                        htmlFor="dropzone-file"
                                        className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                                    >
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <svg
                                                aria-hidden="true"
                                                className="w-10 h-10 mb-3 text-gray-400"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                                />
                                            </svg>
                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                                <span className="font-semibold">Click to upload </span>
                                                or drag and drop
                                            </p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                                SVG, PNG, JPG or GIF (MAX. 800x400px)
                                            </p>
                                        </div>
                                        <input id="dropzone-file" type="file" className="hidden" />
                                    </label>
                                </div>
                            </div>

                            <div className="w-full  flex items-center justify-between gap-3  mt-5 ">
                                <button
                                    type="submit"
                                    className="text-white w-full bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold   rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                    Update product
                                </button>

                            </div>


                        </div>
                    </div>

                </div>
            </div>
        </form>

    )
}

export default EditProduct