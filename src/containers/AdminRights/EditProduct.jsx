/* eslint-disable react/prop-types */
import  { useState } from "react";

export default function EditProduct({ product, onSave, onCancel }) {
  const [editedProduct, setEditedProduct] = useState({
    name: product.name,
    description: product.description,
    price: product.price,
    category: product.category,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Include _id when calling onSave
    onSave({
      ...editedProduct,
      _id: product._id,
    });
    onCancel();
  };
  const handleCancel = () => {
    // Cancel editing and close the edit form
    onCancel();
  };

  return (
    <tr className="w-full text-sm text-left">
      <td>
        <input
          type="text"
          name="name"
          value={editedProduct.name}
          onChange={handleInputChange}
        />
      </td>
      <br />
      <td>
        <input
          type="text"
          name="description"
          value={editedProduct.description}
          onChange={handleInputChange}
        />
      </td>
      <td>
        <input
          type="number"
          name="price"
          value={editedProduct.price}
          onChange={handleInputChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="category"
          value={editedProduct.category}
          onChange={handleInputChange}
        />
      </td>
      <td>
        <button  className="font-medium bg-green-500 rounded py-1 px-3" onClick={handleSave}>Save</button>
        <button  className="font-medium bg-red-500 rounded py-1 px-3" onClick={handleCancel}>Cancel</button>
      </td>
    </tr>
  );
}