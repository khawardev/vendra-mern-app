/* eslint-disable no-unused-vars */
import { useState } from 'react';
import '../assets/styles/AdminCategoryProducts.scss';
function AdminCategoryProductsPage() {
    const [name, setName] = useState('');
    const [image, setImage] = useState(null);
    const [category, setCategory] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onload = (e) => {
                setImage(e.target.result); // Set the image data
            };

            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Name:', name);
        console.log('Image Data:', image);
        console.log('Category:', category);
        // Here, you can send the form data to an API or handle it as needed.
    };

    return (

        <div>
            <main className=" md:w-1/2   m-auto md:py-20 py-10  ">
                <section className=' md:border border-yellow-500 rounded-xl  md:p-20 p-3 '>

                    <p className="  font-extrabold text-4xl  md:mb-10 mb-3">Add Products</p>
                    <form onSubmit={handleSubmit} >
                        <div className='mb-5'>
                            <label className="block text-gray-700 text-lg  mb-2 " htmlFor="login-username-email">
                                Category Name
                            </label>
                            <input
                                className=" appearance-none border rounded w-full py-2 px-3  focus:border-yellow-500 focus:border  outline-none"
                                type="text"
                                id="username"
                                name="username"
                                // value={formData.username}
                                // onChange={handleChange}
                                placeholder="Enter Name ..."
                            />
                        </div>
                        <div className='mb-10'>
                            <label className="block text-gray-700 text-lg  mb-2" htmlFor="login-username-email">
                                Category Image
                            </label>

                            <label className="drop-container" id="dropcontainer">
                                <span className="drop-title">Drop Image here</span>
                                or
                                <input type="file" id="images" accept="image/*" required />
                            </label>
                        </div>
                        <button className=" mb-3 w-full  bg-yellow-500 font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                            type="submit" >
                            Upload
                        </button>
                    </form>
                </section>

            </main>


        </div>
    );
}

export default AdminCategoryProductsPage;
