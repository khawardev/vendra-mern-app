
const BannerSection = () => {
    return (
        <div>
            <section className='w-11/12 mx-auto my-14 relative  '>
                <div className='text-black absolute md:top-10 top-3 md:left-10 z-10  md:p-2 px-5'>
                    <div className='mt-3 leading-5'>
                        <h1 className='text-2xl md:font-extralight font-extrabold text-blue-500 mb-4 leading-6'>Elevate Your Fitness Journey</h1>
                        <h1 className='text-4xl  text-white font-extrabold mb-1 md:block hidden'>Reach Your Peak with Our Fitness Watches</h1>
                        <h1 className='  text-white md:block hidden'>Embark on a transformative fitness journey with our advanced Fitness Watches.</h1>
                    </div>
                    <button className='bg-yellow-500 text-white md:py-1  cursor-pointer  md:px-5 px-3 md:mt-6 rounded-full'>
                        Explore
                    </button>
                </div>
                <div className='md:h-full h-[140px]'>
                    <img src="https://res.cloudinary.com/denajbnh4/image/upload/v1694950637/banner-21_ec3vtn.jpg" className='object-cover w-full h-full' alt="" />
                </div>
            </section>
        </div>
    )
}

export default BannerSection