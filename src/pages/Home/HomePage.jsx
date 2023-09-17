import CategoriesSection from '../../containers/HomeContainer/CategoriesSection';
import CompaniesSection from '../../containers/HomeContainer/CompaniesSection';
import DiscountProducts from '../../containers/HomeContainer/DiscountProducts';
import HeroSection from '../../containers/HomeContainer/HeroSection';
import NewProducts from '../../containers/HomeContainer/NewProducts';
import ServicesSection from '../../containers/HomeContainer/ServicesSection';
import TrendingProducts from '../../containers/HomeContainer/TrendingProducts';
export const HomePage = () => {
    return (
        <>
            <HeroSection />
            <CompaniesSection />
            <CategoriesSection />
            <section className='w-11/12 mx-auto mt-14 mb-10  '>
                <div className='grid grid-cols-4 gap-6'>
                    <ServicesSection />
                    <div className="col-span-3">
                        <NewProducts title='New Products' grid={'grid-cols-4'} Banner={true} />
                    </div>
                </div>
            </section>

            <TrendingProducts />
            <section className='w-11/12 mx-auto my-14 relative  '>
                <div className='text-black absolute top-10 left-10 z-10  p-2'>
                    <div className='mt-3 leading-5'>
                        <h1 className='text-2xl font-extralight text-blue-500 mb-4'>Elevate Your Fitness Journey</h1>
                        <h1 className='text-4xl  text-white font-extrabold mb-1'>Reach Your Peak with Our Fitness Watches</h1>
                        <h1 className='  text-white '>Embark on a transformative fitness journey with our advanced Fitness Watches.</h1>
                    </div>
                    <button className='bg-blue-500 text-white py-1  cursor-pointer  px-5 mt-6 rounded-full'>
                        Explore now
                    </button>
                </div>
                <img src='https://res.cloudinary.com/denajbnh4/image/upload/v1694950637/banner-21_ec3vtn.jpg' className='w-full' alt="" />
            </section>
            <DiscountProducts/>

        </>
    )
}
