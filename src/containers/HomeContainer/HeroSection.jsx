/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import SlidesData from '../../data/sliderData';

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

    // import { RxDotFilled } from 'react-icons/rx';
    // const goToSlide = (slideIndex) => {
    //     setOpacity(0); // Start the fade-out effect
    //     setTimeout(() => {
    //         setCurrentIndex(slideIndex);
    //         setOpacity(1); // Start the fade-in effect
    //     }, 500); // Adjust the duration to match your transition duration
    // };
    {/* <div className='flex top-full my-2  left-2/4 absolute '>
                {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className={`text-2xl cursor-pointer ${currentIndex === slideIndex ? 'text-blue-500' : 'text-gray-500'
                            }`}
                    >
                        <RxDotFilled />
                    </div>
                ))}
            </div> */}

    // 
    return (
        <div className='md:w-11/12 m-auto my-2 bg-fit py-2  relative group'>

                {SlidesData.map((slide, slideIndex) => (
                    <div key={slideIndex}  style={{
                            // backgroundImage: `url(${slide.url})`,
                            opacity: currentIndex === slideIndex ? opacity : 0,
                            transition: 'opacity 0.5s ease-in-out',
                        }}
                    >
                        {currentIndex === slideIndex && (
                            <>
                                <section className="relative">
                                    <img
                                        className="w-full md:rounded-2xl object-cover  md:h-[600px] h-[240px]"
                                        src={slide.url}
                                    />
                                </section>
                                <section  className='text-black  absolute top-10 md:top-40 md:left-20  p-4 '>
                                    <div className='flex'>
                                        <p className='md:px-4 px-3  md:py-1 text-sm items-center bg-yellow-500 rounded-full'>{slide.tag}</p>
                                    </div>
                                    <div className='md:mt-6 mt-3 md:leading-5 leading-3'>

                                        <h1 className='md:text-4xl text-xl font-extralight '>{slide.tagline1}</h1>
                                        <h1 className='md:text-6xl text-3xl font-extrabold leading-7'>{slide.tagline2}</h1>
                                    </div>
                                    <p className='md:block hidden  text-xl my-3 font-thin'>{slide.description}</p>
                                    <button className='bg-blue-500 text-white md:py-2 py-1  cursor-pointer  md:px-5 px-3 mt-2 rounded-full'>
                                        {slide.buttonLabel}
                                    </button>
                                </section>
                            </>

                        )}
                    </div>
                ))}
            <div className='md:hidden block group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            <div className='md:hidden block group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>

        </div>
    );
}

export default HeroSection;
