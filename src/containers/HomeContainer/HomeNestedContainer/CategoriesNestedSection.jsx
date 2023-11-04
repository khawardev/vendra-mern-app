/* eslint-disable react/prop-types */

const CategoriesNested = ({ category }) => {
  return (
    <>
      <div className='carouselItem'>
        <div className='posterBlock flex justify-center items-center'>
          <img className='text-white' width={250} src={category.url} alt='' />
        </div>
        <div className='title'>
          <p className='flex  justify-center'>{category.title}</p>
          <p className='flex text-sm justify-center text-gray-400'>{category.Quantity} Products</p>
        </div>
      </div>
    </>
  );
};
export default CategoriesNested
