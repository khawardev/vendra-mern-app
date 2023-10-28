/* eslint-disable no-unused-vars */
import { useState } from "react";
import "../assets/styles/AdminCategoryProducts.scss";
function AdminCategoryPage() {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file); // Store the File object directly
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", image);

    try {
      const response = await fetch("http://localhost:5000/api/categories", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        // Handle success, e.g., show a success message or redirect to another page
        console.log("Category created successfully");
      } else {
        // Handle errors, e.g., display an error message
        console.error("Failed to create category");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };


  return (
    <div>
      <main className=" md:w-1/2   m-auto md:py-20 py-10  ">
        <section className=" md:border border-yellow-500 rounded-xl  md:p-20 p-3 ">
          <p className="  font-extrabold text-4xl  md:mb-10 mb-3">
            Add Category
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label
                className="block text-gray-700 text-lg  mb-2 "
                htmlFor="login-username-email"
              >
                Category Name
              </label>
              <input
                className=" appearance-none border rounded w-full py-2 px-3  focus:border-yellow-500 focus:border  outline-none"
                type="text"
                id="categoryName"
                name="categoryName"
                value={name}
                // value={formData.username}
                onChange={handleNameChange}
                placeholder="Enter Name ..."
              />
            </div>
            <div className="mb-10">
              <label
                className="block text-gray-700 text-lg  mb-2"
                htmlFor="login-username-email"
              >
                Category Image
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
            </div>
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

export default AdminCategoryPage;
