import BannerSection from '../../containers/HomeContainer/BannerSection';
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
                <div className='grid md:grid-cols-4 grid-cols-1 md:gap-6'>
                    <ServicesSection />
                    <div className="col-span-3">
                        <NewProducts title='New Products' grid={'lg:grid-cols-4 md:grid-cols-3 grid-cols-2'} NewProductBanner={true} />
                    </div>
                </div>
            </section>

            <TrendingProducts />
            <BannerSection />
            <DiscountProducts />

        </>
    )
}
