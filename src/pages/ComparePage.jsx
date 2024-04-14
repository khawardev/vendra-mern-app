/* eslint-disable no-unused-vars */
import { useSelector, useDispatch } from 'react-redux';
import { addToCompare, removeCompareProduct, selectCompare } from '../toolkit/Slices/CompareSlice';
import { MdClose } from 'react-icons/md';
import { AiOutlineDelete } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";

import CategoryProductsNestedSection from '../containers/HomeContainer/HomeNestedContainer/CategoryProductsNestedSection';
const ComparePage = () => {

    const comparedProducts = useSelector(selectCompare);

    return (
        <>
            {comparedProducts?.length !== 0 ?
                <div className=" py-8 w-11/12 m-auto ">
                    <table className="table-auto border-collapse border  ">
                        <thead>
                            <tr>
                                <th className="border font-bold text-start  px-4 py-2 uppercase"></th>
                                {comparedProducts.map((product, index) => (
                                    <th key={index} className="border text-start px-4 py-2  gap-3"> <span className='flex items-center gap-1'>Remove <AiOutlineDelete /></span>  </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className="border font-bold text-start  px-4 py-2 uppercase">Image</th>
                                {comparedProducts.map((product, index) => (
                                    <th key={index} className="border text-center  justify-center px-4 py-6 w-[22%]    "><img className='mix-blend-multiply rounded-2xl   ' src={`https://ucarecdn.com/${product?.imageurl[0]}/`} alt="" /></th>


                                ))}
                            </tr> <tr>
                                <th className="border font-bold text-start  px-4 py-2 uppercase">Name</th>
                                {comparedProducts.map((product, index) => (
                                    <th key={index} className="border text-start px-4 py-2"><span className=' line-clamp-3 leading-5'>{product.name}</span></th>
                                ))}
                            </tr>
                            <tr>
                                <th className="border font-bold text-start  px-4 py-2 uppercase">Description</th>

                                {comparedProducts.map((product, index) => (
                                    <th key={index} className="border text-start px-4 py-6 text-gray-500 font-normal  leading-5  "><span className=' line-clamp-5'>{product.desc}</span></th>
                                ))}
                            </tr>
                            <tr>
                                <td className="border   px-4 py-2 font-bold uppercase">Price</td>
                                {comparedProducts.map((product, index) => (
                                    <td key={index} className="border   px-4 py-2">${product.price}</td>
                                ))}
                            </tr>
                            <tr>
                                <td className="border   px-4 py-2 font-bold uppercase">Stock</td>
                                {comparedProducts.map((product, index) => (
                                    <td key={index} className="border   px-4 py-2">{product.stock}</td>
                                ))}
                            </tr>
                            <tr>
                                <td className="border   px-4 py-2 font-bold uppercase">Rating</td>
                                {comparedProducts.map((product, index) => (
                                    <td key={index} className="border   px-4 py-2">{product.rating}</td>
                                ))}
                            </tr>
                            <tr>
                                <th className="border font-bold text-start  px-4 py-2 uppercase"></th>
                                {comparedProducts.map((product, index) => (
                                    <th key={index} className="border text-start px-4 py-2  gap-3"> <span className='flex items-center gap-2'>Add to Cart <BsCart2 stroke-width="0.5" /></span>  </th>
                                ))}
                            </tr>
                            {/* Add more rows for other attributes to compare */}
                        </tbody>
                    </table>
                </div> : <CategoryProductsNestedSection name={'Compare'} filteredProducts={[]}  />}

        </>


    )
}

export default ComparePage