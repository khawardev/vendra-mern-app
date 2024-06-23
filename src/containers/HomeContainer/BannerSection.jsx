import { useNavigate } from "react-router-dom";

const BannerSection = () => {


    const Navigate = useNavigate();

    return (
        <div>
            <section className='w-11/12 mx-auto my-14 relative  ' onClick={() => Navigate(`/viewcategoryproducts/663b07e27234b185b146e2e2`)} >
                <div className='text-black absolute md:top-10   md:left-10 z-10  md:p-2 px-5'>
                    <div className='mt-4 leading-5'>
                        <h1 className='md:text-2xl    text-blue-500 md:mb-4 leading-6     '>Elevate Your Fitness Journey</h1>
                        <h1 className='md:text-4xl text-xl  text-white  font-extrabold   '>  Cardio with  Fitness Watches</h1>
                        <h1 className='  text-white md:block hidden '>Embark on a transformative fitness journey with our advanced Fitness Watches.</h1>
                    </div>
                    <button className='bg-yellow-500 text-white  font-bold    cursor-pointer  md:px-5 px-3 md:py-2 py-[1px]   md:mt-6 mt-2 rounded-full'>
                        Explore
                    </button>
                </div>
                <div className='md:h-full h-[150px]'>
                    <img src="https://res.cloudinary.com/denajbnh4/image/upload/v1694950637/banner-21_ec3vtn.jpg" className='object-cover w-full h-full' alt="" />
                </div>
            </section>
        </div>
    )
}

export default BannerSection