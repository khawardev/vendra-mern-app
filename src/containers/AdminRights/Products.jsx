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
// import pdfMake from "pdfmake/build/pdfmake";
// import pdfFonts from "pdfmake/build/vfs_fonts";
import "datatables.net-buttons-dt/css/buttons.dataTables.css";
import "datatables.net-buttons/js/dataTables.buttons.min.js";
import "datatables.net-buttons/js/buttons.html5.min.js";
import "datatables.net-buttons/js/buttons.print.min.js";
import "datatables.net-buttons/js/buttons.colVis.min.js"; // For Excel button
// For PDF butto
// pdfMake.vfs = pdfFonts.pdfMake.vfs;
import EditProduct from "./EditProduct"; // Update the path as per your folder structure
import { selectExchangeRate } from '../../toolkit/Slices/CompareSlice';

export default function Rightbar() {
  //setting state
  const [data, setData] = useState([]);
  const tableRef = useRef(null);
  const [editProductId, setEditProductId] = useState(null); // Update the variable name
  const [productData, setProductData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const ExchangeRate = useSelector(selectExchangeRate);

  useEffect(() => {
    Promise.all([
      fetch("http://localhost:5000/api/products").then((res) => res.json()),
      fetch("http://localhost:5000/api/categories").then((res) => res.json()),
    ])
      .then(([productData, categoryData]) => {

        setProductData(productData);
        setCategoryData(categoryData);

        // Initialize DataTable when data is available
        initializeDataTable();
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Initialize DataTable when data changes
  useEffect(() => {
    if (!tableRef.current) return;

    // Destroy DataTable if already initialized
    if ($.fn.DataTable.isDataTable(tableRef.current)) {
      // $(tableRef.current).DataTable().destroy();
    }

    // Initialize DataTable
    $(tableRef.current).DataTable({
      paging: true,
      searching: true,
      dom: "lBfrtip", // Add 'B' to enable buttons
      buttons: ["copy", "excel", "pdf", "print"],
    });
  }, [productData, categoryData]);

  //edit product
  useEffect(() => {
    // Fetch product data and update state
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProductData(data))
      .catch((error) => console.error("Error fetching product data:", error));
  }, []);

  useEffect(() => {
    // Initialize DataTable when productData changes
    initializeDataTable();
  }, [productData]);

  const handleEdit = (product) => {
    setEditProductId(product._id);
  };

  const handleSaveProduct = (editedProduct) => {
    const { _id, ...productData } = editedProduct;
    fetch(`http://localhost:5000/api/updateProduct/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        // Update productData in state after successful save
        setProductData((prevProductData) =>
          prevProductData.map((product) =>
            product._id === _id ? editedProduct : product
          )
        );
        // Exit edit mode
        setEditProductId(null);
        // Optionally display a success message or perform other actions
        Swal.fire("Product updated successfully!", "", "success");
      })
      .catch((error) => {
        console.error("Error updating product:", error);
      });
  };

  //deleting user
  const deleteProduct = (id, name) => {
    console.log("id and name", id, name);
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
          if (res.ok) {
            return res.json();
          } else {
            throw new Error(`Failed to delete product: ${res.status}`);
          }
        })
        .then((data) => {
          if (data.status === "Ok") {
            Swal.fire("Successfully Deleted", "success");
            setProductData((prevData) =>
              prevData.filter((product) => product._id !== id)
            );
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
        <div className="flex justify-between items-center mb-4">
          <p className="my-4 text-2xl   font-extrabold ml-1">Product Details</p>

          <button
            onClick={logOut}
            className="font-small bg-red-500 rounded py-1 px-2"
          >
            Logout
          </button>
        </div>
        {
          Array.isArray(productData) && productData.length === 0 ? (
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
                {productData && Array.isArray(productData) && productData.length > 0 && productData.map((product, index) => (
                  <tr
                    key={product._id}
                    className={index % 2 === 0 ? "bg-gray-200" : ""}
                  >
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      {product._id}
                    </td>
                    <td className="px-6 py-4">{product.name}</td>
                    <td className="px-6 py-4">{product.description}</td>
                    <td className="px-6 py-4">{ExchangeRate ? ExchangeRate.code : 'USD'}{ExchangeRate ? (ExchangeRate.value * product.price).toFixed(0) : product.price}</td>
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
                    {editProductId && (
                      <EditProduct
                        product={productData.find(
                          (product) => product._id === editProductId
                        )}
                        onSave={handleSaveProduct}
                        onCancel={() => setEditProductId(null)}
                      />
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
