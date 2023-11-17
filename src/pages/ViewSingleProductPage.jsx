import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import SingleProductContainer from '../containers/SingleProductContainer/SingleProductContainer';
import NewProducts from '../containers/HomeContainer/NewProducts';

const ViewSingleProductPage = () => {
    const [products, setProducts] = useState([]);
    const [category, setcategory] = useState([]);
    const {productid} = useParams();

    useEffect(() => {
        axios.get('http://localhost:5000/api/products') // Update the URL to match your backend route
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
        axios.get('http://localhost:5000/api/categories') // Update the URL to match your backend route
            .then((response) => {
                setcategory(response.data);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    }, []);
    
    const filteredProduct = products.filter(product => product?._id === productid);
    const filteredcategory = category.filter(category => category?._id === filteredProduct[0]?.category);
    const filteredRelatedProducts = products.filter(product => product?.category === filteredcategory[0]?._id);
    `/viewsingleproduct/:productid`
    return (
        <div>
            {/* {filteredProduct[0]?.name} */}
            <div className=' w-11/12 m-auto my-10'>
                <SingleProductContainer filteredProduct={filteredProduct[0]} filteredcategory={filteredcategory[0]} />

                <main className='my-16'>
                    <NewProducts title={'Related Products'} viewmore={false} grid={'grid grid-cols-5 '} filteredProducts={filteredRelatedProducts} />
                </main>


            </div>
        </div>
    )
}

export default ViewSingleProductPage