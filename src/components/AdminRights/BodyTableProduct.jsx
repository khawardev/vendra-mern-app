/* eslint-disable react-hooks/exhaustive-deps */
// import EditProduct from './EditProduct';
import { useContext, useEffect, useState } from 'react'
import { Context } from "../../context/AppContext";
import { useSelector } from 'react-redux';
import { selectProducts } from '../../toolkit/Slices/ProductsSlice'
import { selectCategories } from '../../toolkit/Slices/CategoriesSlice'
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaFire } from "react-icons/fa";
import { MdDiscount } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { setbestSelling } from '../../toolkit/Slices/BestSellingSlice';

const itemsPerPage = 10;
const BodyTableProduct = () => {
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const { setThankyou } = useContext(Context)
    const { searchText } = useContext(Context);
    const [records, setRecords] = useState([])
    // const { isHiddenEdit, setisHiddenEdit } = useContext(Context);
    // const [SingleProductId, setSingleProductId] = useState()
    // console.log( SingleProductId)
    
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

    const handleAddToWishList = (id, name, desc, price, imageurl, quantity) => {
        const productData = {
            id: id,
            name: name,
            desc: desc,
            price: price,
            imageurl: imageurl,
            quantity: quantity,
        };
        dispatch(setbestSelling([productData]));
        // setwishlistloading(true);
    };

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



    return (
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">

            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="p-4">
                        <div className="flex items-center">
                            <input
                                id="checkbox-all"
                                type="checkbox"
                                className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label htmlFor="checkbox-all" className="sr-only">
                                checkbox
                            </label>
                        </div>
                    </th>
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
                        <tr key={product?._id}  className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 ">
                            <td className="p-4 w-4">
                                <div className="flex items-center">
                                    <input
                                        id="checkbox-table-search-1"
                                        type="checkbox"
                                        onClick="event.stopPropagation()"
                                        className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        htmlFor="checkbox-table-search-1"
                                        className="sr-only"
                                    >
                                        checkbox
                                    </label>
                                </div>
                            </td>
                            <td scope="row" className="px-4 py-3 w-[10%] font-medium text-gray-900 dark:text-white ">
                                <div className="flex items-center    ">
                                    <img
                                        src={`https://ucarecdn.com/${product?.image}/`}
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
                                <span className="bg-primary-100   text-primary-800 text-md  px-2 py-1  whitespace-nowrap font-bold rounded-full dark:bg-primary-900 dark:text-primary-300">
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
                                    <span className="bg-green-100 mr-1  text-green-800 text-xs font-medium flex justify-center items-center  h-4 w-4   rounded-full dark:bg-green-900 dark:text-green-300">
                                        $
                                    </span>
                                    {product.price}
                                </div>

                            </td>



                            <td className="px-4 py-3  "><div className=' line-clamp-1 '>{product.description}</div></td>
                            <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">


                                <div className="flex items-center space-x-4">
                                    <div className=' space-y-2'>

                                    <button
                                        onClick={() => Navigate(`/edit/${product?._id}`)}
                                        type="button"
                                        data-drawer-target="drawer-update-product"
                                        data-drawer-show="drawer-update-product"
                                        aria-controls="drawer-update-product"
                                        className="py-2 px-3 flex items-center  transition-all ease-in text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                        >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 mr-2 -ml-0.5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                            <path
                                                fillRule="evenodd"
                                                d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Update

                                    </button>

                                    <button
                                        onClick={() => deleteProduct(product._id, product.name)}
                                        type="button"
                                        data-modal-target="delete-modal"
                                        data-modal-toggle="delete-modal"
                                        className="flex items-center transition-all ease-in text-red-700 hover:text-white border border-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                                        >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 mr-2 -ml-0.5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            >
                                            <path
                                                fillRule="evenodd"
                                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                clipRule="evenodd"
                                                />
                                        </svg>
                                        Delete
                                    </button>
                                                </div>
                                    <div className=' space-y-2'>

                                        <button
                                            onClick={() => {
                                                handleAddToWishList(
                                                    product._id,
                                                    product.name,
                                                    product.description,
                                                    product.price,
                                                    product.image,
                                                    1
                                                );
                                                // setwishlistTragetid(product._id);
                                            }}
                                            // onClick={() => deleteProduct(product._id, product.name)}
                                            type="button"
                                            data-modal-target="delete-modal"
                                            data-modal-toggle="delete-modal"
                                            className="py-2 px-3 gap-2 flex items-center  transition-all ease-in text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                                        >
                                            <FaFire/>
                                            
                                             Best Sell
                                        </button>
                                        <button
                                            onClick={() => Navigate(`/edit/${product?._id}`)}
                                            type="button"
                                            data-drawer-target="drawer-update-product"
                                            data-drawer-show="drawer-update-product"
                                            aria-controls="drawer-update-product"
                                            className="flex items-center gap-2 transition-all ease-in text-green-700 hover:text-white border border-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"

                                            // className="py-2 px-3 gap-2 flex items-center  transition-all ease-in text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                        >
                                            <MdDiscount />
                                            Discount

                                        </button>
                                    </div>

                                </div>

                            </td>

                        </tr>
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
        </table>


    )
}

export default BodyTableProduct