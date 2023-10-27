import React, { useState } from 'react';

const EditProduct = ({ product, onClose }) => {
  const [editedProduct, setEditedProduct] = useState({
    name: product.name,
    description: product.description,
    price: product.price,
    category: product.category,
    // Add other fields you want to edit
  });

  // Add a handler to update the edited product state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({ ...editedProduct, [name]: value });
  };

  // Function to submit changes
  const handleSaveChanges = () => {
    // Make an API call to save the changes using editedProduct
    // Ensure to handle errors and update the table after success
    // Then, close the edit form using onClose()
  fetch(`http://localhost:5000/api/updateProduct/${product._id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(editedProduct),
  })
    .then((response) => {
      if (response.ok) {
        // Product updated successfully, handle the response as needed
        // Close the edit form
        onClose();
      } else {
        // Handle errors, such as displaying an error message
        console.error('Failed to update product.');
      }
    })
    .catch((error) => {
      console.error('Error updating product:', error);
    });
  };
  
  return (
    // The form for editing
    <div>
      <h2>Edit Product</h2>
      <form onSubmit={handleSaveChanges}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={editedProduct.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Price:
          <input
            type="text"
            name="price"
            value={editedProduct.price}
            onChange={handleInputChange}
          />
        </label>
        {/* Add similar fields for description, price, category, etc. */}
        <button type="submit">Save Changes</button>
        <button onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default EditProduct;
