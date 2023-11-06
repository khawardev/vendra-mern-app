/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import '../assets/styles/AdminCategoryProducts.scss';
function AdminCategoryProductsPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/categories');
        if (response.ok) {
          const data = await response.json();
          setCategories(data);
        } else {
          console.error('Failed to fetch categories');
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    };

    fetchCategories();
  }, []);

  
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };



  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append('category', category);
    console.log(formData);

    try {
      const response = await fetch('http://localhost:5000/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          description: description,
          price: price,
          category: category, // This should be the _id of the selected category
        }),
      });
      console.log( response)

      if (response.ok) {
        const data = await response.json();
        Swal.fire(
          'Successfully Product Added',
          'success'
        )
        console.log('Product created:', data);
      } else {
        console.error('Failed to create product');
        alert("Faliled to add product")
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (

    <div>
      <main className=" md:w-1/2   m-auto md:py-20 py-10  ">
        <section className=" md:border border-yellow-500 rounded-xl  md:p-20 p-3 ">
          <p className="  font-extrabold text-4xl  md:mb-10 mb-3">
            Add Product
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label className="block text-gray-700 text-lg mb-2" htmlFor="categorySelect">
                Select a Category
              </label>
              <select
                className="appearance-none border rounded w-full py-2 px-3 focus:border-yellow-500 focus:border outline-none"
                id="categorySelect"
                value={category}
                onChange={handleCategoryChange}
              >
                <option value="">Select a category</option>
                {categories.map((cat) => (
                  <option key={cat._id} value={cat._id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-5">
              <label
                className="block text-gray-700 text-lg  mb-2 "
                htmlFor="login-username-email"
              >
                Product Title
              </label>
              <input
                className=" appearance-none border rounded w-full py-2 px-3  focus:border-yellow-500 focus:border  outline-none"
                type="text"
                id="productName"
                name="productName"
                value={name}
                // value={formData.username}
                onChange={handleNameChange}
                placeholder="Enter Name ..."
              />
            </div>
            <div className="mb-5">
              <label
                className="block text-gray-700 text-lg  mb-2 "
                htmlFor="login-username-email"
              >
                Product Discription
              </label>
              <input
                className=" appearance-none border rounded w-full py-2 px-3  focus:border-yellow-500 focus:border  outline-none"
                type="text"
                id="productName"
                name="productName"
                value={description}
                // value={formData.username}
                onChange={handleDescriptionChange}
                placeholder="Enter Name ..."
              />
            </div>
            <div className="mb-5">
              <label
                className="block text-gray-700 text-lg  mb-2 "
                htmlFor="login-username-email"
              >
                Product Price
              </label>
              <input
                className=" appearance-none border rounded w-full py-2 px-3  focus:border-yellow-500 focus:border  outline-none"
                type="text"
                id="productName"
                name="productName"
                value={price}
                // value={formData.username}
                onChange={handlePriceChange}
                placeholder="Enter Name ..."
              />
            </div>

            {/* <div className="mb-10">
              <label
                className="block text-gray-700 text-lg  mb-2"
                htmlFor="login-username-email"
              >
                Product Image
              </label>

              <label className="drop-container" id="dropcontainer">
                <span className="drop-title">Drop Image here</span>
                or
                <input
                  type="file"
                  id="categoryImage"
                  accept="image/*"
                  onChange={handleImageChange}
                  required
                />
              </label>
            </div> */}
            <button
              className=" mb-3 w-full  bg-yellow-500 font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Upload
            </button>
          </form>
        </section>
      </main>

    </div>
  );
}

export default AdminCategoryProductsPage;
