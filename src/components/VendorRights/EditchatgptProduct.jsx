import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditProduct = ({ match }) => {
    const [product, setProduct] = useState({});
    const [editedProduct, setEditedProduct] = useState({
        productName: '',
        description: '',
        productImages: [],
        stock: 0,
        price: 0,
        category: '',
    });

    useEffect(() => {
        // Fetch product details based on the ID from the URL parameter
        axios.get(`/api/products/${match.params.id}`)
            .then(response => {
                setProduct(response.data);
                setEditedProduct(response.data);
            })
            .catch(error => {
                console.error('Error fetching product:', error);
            });
    }, [match.params.id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedProduct({ ...editedProduct, [name]: value });
    };

    const handleUpdateProduct = () => {
        axios.put(`/api/products/${product._id}`, editedProduct)
            .then(response => {
                console.log('Product updated successfully:', response.data);
                // Redirect or handle the update success as needed
            })
            .catch(error => {
                console.error('Error updating product:', error);
            });
    };

    return (
        <div>
            <h2>Edit Product</h2>
            <label>Product Name:</label>
            <input type="text" name="productName" value={editedProduct.productName} onChange={handleInputChange} />
            {/* Add similar inputs for other fields */}
            <button onClick={handleUpdateProduct}>Update Product</button>
        </div>
    );
};

export default EditProduct;
