/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
// import EditProduct from './EditProduct';
import { useContext, useEffect, useState, useRef } from 'react'
import { Context } from "../../context/AppContext";
import { useSelector } from 'react-redux';
import { selectProducts } from '../../toolkit/Slices/ProductsSlice'
import { selectCategories } from '../../toolkit/Slices/CategoriesSlice'
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaFire } from "react-icons/fa";
import { MdDiscount } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { selectbestSelling } from '../../toolkit/Slices/BestSellingSlice';
import { selectdiscount } from '../../toolkit/Slices/DicountSlice';
import { setbestSelling, removeBestSelling } from '../../toolkit/Slices/BestSellingSlice';
import { setdiscount } from '../../toolkit/Slices/DicountSlice';
import toast from 'react-hot-toast';
import { IoClose } from "react-icons/io5";
import { IoSaveOutline } from "react-icons/io5";
import { CiSaveUp2 } from "react-icons/ci";
import { MdSaveAlt } from "react-icons/md";
import { IoImagesOutline } from "react-icons/io5";
import { SlOptions } from "react-icons/sl";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { CiDiscount1 } from "react-icons/ci";
import { MdOutlineSell } from "react-icons/md";
import { MdDownload } from "react-icons/md";
import { selectExchangeRate } from '../../toolkit/Slices/CompareSlice';

