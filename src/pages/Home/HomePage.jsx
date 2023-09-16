import CategoriesSection from '../../containers/HomeContainer/CategoriesSection';
import CompaniesSection from '../../containers/HomeContainer/CompaniesSection';
import HeroSection from '../../containers/HomeContainer/HeroSection';
import NewProducts from '../../containers/HomeContainer/NewProducts';
import ServicesSection from '../../containers/HomeContainer/ServicesSection';
export const HomePage = () => {
    return (
        <>
            <HeroSection />
            <CompaniesSection />
            <CategoriesSection />
            <section className='w-11/12 mx-auto my-16  '>
                <div className='grid grid-cols-4 gap-4'>
                    <ServicesSection />
                    <div className="col-span-3">
                        <NewProducts />
                    </div>

                </div>

            </section>
        </>
    )
}
