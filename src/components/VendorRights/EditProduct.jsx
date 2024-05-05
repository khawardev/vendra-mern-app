/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useRef, useEffect, useState } from 'react'
import { Context } from "../../context/AppContext";
import { useSelector } from 'react-redux';
import { selectProducts } from '../../toolkit/Slices/ProductsSlice'
import { useParams } from 'react-router-dom';
import { selectCategories } from '../../toolkit/Slices/CategoriesSlice'
import toast from 'react-hot-toast';
import { LuUploadCloud } from "react-icons/lu";
import { UploadClient } from '@uploadcare/upload-client';
import { listOfFiles, UploadcareSimpleAuthSchema } from '@uploadcare/rest-client';

const EditProduct = () => {
    const { productid } = useParams();
    const products = useSelector(selectProducts);
    const categories = useSelector(selectCategories);
    const [singleProduct, setSingleProduct] = useState(null);
    const [editedProduct, setEditedProduct] = useState(null);

    useEffect(() => {
        const productDetails = products?.find(item => item?._id === productid);
        setSingleProduct(productDetails);
        setEditedProduct(productDetails);
    }, [productid, products]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(value)
        console.log(name)
        setEditedProduct(prevProduct => ({
            ...prevProduct,
            [name]: value,
        }));
    };

    // const handleNewImageChange = (index) => {
    //     toast.success(<span style={{ fontWeight: 'bold' }}>Image Deleted</span>);

    //     const updatedImages = [...editedProduct.image];
    //     const updatedSingleProductImages = singleProduct.image.filter((_, i) => i !== index);
    //     updatedImages.splice(index, 1); // Remove the image at the specified index
    //     setSingleProduct(prevProduct => ({
    //         ...prevProduct,
    //         image: updatedSingleProductImages,
    //     }));

    //     setEditedProduct(prevProduct => ({
    //         ...prevProduct,
    //         image: updatedImages,
    //     }));
    // };

 
    const handleImageChange = (index) => {
        toast.success(<span style={{ fontWeight: 'bold' }}>Image Deleted</span>);

        const updatedImages = [...editedProduct.image];

        const updatedSingleProductImages = singleProduct.image.filter((_, i) => i !== index);
        setSingleProduct(prevProduct => ({
            ...prevProduct,
            image: updatedSingleProductImages,
        }));

        updatedImages.splice(index, 1); // Remove the image at the specified index
        setEditedProduct(prevProduct => ({
            ...prevProduct,
            image: updatedImages,
        }));
    };
    const filteredCategory = singleProduct ? categories.filter(category => category._id === singleProduct.category) : [];
    const filteredRelatedProducts = singleProduct ? products.filter(product => product.category === filteredCategory[0]?._id) : [];

    // const handleUpdate = (event) => {
    //     event.preventDefault();
    //     console.log("Updated Product:", editedProduct);
    // };

    const handleUpdate = (event) => {
        event.preventDefault();

        const { _id, ...productData } = editedProduct;
        fetch(`http://localhost:5000/api/updateProduct/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(editedProduct),
        })
            .then((response) => {
                    toast.success(<span style={{ fontWeight: 'bold' }}>Product updated successfully!</span>);
                return response.json();
            })
            .catch((error) => {
                console.error("Error updating product:", error);
                // Optionally display an error message or perform other actions
                toast.error(<span style={{ fontWeight: 'bold' }}>Error updating product!</span>);

            });
    };

   



    

    const [uploading, setUploading] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef(null);
    const [imageuuid, setimageuuid] = useState([]);


  

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
        }
    };

    const handleupload = async () => {
        try {
            setUploading(true);
            if (selectedFile) {
                const client = new UploadClient({ publicKey: '58cf3618f4fe8e8e6376' });
                const file = await client.uploadFile(selectedFile);
                if (file.uuid) {
                    setimageuuid(prevImageUuid => [...prevImageUuid, file.uuid]);
                    setEditedProduct(prevProduct => ({
                        ...prevProduct,
                        image: [...prevProduct.image, file.uuid],
                    }));
                    setUploading(false);
                    setSelectedFile(null);
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
        <form
            className='py-10' >
            <div className="relative m-auto p-4 w-11/12 h-full md:h-auto">
                <div className="relative p-4 bg-white rounded-lg  dark:bg-gray-800 sm:p-5">
                    <h5
                        id="drawer-label"
                        className="items-center mb-16 font-bold     text-4xl   text-center dark:text-gray-400"
                    >
                        Update Product
                    </h5>

                    <div className="grid gap-4 sm:grid-cols-3 sm:gap-6 ">
                        <div className="space-y-4 sm:col-span-2 sm:space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block mb-2 text-sm font-bold   text-gray-900 dark:text-white"
                                >
                                    Product Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Write product name here"
                                    value={editedProduct ? editedProduct.name : ''}
                                    onChange={handleInputChange}

                                    required=""
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="description"
                                    className="block mb-2 text-sm font-bold   text-gray-900 dark:text-white"
                                >
                                    Description
                                </label>
                                <div className="w-full border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                                    <div className="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">

                                        <button
                                            type="button"
                                            data-tooltip-target="tooltip-fullscreen"
                                            className="p-2 text-gray-500 rounded cursor-pointer sm:ml-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                                        >

                                            <span className="sr-only">Full screen</span>
                                        </button>
                                        <div
                                            id="tooltip-fullscreen"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-bold   text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                                            data-popper-reference-hidden=""
                                            data-popper-escaped=""
                                            data-popper-placement="bottom"
                                            style={{
                                                position: "absolute",
                                                inset: "0px auto auto 0px",
                                                margin: 0,
                                                transform: "translate3d(0px, 335px, 0px)"
                                            }}
                                        >
                                            Show full screen
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </div>
                                    <div className=" bg-white rounded-b-lg dark:bg-gray-800">
                                        <textarea
                                            id="description"
                                            rows={8}
                                            className=" p-2 block w-full text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                                            required=""
                                            placeholder="Write product description here"
                                            value={editedProduct ? editedProduct.description : ''}
                                            onChange={handleInputChange}
                                            name="description"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mb-4  ">
                                <span className="block mb-2 text-sm font-bold   text-gray-900 dark:text-white">
                                    Product Images
                                </span>
                                <div className="grid grid-cols-4 gap-4  ">
                                    {singleProduct?.image.map((image, index) => (
                                        <div key={index} className="relative rounded-lg ">
                                            <div>
                                                <img
                                                    className='mix-blend-multiply w-full rounded-lg border'
                                                    src={`https://ucarecdn.com/${image}/-/scale_crop/500x500/`}
                                                    alt={`Image ${index}`}
                                                />
                                                <button
                                                    type="button"
                                                    className="absolute text-red-600 dark:text-red-500 hover:text-red-500 dark:hover:text-red-400 p-2 bg-red-200 rounded-full left-3 bottom-3"
                                                    onClick={() => handleImageChange(index)}
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
                                                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    ))}

                                        {Array.isArray(imageuuid) && imageuuid.map((uuid, index) => (
                                            // <img
                                            //     key={index}

                                            //     className=' mix-blend-multiply rounded-lg border'
                                            //     src={`https://ucarecdn.com/${uuid}/`}
                                            //     alt={`Image ${index}`}
                                            // />
                                            <div key={index} className="relative rounded-lg ">
                                            <div>
                                                <img
                                                    className='mix-blend-multiply w-full rounded-lg border'
                                                        src={`https://ucarecdn.com/${uuid}/-/scale_crop/500x500/`}
                                                        alt={`Image ${index}`}
                                                        
                                                />
                                                {/* <button
                                                    type="button"
                                                    className="absolute text-red-600 dark:text-red-500 hover:text-red-500 dark:hover:text-red-400 p-2 bg-red-200 rounded-full left-3 bottom-3"
                                                        onClick={() => handleNewImageChange(index)}
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
                                                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </button> */}
                                            </div>
                                        </div>
                                            
                                        ))}


                                </div>

                            </div>


                        </div>
                        <div className="  flex flex-col justify-between ">
                            <div className=" space-y-4 sm:space-y-6">
                                <div>
                                    <label
                                        htmlFor="stock"
                                        className="block mb-2 text-sm font-bold   text-gray-900 dark:text-white  text-start"
                                    >
                                        Stock
                                    </label>
                                    <input
                                        type="number"
                                        name="stock"
                                        id="stock"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Write product stock here"
                                        value={editedProduct ? editedProduct.stock : ''}
                                        onChange={handleInputChange}
                                        required=""
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="price"
                                        className="block mb-2 text-sm font-bold   text-gray-900 dark:text-white  text-start"
                                    >
                                        Price
                                    </label>
                                    <input
                                        type="number"
                                        name="price"
                                        id="price"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Write product price here"
                                        value={editedProduct ? editedProduct.price : ''}
                                        onChange={handleInputChange}

                                        required=""
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="category"
                                        className="block mb-2 text-sm font-bold   text-gray-900 dark:text-white"
                                    >
                                        Category
                                    </label>
                                    <select onChange={handleInputChange} name="category" id="category" className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                        <option value={filteredCategory[0]?.id}>
                                            {filteredCategory[0]?.name}
                                        </option>
                                        {categories.map((cat) => (
                                            <option key={cat._id} value={cat._id}>
                                                {cat.name}
                                            </option>
                                        ))}

                                    </select>


                                </div>
                                <section className='w-full mt-4'>
                                    <div className=' flex justify-between items-center'>
                                        <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start">
                                            Product Image
                                        </span>
                                        <button disabled={uploading || !selectedFile || imageuuid?.length === 4 - singleProduct?.image.length } onClick={() => { handleupload() }} className=" mb-2 text-sm   hover:bg-blue-800 transition-all ease-in flex justify-center items-center gap-2 font-medium bg-blue-600 rounded-full px-3 py-1  text-white dark:text-white text-start">

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
                                                    uploading ...
                                                </div> : <> <LuUploadCloud stroke-width='3px' />Upload </>
                                            }



                                        </button>
                                    </div>
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
                                            disabled={imageuuid?.length === 4 - singleProduct?.image.length}
                                        />
                                    </div>
                                </section>

                                {/* <div className=' grid grid-cols-2 gap-3 w-full   '>

                                    {Array.isArray(imageuuid) && imageuuid.map((uuid, index) => (
                                        <img
                                            key={index}

                                            className='w-[80%] mix-blend-multiply rounded-2xl border'
                                            src={`https://ucarecdn.com/${uuid}/`}
                                            alt={`Image ${index}`}
                                        />
                                    ))}

                                </div> */}
                            </div>

                            <div className="w-full  flex items-center justify-between gap-3  mt-5 ">
                                <button
                                    onClick={handleUpdate}
                                    className="text-white w-full bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold   rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                    Update product
                                </button>

                            </div>


                        </div>
                    </div>

                </div>
            </div>
        </form>

    )
}

export default EditProduct