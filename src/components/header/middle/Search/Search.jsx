/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { MdClose } from 'react-icons/md';
import "../../../../assets/styles/Search.scss";
import { FaPlus, FaMinus, FaShoppingCart } from 'react-icons/fa';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { selectProducts } from '../../../../toolkit/Slices/ProductsSlice'
import { useSelector } from 'react-redux';





const Search = ({ setShowSearch }) => {
    const products = useSelector(selectProducts);
    console.log(products)
    const Navigate = useNavigate();
    const [records, setRecords] = useState([])
    console.log(records)

    // useEffect(() => {
    //     fetch('https://khawarsultan.github.io/Jsdvstore-Api/api')
    //         .then(response => response.json())
    //         .then(data => {
    //             let combinedData = [];
    //             data.map(category => {
    //                 const products = category.products;
    //                 combinedData.push(...products);
    //             });

    //             setData(combinedData);
    //             setRecords(combinedData);
    //         })
    //         .catch(err => console.log(err));
    // }, []);

    const Filter = (event) => {
        const searchText = event.target.value.toLowerCase();
        if (searchText.trim() == '') {
            setRecords([]);
        } else {
            setRecords(products.filter(product => product.name.toLowerCase().includes(searchText)))
        }
    }
    // const findCategoryIdByProductId = (producttitle) => {
    //     console.log("product title: ", producttitle);
    //     fetch('https://khawarsultan.github.io/Jsdvstore-Api/api')
    //         .then(response => response.json())
    //         .then(data => {
    //             data.map((data) => {
    //                 data.products.forEach(product => {
    //                     if (product.title === producttitle) {
    //                         Navigate("/category/" + data.id + "/Single-Product/" + product.id);
    //                     }
    //                 });
    //             });
    //         });
    // };

    return (

        <div className="search-modal ">
            <div className="form-field">
                <input type="text" autoFocus placeholder="Search Products"
                    onChange={Filter}
                />
                <MdClose className=' cursor-pointer' onClick={() => { setShowSearch(false); }} />
            </div>
            <div className='pointer scrollable-div-search w-11/12 m-auto my-10'>

                {records.map((product) => (
                    <div key={product._id}    >
                        <div className="flex items-center gap-5 py-3  hover:bg-gray-100 transition-all ease-in-out cursor-pointer"
                            onClick={() => {
                                Navigate(`/viewsingleproduct/${product?._id}`);
                                setShowSearch(false);
                            }}
                        >
                            <div className="">
                                <img src={`https://ucarecdn.com/${product?.image}/`} className=' mix-blend-multiply p-4  ' width={100} alt="" />
                            </div>
                            <div className="">
                                <div className=' line-clamp-1 w-2/4'>
                                    <span style={{ fontSize: '18px' }}> <b>  {product.name}  </b>    </span>
                                </div>
                                <div className='para-dots-desc'>
                                    <span style={{ fontSize: '16px' }}> {product.description}    </span>
                                </div>
                            </div>
                        </div>
                        <hr />
                    </div>
                ))}


            </div>

        </div>



    );
};

export default Search;
// Perform search and filter the JSON data based on the search query
// const searchResults = data.filter((category) =>
//     category.products.title.toLowerCase().includes(searchQuery.toLowerCase())
// );
// let { data } = useFetch(`https://khawarsultan.github.io/Jsdvstore-Api/api/products?populate=*&filters[title][$contains]=${query}`);
// const [query, setQuery] = useState("");
// const onChange = (e) => {
//     setQuery(e.target.value);
// };
// let { data } = useFetch(`/api/products?populate=*&filters[title][$contains]=${query}`);
// console.log("Search Data . . . : ", data)
