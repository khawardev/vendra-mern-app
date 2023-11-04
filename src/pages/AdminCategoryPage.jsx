/* eslint-disable no-unused-vars */
import { useState } from "react";
import "../assets/styles/AdminCategoryProducts.scss";
function AdminCategoryPage() {
  const [name, setName] = useState("");
  const [isUploading, setisUploading] = useState(false);
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
  const handleUploadClick = () => {
    setisUploading(!isUploading);
    // Perform your upload logic here or trigger the upload process.
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
              className=" mb-3 w-full font-bold flex justify-center items-center text-white   bg-yellow-500  focus:ring-4 focus:ring-yellow-400 py-[10px] px-4 rounded-lg focus:outline-none focus:shadow-outline"
              onClick={handleUploadClick}
              type="submit"
            >
              {/* {isUploading ? (<svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-white  animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
              </svg>
             ' Uploading ...'): 'Upload' } */}

              {isUploading ? (
                <svg
                  aria-hidden="true"
                  role="status"
                  className="inline w-4 h-4 mr-3 text-white animate-spin"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                </svg>
              ) : (
                'Upload'
              )}


            </button>

          </form>
        </section>
      </main>
    </div>
  );
}

export default AdminCategoryPage;
