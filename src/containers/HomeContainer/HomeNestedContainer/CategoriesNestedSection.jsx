/* eslint-disable react/prop-types */

const CategoriesNested = ({ category }) => {
  return (
    <>
      <div className='carouselItem select-none'>
        <div className='posterBlock flex justify-center items-center'>
          <img
            src={`https://ucarecdn.com/${category?.image}/-/scale_crop/250x250/-/format/auto/-/quality/smart_retina/`}
            className=" bg-gray-200 rounded-xl"
            alt={category.name}
          />
        </div>
        <div className='title'>
          <p className='flex  justify-center text-center leading-5 mt-3'><b>{category.name}</b></p>
          <p className='flex text-sm justify-center text-center text-gray-400'>12 • Products</p>
{/* 
          <h3 className=" text-center leading-4 mt-3 "><b>{category.name}</b></h3>
          <h3 className=" text-center">12 • Products</h3> */}
        </div>
      </div>
    </>
  );
};
export default CategoriesNested
