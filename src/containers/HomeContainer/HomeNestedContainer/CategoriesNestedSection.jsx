/* eslint-disable react/prop-types */

const CategoriesNested = ({ category }) => {
  return (
    <>
      <div className='carouselItem select-none  flex-col justify-center items-center   '>
        <div className='p-8  hover:bg-gray-100 flex border rounded-2xl   h-[245px]  '>
          <img
            src={`https://ucarecdn.com/${category?.image}/`}
            className="mix-blend-multiply  flex justify-center items-center w-full h-full "
            alt={category.name}
          />
        </div>
        <div className='title'>
          <p className='flex  justify-center text-center leading-5 mt-3'><b>{category.name}</b></p>
          <p className='flex text-sm justify-center text-center text-gray-400'>12 • Products</p>
        </div>
      </div>
    </>
  );
};
export default CategoriesNested
// src = {`https://ucarecdn.com/${category?.image}/-/scale_crop/1200x1200/-/format/auto/-/quality/smart_retina/`}
