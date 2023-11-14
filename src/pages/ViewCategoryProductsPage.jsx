/* eslint-disable no-unused-vars */
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import NewProducts from '../containers/HomeContainer/NewProducts';
const ViewCategoryProductsPage = () => {

    const { categoryid } = useParams();
    const [products, setProducts] = useState([]);
    const [category, setcategory] = useState([]);
    useEffect(() => {
        // Fetch product data from your backend API when the component mounts
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
    

    const filteredProducts = products.filter(product => product?.category === categoryid);
    const filteredcategory = category.filter(category => category?._id === categoryid);

    return (
        <>
            <div className=' w-11/12 m-auto my-10'>
                <NewProducts grid={' md:grid-cols-5 sm:grid-cols-3 grid-cols-2'} NewProductBanner={false} filteredProducts={filteredProducts} title={filteredcategory[0]?.name} discount={false}   />

           </div>

        </>
    )
}

export default ViewCategoryProductsPage