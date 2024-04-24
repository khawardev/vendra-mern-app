import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectProducts } from '../toolkit/Slices/ProductsSlice';
import NewProducts from '../containers/HomeContainer/NewProducts';
import { TbCategory } from 'react-icons/tb';
import { RxHamburgerMenu } from 'react-icons/rx';
import { GoDotFill } from 'react-icons/go';
import BestSellingNestedSection from '../containers/HomeContainer/HomeNestedContainer/BestSellingNestedSection';
import DiscountedNestedSection from '../containers/HomeContainer/HomeNestedContainer/DiscountedNestedSection';
import { selectdiscount } from '../toolkit/Slices/DicountSlice'
import { selectbestSelling } from '../toolkit/Slices/BestSellingSlice'

const ShopPage = () => {

    const Navigate = useNavigate();
    const products = useSelector(selectProducts);
    const [priceFilter, setPriceFilter] = useState(''); // State to hold the selected price filter option
    const [ProductStatus, setProductStatus] = useState(''); // State to keep track of selected option
    const [selectedRadio, setSelectedRadio] = useState(false); // State to keep track of selected option
    const discount = useSelector(selectdiscount);
    const bestSelling = useSelector(selectbestSelling);


    const filteredProducts = () => {
        let filtered = [...products];
        if (priceFilter === 'lowToHigh') {
            return (filtered.sort((a, b) => a.price - b.price))
        } else if (priceFilter === 'highToLow') {
            return (filtered.sort((a, b) => b.price - a.price))
        } else if (priceFilter === 'none') {
            return (filtered.reverse())
        }
        return (filtered.reverse())
    };

    // Function to handle price filter change
    const handlePriceFilterChange = (event) => {
        
        setProductStatus('');
        setPriceFilter(event.target.value);
    };

    // Function to handle dropdown change
    const handleProductStatusChange = (event) => {
        let filtered = [...products];
        setPriceFilter('none')
        filtered.reverse()
        setProductStatus(event.target.value);
    };

    // Render the selected component based on the selected option
    const renderComponent = () => {
        switch (ProductStatus) {
            case 'In stock':
                return <BestSellingNestedSection />;
            case 'Best Selling':
                return <BestSellingNestedSection grid={'lg:grid-cols-5 md:grid-cols-3 grid-cols-2  mt-10'} />;
            case 'On Discount':
                return <DiscountedNestedSection grid={'lg:grid-cols-5 md:grid-cols-3 grid-cols-2  mt-10'} />;
            default:
                return null; // Render nothing if no option is selected or if the selected option doesn't match any case
        }
    };

    return (
        <main className="w-11/12 m-auto md:py-20 py-3">
            <p className="text-sm mb-4">
                <span className="text-gray-400">
                    <span className="cursor-pointer" onClick={() => Navigate(`/`)}>
                        Home
                    </span>{' '}
                    / <span className="text-black font-bold">Shop</span>
                </span>
            </p>

            <main className="flex items-center justify-between">
                <section>
                    {ProductStatus === 'On Discount' ? (
                        <>
                            <section>
                                <p className="font-bold">Showing {discount.length}-{discount.length} of {discount.length} results</p>
                            </section>
                        </>
                    ) : ProductStatus === 'Best Selling' ? (
                        <>
                            <section>
                                    <p className="font-bold">Showing {bestSelling.length}-{bestSelling.length} of {bestSelling.length} results</p>
                            </section>
                        </>
                    ) : (
                        <p className="font-bold">
                            Showing 1-{products.length} of {products.length} results
                        </p>
                    )}
                </section>

                <section className="flex items-center gap-5 ">
                    <form className=" flex gap-3 ">
                        {/* <select
                            className="  text-sm  rounded-full py-2 px-1   border   hover:cursor-pointer "
                        >
                            <option selected="">Sort  Product</option>
                            <option selected="">By Latest</option>
                            <option selected="">By  Rating</option>

                        </select> */}


                        <select
                            className="text-sm rounded-full py-2 px-1 border hover:cursor-pointer"
                            onChange={handlePriceFilterChange}
                            value={priceFilter}
                        >
                            <option value="none">Filter By Price</option>
                            <option value="lowToHigh">Low to High</option>
                            <option value="highToLow">High to Low</option>
                        </select>


                        <select
                            onChange={handleProductStatusChange}
                            value={ProductStatus}
                            className="text-sm rounded-full py-2 px-1 border hover:cursor-pointer "
                        >
                            <option value="">Product Status</option>
                            <option value="Best Selling">Best Selling</option>
                            <option value="On Discount">On Discount</option>
                        </select>
                    </form>
                    <GoDotFill />
                    <div className="flex items-center justify-center gap-1">
                        <p className={`hover:cursor-pointer p-2 rounded-full ${selectedRadio === false && 'bg-gray-100'} hover:bg-gray-100`} onClick={() => { setSelectedRadio(false) }} >
                            <TbCategory />
                        </p>
                        <p className={`hover:cursor-pointer p-2 rounded-full ${selectedRadio === true && 'bg-gray-100'} hover:bg-gray-100`}
                            onClick={() => { setSelectedRadio(true) }}
                        >
                            <RxHamburgerMenu />
                        </p>
                    </div>
                </section>
            </main>
            <hr className="my-3" />
            <div>

            </div>
            {ProductStatus ? renderComponent() : <NewProducts
                url="shop"
                sliceProducts={false}
                viewmore={true}
                NewProductBanner={false}
                grid={` ${selectedRadio === false ? 'grid-cols-5' : 'grid-cols-1'} `}
                sectionClasses={` ${selectedRadio === true && '  grid grid-cols-8 gap-6 items-end   '}`}
                imageClasses={` ${selectedRadio === true && 'col-span-2'}`}
                imageClasses2={` ${selectedRadio === true && 'col-span-6'}`}
                TextClasses={` ${selectedRadio === true && ' line-clamp-6 '}`}
                filteredProducts={filteredProducts()} // Pass filtered products to NewProducts component
            />
            }


        </main>
    );
};

export default ShopPage;
