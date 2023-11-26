/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectProducts } from '../../../toolkit/Slices/ProductsSlice'

const CategoriesNested = ({ category }) => {
  const Navigate = useNavigate();
  const products = useSelector(selectProducts);
  const filteredProducts = products.filter(product => product?.category === category._id);


  return (
    <>
      

      <div className='carouselItem select-none  flex-col justify-center items-center   ' onClick={() => Navigate(`/viewcategoryproducts/${category?._id}`)}>
        <div className='p-8  hover:bg-gray-200 transition-all ease-in flex  justify-center items-center  border rounded-2xl     '>
          <img
            src={`https://ucarecdn.com/${category?.image}/`}
            className="mix-blend-multiply  flex justify-center items-center h-[9rem]"
            alt={category.name}
          />
        </div>
        <div className='title'>
          <p className='flex  justify-center text-center leading-5 mt-3'><b>{category.name}</b></p>
          <p className='flex text-sm justify-center text-center text-gray-400'>{filteredProducts?.length} • Products</p>
        </div>
      </div>

      
    </>
  );
};
export default CategoriesNested
// src = {`https://ucarecdn.com/${category?.image}/-/scale_crop/1200x1200/-/format/auto/-/quality/smart_retina/`}
