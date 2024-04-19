import { useNavigate } from "react-router-dom";
import NewProducts from '../containers/HomeContainer/NewProducts'
import { selectbestSelling } from '../toolkit/Slices/BestSellingSlice'
import { useSelector } from 'react-redux';

const TrendingProductsPage = () => {
    const Navigate = useNavigate();
    const bestSelling = useSelector(selectbestSelling);

    return (
        <main className=" w-11/12 m-auto md:py-20 py-3">
            <p className=" text-sm mb-4"><span className=" text-gray-400">
                <span className=' cursor-pointer' onClick={() => Navigate(`/`)}>Home</span> / <span className=" text-black font-bold  ">Best Selling</span></span>
            </p>

            <main className=" flex items-center justify-between ">
                {bestSelling.length !== 0 &&
                <section >
                    <p className="font-bold">Showing {bestSelling.length}-{bestSelling.length} of {bestSelling.length} results</p>
                    </section>}
                {/* <section className=" flex items-center gap-5">
                    <p>Sort by Latest</p>
                    <p>Filter by price</p>
                    <p>Product Status</p>
                    <div className=" flex items-center justify-center gap-3">
                        <p>icon 1</p>
                        <p>icon 2</p>
                    </div>
                </section> */}
            </main>
            <hr className="my-3 " />
            <NewProducts sliceProducts={false} url='bestselling' grid={'lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2'} NewProductBanner={false} />


        </main>

    )
}

export default TrendingProductsPage