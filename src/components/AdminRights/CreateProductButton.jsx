/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect } from 'react';
import { UploadClient } from '@uploadcare/upload-client';
import { listOfFiles, UploadcareSimpleAuthSchema } from '@uploadcare/rest-client';
import { useSelector } from 'react-redux';
import { selectCategories } from '../../toolkit/Slices/CategoriesSlice'
import { ImagePlus } from 'lucide-react';
import Success from './Success';
const CreateProductButton = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [categoryfield, setCategoryfield] = useState('');
    const [stock, setstock] = useState('');
    const [imageuuid, setimageuuid] = useState("");
    const [isHidden, setisHidden] = useState(true);
    const fileInputRef = useRef(null);
    const categories = useSelector(selectCategories);
    const [Thankyou, setThankyou] = useState(false)

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
        }
    };
    const setDefaultFields = () => {
        setName('');
        setDescription('');
        setPrice('');
        setCategoryfield('');
        setstock('');
        setimageuuid('');
        setSelectedFile(null);
    }


    const IsHiddenFunction = () => {
        setDefaultFields()
        setisHidden(!isHidden);
    };



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
        setCategoryfield(event.target.value);
    };
    const handleStockChange = (event) => {
        setstock(event.target.value);
    };
    useEffect(() => {
        if (imageuuid) {
            handlemongo();
        }
        
    }, [imageuuid])

  


    const handlemongo = async (event) => {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("description", description);
        formData.append("price", price);
        formData.append('category', categoryfield);
        formData.append('image', imageuuid);
        formData.append('stock', stock);
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
                    stock: stock,
                    image: imageuuid,
                    category: categoryfield,
                }),
            });

            if (response.ok) {
                console.log('Product created successfully');
                setDefaultFields();
                setUploading(false);
                setThankyou(true)
                // setTimeout(() => {
                //     IsHiddenFunction();
                // }, 1000);
            } else {
                console.error('Failed to create product');
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            setUploading(true);
            if (selectedFile) {
                console.log(selectedFile)
                const client = new UploadClient({ publicKey: '58cf3618f4fe8e8e6376' });
                const file = await client.uploadFile(selectedFile);
                if (file.uuid) {
                    setimageuuid(file.uuid);
                }

            }
            const uploadcareSimpleAuthSchema = new UploadcareSimpleAuthSchema({
                publicKey: '58cf3618f4fe8e8e6376',
                secretKey: '4f5ef1795de6edd7fd0e',
            });

            const result = await listOfFiles({}, { authSchema: uploadcareSimpleAuthSchema });

            if (fileInputRef.current) {
                fileInputRef.current.value = ''
            }

        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div>
            {/* w-5/6  */}
            <button
                type="button"
                id="createProductButton"
                data-modal-toggle="createProductModal"
                onClick={IsHiddenFunction}
                className="flex items-center justify-center gap-2 text-primary-700 bg-primary-100 hover:bg-primary-200 font-bold focus:ring-4 focus:ring-primary-300  transition-all ease-in rounded-md text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >
                <ImagePlus size={17} />
                Add product
            </button>




            <div
                id="createProductModal"
                tabIndex={-1}
                aria-hidden="true"
                className={`${isHidden && 'hidden'}  overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] bg-black bg-opacity-60 md:h-full`}
            >
                <div className="relative m-auto p-4 w-11/12 h-full md:h-auto">
                    {/* Modal content */}
                    <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                        {/* Modal header */}
                        <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Add Products
                            </h3>
                            <button
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-toggle="createProductModal"
                                onClick={IsHiddenFunction}
                            >
                                <svg
                                    aria-hidden="true"
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="sr-only"  >Close modal</span>
                            </button>
                        </div>
                        {/* Modal body */}
                        {Thankyou ? <Success title={'product'} /> :
                        <form onSubmit={handleSubmit}>
                            <div className="grid gap-4 mb-4 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start"
                                    >
                                        Product Name
                                    </label>
                                    <input
                                        id="productName"
                                        name="productName"
                                        value={name}
                                        onChange={handleNameChange}
                                        type="text"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Type product name"
                                        required=""
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="category"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start"
                                    >
                                        Category
                                    </label>
                                    <select
                                        id="categorySelect"
                                        value={categoryfield}
                                        onChange={handleCategoryChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    >
                                        <option value="">Select a category</option>
                                        {categories.map((cat) => (
                                            <option key={cat._id} value={cat._id}>
                                                {cat.name}
                                            </option>
                                        ))}

                                    </select>
                                </div>
                                <div className='mt-2'>
                                    <label
                                        htmlFor="stock"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white  text-start"
                                    >
                                        Stock
                                    </label>
                                    <input
                                        onChange={handleStockChange}
                                        value={stock}
                                        type="number"
                                        name="stock"
                                        id="stock"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="12"
                                        required=""
                                    />
                                </div>
                                <div className='mt-2'>
                                    <label
                                        htmlFor="price"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white  text-start"
                                    >
                                        Price
                                    </label>
                                    <input
                                        name="productName"
                                        value={price}
                                        onChange={handlePriceChange}
                                        type="number"
                                        id="price"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="$2999"
                                        required=""
                                    />
                                </div>


                            </div>

                            <div className="mb-4 grid grid-cols-2 gap-5">
                                <section className='w-full  mt-4'>
                                    <div className="">
                                        <label
                                            htmlFor="description"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start"
                                        >
                                            Description
                                        </label>
                                        <textarea
                                            id="productName"
                                            name="productName"
                                            value={description}
                                            onChange={handleDescriptionChange}
                                            rows={12}
                                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="Write product description here"
                                            defaultValue={""}
                                        />
                                    </div>
                                </section>
                                <section className='w-full mt-4'>
                                    <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start">
                                        Product Image
                                    </span>
                                    <div className="flex flex-col justify-center items-center w-full ">
                                        <label
                                            htmlFor="imageUpload"
                                            className="flex flex-col  justify-center items-center w-full h-[260px] bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"

                                        >
                                            {selectedFile ? (
                                                <div className='flex flex-col justify-center items-center'>
                                                    <svg
                                                        aria-hidden="true"
                                                        className="mb-3 w-10 h-10 text-gray-400"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                                        />
                                                    </svg>
                                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                                        <span className="text-blue-500">
                                                            {selectedFile.name}
                                                        </span>
                                                        &nbsp; selected
                                                    </p>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                                        SVG, PNG, JPG or GIF
                                                    </p>
                                                </div>

                                            ) : (

                                                <div className='flex flex-col justify-center items-center'>
                                                    <svg
                                                        aria-hidden="true"
                                                        className="mb-3 w-10 h-10 text-gray-400"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                                        />
                                                    </svg>
                                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                                        <span className="font-semibold">Click to upload </span>
                                                        or drag and drop
                                                    </p>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                                                    </p>
                                                </div>
                                            )}
                                        </label>
                                        <input
                                            type="file"
                                            id="imageUpload"
                                            accept="image/*"
                                            onChange={handleFileChange}
                                            ref={fileInputRef}
                                            className="hidden"
                                        />

                                    </div>
                                </section>
                            </div>
                            <div className="items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                                <button
                                    disabled={uploading || !selectedFile}
                                    type="submit"
                                    className="w-full sm:w-auto justify-center text-white inline-flex bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                    {uploading ?
                                        <div>
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
                                            Adding  ...
                                        </div> : 'Add Product'}
                                </button>

                                <button
                                    onClick={IsHiddenFunction}
                                    data-modal-toggle="createProductModal"
                                    type="button"
                                    className="w-full justify-center sm:w-auto text-gray-500 inline-flex items-center bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                                >
                                    <svg
                                        className="mr-1 -ml-1 w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Discard
                                </button>
                            </div>
                            </form>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateProductButton