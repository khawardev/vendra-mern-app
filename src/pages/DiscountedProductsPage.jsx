import { useNavigate } from "react-router-dom";
import NewProducts from '../containers/HomeContainer/NewProducts'
const DiscountedProductsPage = () => {
    const Navigate = useNavigate();

    return (
        <main className=" w-11/12 m-auto md:py-20 py-3">


            <p className=" text-sm mb-4"><span className=" text-gray-400">
                <span className=' cursor-pointer' onClick={() => Navigate(`/`)}>Home</span> / <span className=" text-black font-bold  ">Discounted Products</span></span>
            </p>

            <main className=" flex items-center justify-between ">
                <section >
                    <p className=" font-bold  "> Showing 1-16 of 66 results</p>
                </section>
                <section className=" flex items-center gap-5">
                    <p>Sort by Latest</p>
                    <p>Filter by price</p>
                    <p>Product Status</p>
                    <div className=" flex items-center justify-center gap-3">
                        <p>icon 1</p>
                        <p>icon 2</p>
                    </div>
                </section>
            </main>
            <hr className="my-3 " />
            <NewProducts url='discount' grid={'lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2'} discount={true} />

            {/* <NewProducts bestselling={true} viewmore={true} special='bestselling' title='Best Selling ' Banner={false} grid={'lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2'} /> */}

        </main>

    )
}

export default DiscountedProductsPage