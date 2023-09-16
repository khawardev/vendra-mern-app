
import '../../assets/styles/Carousel.scss';
import { useRef } from "react";
import CategoriesData from '../../data/CategoriesData';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const CategoriesSection = () => {
    

    const carouselContainer = useRef();
    const navigation = (dir) => {
        const container = carouselContainer.current;
        const scrollAmount = dir === "left" ? container.scrollLeft - (286) : container.scrollLeft + (286);

        container.scrollTo({
            left: scrollAmount,
            behavior: "smooth",
        });
    };

    return (
        <div className='my-7 w-11/12 m-auto'>
            <div className=' carousel relative flex justify-center items-center' >
                <BsChevronCompactLeft className='carouselLeftNav arrow ' onClick={() => navigation("left")} />
                <BsChevronCompactRight className='carouselRighttNav arrow' onClick={() => navigation("right")} />
                <div className='carouselItems  ' ref={carouselContainer}>
                    {CategoriesData?.map((Categories, index) => {
                        return (
                            <div key={index} className='carouselItem ' >
                                <div className='posterBlock flex justify-center items-center '>
                                    <img className='text-white' width={250}  src={Categories.url} alt='' />
                                </div>
                                <div className='title  '>
                                    <p className='flex  justify-center'>{Categories.title}</p>
                                    <p className='flex text-sm justify-center text-gray-400'>{Categories.Quantity} Products</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>

    )
}

export default CategoriesSection

