/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import SlidesData from '../../data/sliderData';
import '../../assets/styles/ShopButton.scss';
function HeroSection() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const sliderInterval = setInterval(() => {
            setOpacity(0); // Start the fade-out effect
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % SlidesData.length);
                setOpacity(1); // Start the fade-in effect
            }, 500); // Adjust the duration to match your transition duration
        }, 5000);
        return () => clearInterval(sliderInterval);
    }, [currentIndex, SlidesData.length]);

    const prevSlide = () => {
        setOpacity(0); // Start the fade-out effect
        setTimeout(() => {
            const isFirstSlide = currentIndex === 0;
            const newIndex = isFirstSlide ? SlidesData.length - 1 : currentIndex - 1;
            setCurrentIndex(newIndex);
            setOpacity(1); // Start the fade-in effect
        }, 500); // Adjust the duration to match your transition duration
    };

    const nextSlide = () => {
        setOpacity(0); // Start the fade-out effect
        setTimeout(() => {
            const isLastSlide = currentIndex === SlidesData.length - 1;
            const newIndex = isLastSlide ? 0 : currentIndex + 1;
            setCurrentIndex(newIndex);
            setOpacity(1); // Start the fade-in effect
        }, 500); // Adjust the duration to match your transition duration
    };

    return (
        <div className='md:w-11/12 m-auto my-2 bg-fit py-2  relative group'>

            {SlidesData.map((slide, slideIndex) => (
                <div key={slideIndex} style={{
                    // backgroundImage: `url(${slide.url})`,
                    opacity: currentIndex === slideIndex ? opacity : 0,
                    transition: 'opacity 0.5s ease-in-out',
                }}
                >
                    {currentIndex === slideIndex && (
                        <>
                            <section className="relative">
                                <img className="w-full  object-cover  md:h-[600px] h-[240px]" src={slide.url} />
                            </section>
                            <section className='text-black  absolute top-10 md:top-40 md:left-20  p-4 '>
                                <div className='flex'>
                                    <p className='md:px-4 px-3  md:py-1 text-sm items-center text-white bg-yellow-500 rounded-full  '>{slide.tag}</p>
                                </div>
                                <div className='md:mt-6 mt-2 md:leading-5 leading-2'>
                                    <h1 className='md:text-3xl text-xl     leading-2   tracking-tight  Alegreya font-bold ' >{slide.tagline1}</h1>
                                    <h1 className='md:text-4xl text-3xl my-2 font-extrabold leading-2 tracking-tight  text-yellow-500 '>{slide.tagline2}</h1>
                                    <p className='md:block hidden  text-xl     leading-2 text-gray-500   '>{slide.description}</p>
                                </div>


                                <button className="learn-more my-5">
                                    <span className="circle" aria-hidden="true">
                                        <span className="icon arrow"></span>
                                    </span>
                                    <button className="button-text   ">
                                        {slide.buttonLabel}
                                    </button>
                                </button>
                            </section>
                        </>

                    )}
                </div>
            ))}
            <div className='md:hidden block group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl   rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            <div className='md:hidden block group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl   rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>

        </div>
    );
}

export default HeroSection;