const itemsPerPage = 10;
const BodyTableProduct = () => {
    const ExchangeRate = useSelector(selectExchangeRate);


    const bestSelling = useSelector(selectbestSelling);
    const discount = useSelector(selectdiscount);

    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const { setThankyou } = useContext(Context)
    const { searchText } = useContext(Context);
    const [records, setRecords] = useState([])


    const products = useSelector(selectProducts);
    const categories = useSelector(selectCategories);


    const [currentPage, setCurrentPage] = useState(1);
    const reversedProducts = [...products].reverse();

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = reversedProducts.slice(indexOfFirstItem, indexOfLastItem);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        if (searchText.trim() == '') {
            setRecords(currentItems);
        } else {
            setRecords(products.filter(product => product.name.toLowerCase().includes(searchText)))
        }
    }, [searchText || currentPage]);






    const deleteProduct = (id, name) => {

        if (window.confirm(`Are you sure you want to delete ${name}`)) {
            console.log("Entering");
            fetch("http://localhost:5000/api/deleteProducts", {
                method: "POST",
                crossDomain: true,
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify({
                    productid: id,
                }),
            })
                .then((res) => {
                    if (res.ok) {
                        return res.json();
                    } else {
                        throw new Error(`Failed to delete product: ${res.status}`);
                    }
                })
                .then((data) => {
                    if (data.status === "Ok") {
                        const words = name.split(' ');
                        const firstThreeWords = words.slice(0, 3).join(' ');
                        Swal.fire(firstThreeWords, "Successfully deleted");
                        setRecords((products) => products.filter(product => product._id !== id));
                        setThankyou(true)
                    } else {
                        Swal.fire("Deletion Failed", "error");
                    }
                })
                .catch((error) => {
                    console.error("Error deleting product:", error);
                });
        }
    };
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [discountedProducts, setDiscountedProducts] = useState([]);

    const handleAddToDiscount = (id, name, desc, price, imageurl, quantity) => {
        const productData = {
            id: id,
            name: name,
            desc: desc,
            price: price,
            imageurl: imageurl,
            quantity: quantity,
        };
        setDiscountedProducts((prevDiscountedProducts) => [productData]);


    };
    const [discountedPriceInput, setDiscountedPriceInput] = useState('');
    const isSaveButtonDisabled = discountedPriceInput.trim() === '';

    const calculateDiscountPercentage = () => {
        const originalPrice = discountedProducts[0]?.price || 0;
        const discountedPrice = parseFloat(discountedPriceInput) || 0;
        if (originalPrice === 0) {
            return 'N/A';
        }
        const discountPercentage = ((originalPrice - discountedPrice) / originalPrice) * 100;
        return discountPercentage.toFixed(0);
    };

    const handleModal = () => {
        setIsModalOpen(!isModalOpen);
        setDiscountedPriceInput('')
    }



    const handleAddToBestSell = (id, name, desc, price, imageurl, quantity) => {
        const productData = {
            id: id,
            name: name,
            desc: desc,
            price: price,
            imageurl: imageurl,
            quantity: quantity,
        };

        const isProductinDiscount = discount.some(item => item?.id === productData?.id);
        { isProductinDiscount && dispatch(removeBestSelling(productData?.id)); }


        const isProductInBestSelling = bestSelling.some(item => item?.id === productData.id);
        if (isProductInBestSelling) {
            toast.error(<span style={{ fontWeight: 'bold' }}>Product already in Best Selling Products</span>);
        } else {
            toast.success(<span style={{ fontWeight: 'bold' }}>Added to Best Selling Products</span>);
            { !isProductinDiscount && dispatch(setbestSelling([productData])) }
        }
    };
    const handleSave = (id, name, desc, price, imageurl, quantity) => {
        const productData = {
            id: id,
            name: name,
            desc: desc,
            price: price,
            imageurl: imageurl,
            quantity: quantity,
            inputDescount: discountedPriceInput,
        };
        // const updatedBestSelling = bestSelling.filter(item => item?.id !== productData.id);
        const isProductInBestSelling = bestSelling.some(item => item?.id === productData?.id);
        { isProductInBestSelling && dispatch(removeBestSelling(productData?.id)); }


        const isProductInDiscount = discount.some(item => item?.id === productData?.id);
        if (isProductInDiscount) {
            toast.error(<span style={{ fontWeight: 'bold' }}>Product already in Discounted Products</span>);
        } else {
            toast.success(<span style={{ fontWeight: 'bold' }}>Added to Discounted Products</span>);
            dispatch(setdiscount([productData]));
        }
        setIsModalOpen(!isModalOpen);

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
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">


            {
                isModalOpen && (
                    <>
                        <div className={`fixed inset-0 z-50 bg-black/50 ${isModalOpen ? 'fadeIn' : 'fadeOut'}`} >
                            <div className="flex items-center justify-center h-2/3">
                                
                                <div className="bg-white p-6 rounded-2xl shadow-lg sm:w-1/3 w-11/12 transition-opacity ease-in-out duration-1000">
                                  
                                    <div className=' flex justify-end'>
                                        <button className='p-2    rounded-full  bg-gray-200  hover:bg-gray-30' onClick={handleModal}>
                                            <IoClose size={18} />
                                        </button>
                                    </div>
                                    <h2 className="text-xl   font-semibold  mb-3">Enter Discount Price of Product</h2>
                                    <h2 className="text-sm mb-4 text-gray-600">{discountedProducts[0]?.name}</h2>
                                    <div className='flex gap-3 items-center my-6'>
                                        <input
                                            type="number"
                                            className='py-2 search-input-header outline-none px-2 rounded-full border'
                                            autoFocus
                                            placeholder='Discounted price'
                                            value={discountedPriceInput}
                                            onChange={(event) => {
                                                const inputValue = parseFloat(event.target.value);
                                                if (!isNaN(inputValue) && inputValue <= discountedProducts[0]?.price) {
                                                    setDiscountedPriceInput(inputValue.toString());
                                                }
                                            }
                                            }

                                        />

                                        <p className=' text-lg  font-bold  '>Price: <span >$</span><span className=' text-xl'> { discountedProducts[0]?.price}</span></p>
                                        <p className='text-lg  font-bold  '>
                                            Discount : {calculateDiscountPercentage()}%
                                        </p>
                                    </div>
                                    <div className="flex justify-start gap-2 items-center">
                                       
                                        <button onClick={() => {
                                            handleSave(
                                                discountedProducts[0]?.id,
                                                discountedProducts[0]?.name,
                                                discountedProducts[0]?.desc,
                                                discountedProducts[0]?.price,
                                                discountedProducts[0]?.imageurl,
                                                discountedPriceInput,
                                            );
                                        }} disabled={isSaveButtonDisabled} className='  px-5 py-2 flex items-center justify-center gap-1    rounded-full bg-blue-500 font-bold text-white hover:bg-blue-600'>
                                            <MdDownload  /> Save
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>

                )
            }
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    
                    <th scope="col" className="p-4">

                    </th>
                    <th scope="col" className="p-4">
                        Product
                    </th>
                    <th scope="col" className="p-4">
                        Category
                    </th>
                    <th scope="col" className="p-4">
                        Stock
                    </th>
                    <th scope="col" className="p-4">
                        price
                    </th>

                    <th scope="col" className="p-4">
                        Product Description
                    </th>

                    <th scope="col" className="p-4">
                        Actions
                    </th>
                </tr>

            </thead>

            <tbody>

               




                {records?.map((product) => (
                    <>
                        <tr key={product?._id} className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 ">
                            
                            <td scope="row" className="px-4 py-3 w-[10%] font-medium text-gray-900 dark:text-white ">
                                <div className="flex items-center    ">
                                    <img
                                        src={`https://ucarecdn.com/${product?.image[0]}/`}
                                        alt="iMac Front Image"
                                        className=" w-[70%] mix-blend-multiply "
                                        style={{ filter: ' contrast(1.1) ' }}
                                    />
                                </div>
                            </td>
                            <td scope="row" className="px-4 py-3  w-48  font-medium text-gray-900 dark:text-white ">
                                <div className="flex items-center mr-3 line-clamp-1  ">
                                    <p className='line-clamp-1 text-md'> <b> {product.name}</b></p>
                                </div>
                            </td>
                            <td className="px-4 py-3  ">
                                <span className="bg-primary-100   text-primary-800 text-md  px-2 py-1  whitespace-nowrap font-bold   rounded-full dark:bg-primary-900 dark:text-primary-300">
                                    {categories?.find(category => category?._id === product?.category)?.name}
                                </span>
                            </td>
                            <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <div className="flex items-center">
                                    <div className="h-4 w-4 rounded-full inline-block mr-2 bg-red-700" />
                                    {product.stock}
                                </div>
                            </td>
                            <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <div className="flex items-center">
                                    <span className="bg-green-100 mr-2  text-green-800 text-xs font-medium flex justify-center items-center  h-4 w-4   rounded-full dark:bg-green-900 dark:text-green-300">
                                        {ExchangeRate ? ExchangeRate.code : '$'} 
                                    </span>
                                    <span className=' text-sm'></span><span className=' text-xl'> </span>
                                    {/* {product.price} */}
                                     {ExchangeRate ? (ExchangeRate.value * product?.price).toFixed(0) : product?.price}
                                </div>

                            </td>



                            <td className="px-4 py-3  "><div className=' line-clamp-1  text-gray-400 tracking-tight  '>{product.description}</div></td>
                            <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">


                                <div className="flex items-center space-x-4">
                                    <div className=' space-y-2'>


                                        <div className="relative inline-block text-left" ref={dropdownRef} >
                                            <div>
                                                <button
                                                   
                                                    onClick={() => handleButtonClick(product._id)}
                                                    className={`inline-flex justify-center p-2 rounded-md ${showActions[product._id] && "bg-gray-200"
                                                        } border hover:bg-gray-200`}
                                                >
                                                    <SlOptions />
                                                </button>
                                            </div>
                                            {showActions[product._id] &&  (
                                                <div
                                                    ref={dropdownRef}
                                                    className="origin-top-right z-30  absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                                    role="menu"
                                                    aria-orientation="vertical"
                                                    aria-labelledby="options-menu"
                                                    
                                                >
                                                    <div className="py-1" role="none">
                                                        <button
                                                            className="w-full text-left gap-2 items-center flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                                            role="menuitem"
                                                            onClick={() => Navigate(`/edit/${product?._id}`)}
                                                        >
                                                            <FaRegEdit />   Edit
                                                        </button>
                                                        <button
                                                            className="w-full text-left gap-2 items-center flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                                            role="menuitem"
                                                            onClick={() => deleteProduct(product._id, product.name)}
                                                        >
                                                            <AiOutlineDelete />  Delete
                                                        </button>
                                                        <button
                                                            className="w-full text-left gap-2 items-center flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                                            role="menuitem"
                                                            onClick={() => {
                                                                handleAddToBestSell(
                                                                    product?._id,
                                                                    product?.name,
                                                                    product?.description,
                                                                    product?.price,
                                                                    product?.image,
                                                                    1
                                                                );
                                                                // setwishlistTragetid(product._id);
                                                            }}
                                                        >
                                                            <MdOutlineSell /> Best Sell
                                                        </button>
                                                        <button
                                                            className="w-full  text-left gap-2 items-center flex px-4 py-2  text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                                            role="menuitem"
                                                            onClick={() => {
                                                                handleAddToDiscount(
                                                                    product?._id,
                                                                    product?.name,
                                                                    product?.description,
                                                                    product?.price,
                                                                    product?.image,
                                                                    1
                                                                );
                                                                handleModal();
                                                            }}
                                                        >
                                                            <CiDiscount1 stroke-width={0.4} /> Discount
                                                        </button>
                                                    </div>
                                                </div>
                                            )}
                                        </div>


                                     






                                    </div>

                                </div>

                            </td>

                        </tr >
                    </>
                ))}

                {/* Pagination Controls */}
                <tr>
                    <td colSpan="8" className=" py-3 text-center">
                        <nav className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4">
                            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                Showing
                                <span className="font-semibold text-gray-900 dark:text-white mx-1">
                                    {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, products.length)}
                                </span>
                                of
                                <span className="font-semibold text-gray-900 dark:text-white mx-1">
                                    {products.length}
                                </span>
                            </span>
                            <ul className="inline-flex items-stretch -space-x-px">
                                <li>
                                    <button
                                        onClick={() => paginate(currentPage - 1)}
                                        className="flex items-center justify-center h-full py-1.5 px-2 ml-0 text-gray-500 bg-white rounded-full border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                        disabled={currentPage === 1}
                                    >
                                        <span className="sr-only">Previous</span>
                                        <svg
                                            className="w-5 h-5"
                                            aria-hidden="true"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </li>
                                {/* ... Other page buttons */}
                                {/* Example page button */}
                                <li>
                                    <button
                                        aria-current="page"
                                        className="flex items-center justify-center text-sm z-10 py-2 px-4 mx-3 rounded-full  leading-tight text-primary-600 bg-primary-50 border border-primary-300   dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                                    >
                                        {currentPage}
                                    </button>
                                </li>
                                {/* ... Other page buttons */}
                                <li>
                                    <button
                                        onClick={() => paginate(currentPage + 1)}
                                        className="flex items-center justify-center h-full py-1.5 px-2 ml-0 text-gray-500 bg-white rounded-full border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                        disabled={indexOfLastItem >= products.length}
                                    >
                                        <span className="sr-only">Next</span>
                                        <svg
                                            className="w-5 h-5"
                                            aria-hidden="true"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </td>
                </tr>
            </tbody>

        </table >


    )
}

export default BodyTableProduct

