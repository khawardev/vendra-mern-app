/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState, useRef } from "react";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";
import Swal from "sweetalert2";
import "datatables.net-dt";
import "datatables.net-dt/css/jquery.dataTables.css";
import $ from "jquery";
import jszip from "jszip";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import 'datatables.net-buttons-dt/css/buttons.dataTables.css';
import 'datatables.net-buttons/js/dataTables.buttons.min.js';
import 'datatables.net-buttons/js/buttons.html5.min.js';
import 'datatables.net-buttons/js/buttons.print.min.js';
import 'datatables.net-buttons/js/buttons.colVis.min.js'; // For Excel button
// For PDF butto
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import EditProduct from './EditProduct'; // Update the path as per your folder structure

export default function Rightbar({ productData }) {
    //setting state
    const [data, setData] = useState([]);
    const tableRef = useRef(null);
    const [editProductId, setEditProductId] = useState(null); // Update the variable name

    // Initialize data tables in the useEffect hook

    //   //fetching all user
    //   const getAllUser = () => {

    //   };
    const handleEdit = (product) => {
        setEditProductId(product._id);
    };

    const getAllProduct = () => {
        fetch("http://localhost:5000/api/products", {
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "productData");
                setData(data.data);
            });
    };

    useEffect(() => {
        fetch("http://localhost:5000/api/products", {
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "productData");

                // Set the data directly to the state variable
                setData(data);

                // Initialize DataTable when data is available
                initializeDataTable();
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);
    useEffect(() => {
        fetch("http://localhost:5000/api/categories", {
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "categoriesData");

                // Set the data directly to the state variable
                setData(data);

                // Initialize DataTable when data is available
                initializeDataTable();
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);
    useEffect(() => {
        if (!tableRef.current) return;

        // Destroy DataTable if already initialized
        if ($.fn.DataTable.isDataTable(tableRef.current)) {
            $(tableRef.current).DataTable().destroy();
        }

        // Initialize DataTable
        $(tableRef.current).DataTable({
            paging: true,
            searching: true,
            dom: "lBfrtip", // Add 'B' to enable buttons
            buttons: [
                "copy",
                "excel",
                "pdf",
                "print", // Specify which buttons to display
            ],

            // Other DataTable options
        });
    }, [data]);

    // Initialize DataTable when data changes

    //deleting user
    const deleteProduct = (id, name) => {
        console.log("Button Clicked");

        if (window.confirm(`Are you sure you want to delete ${name}`)) {
            console.log("Entering");
            fetch("http://localhost:5000/api/deleteProducts", {
                method: "POST",
                crossDomain: true,
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify({
                    productid: id,
                }),
            })
                .then((res) => {
                    if (res.status === 200) {
                        return res.json();
                    } else {
                        throw new Error(`Failed to delete product: ${res.status}`);
                    }
                })
                .then((data) => {
                    if (data.status === "Ok") {
                        Swal.fire("Successfully Deleted", "success");

                    } else {
                        Swal.fire("Deletion Failed", "error");
                    }
                })
                .catch((error) => {
                    console.error("Error deleting product:", error);
                });
        }
    };

    const logOut = () => {
        window.localStorage.clear();
        window.location.href = "/account";
    };
    function initializeDataTable() {
        if (tableRef.current) {
            if ($.fn.DataTable.isDataTable(tableRef.current)) {
                $(tableRef.current).DataTable().destroy();
            }
            $(tableRef.current).DataTable({
                paging: true,
                searching: true,
                // ... other options
            });
        }
    }
    return (
        <div className="relative overflow-x-auto bg-gray-100 rounded-2xl p-8">
            <div className="auth-inner" style={{ width: "auto" }}>
                <p className="my-4 text-2xl font-extrabold ml-1"> Product Details <span><button onClick={logOut} className="font-small bg-green-500 rounded py-1 px-2"  >Logout</button></span> </p>
                <button></button>
                {data.length === 0 ? (
                    <p>Currently No Product add in database</p>
                ) : (
                    <table ref={tableRef} className="w-full text-sm text-left">
                        <thead>
                            <tr>
                                <th className="px-6 py-4">Porduct ID</th>
                                <th className="px-6 py-4">Product Name</th>
                                <th className="px-6 py-4">Product Discription</th>
                                <th className="px-6 py-4">Product Price</th>
                                <th className="px-6 py-4">Catagory ID</th>
                                <th scope="col" className="px-6 py-3">
                                    ACTION
                                </th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th className="px-6 py-4">Porduct ID</th>
                                <th className="px-6 py-4">Product Name</th>
                                <th className="px-6 py-4">Product Discription</th>
                                <th className="px-6 py-4">Product Price</th>
                                <th className="px-6 py-4">Catagory ID</th>
                                <th scope="col" className="px-6 py-3">
                                    ACTION
                                </th>

                            </tr>
                        </tfoot>
                        <tbody>
                            {data.map((product, index) => (
                                <tr
                                    key={product._id}
                                    className={index % 2 === 0 ? "bg-gray-200" : ""}
                                >
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        {product._id}
                                    </td>
                                    <td className="px-6 py-4">{product.name}</td>
                                    <td className="px-6 py-4">{product.description}</td>
                                    <td className="px-6 py-4">{product.price}</td>
                                    <td className="px-6 py-4">{product.category}</td>
                                    <td className="text-white flex px-6 py-3 gap-2">
                                        <button
                                            href="#"
                                            className="font-medium bg-blue-500 rounded py-1 px-3"
                                            onClick={() => handleEdit(product)} // Add handleEdit function
                                        >
                                            <span className="flex justify-between items-center gap-2">
                                                {" "}
                                                <BiEditAlt size={16} /> Edit
                                            </span>
                                        </button>
                                        <button
                                            href="#"
                                            className="font-medium bg-red-500 rounded py-1 px-3"
                                            onClick={() => deleteProduct(product._id, product.name)}
                                        >
                                            <span className="flex justify-between items-center gap-1">
                                                {" "}
                                                <MdOutlineDeleteSweep size={18} /> Delete
                                            </span>
                                        </button>
                                    </td>
                                    {/* Conditional rendering of the EditProduct component */}
                                    {editProductId === product._id && (
                                        <td colSpan="6">
                                            <EditProduct
                                                product={product}
                                                onClose={() => setEditProductId(null)} // Close edit form function
                                            />
                                        </td>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}