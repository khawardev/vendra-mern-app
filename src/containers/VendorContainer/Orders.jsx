/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState, useRef } from "react";
import { BiEditAlt } from "react-icons/bi";
import Swal from "sweetalert2";
import "datatables.net-dt";
import "datatables.net-dt/css/jquery.dataTables.css";
import $ from "jquery";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import 'datatables.net-buttons-dt/css/buttons.dataTables.css';
import 'datatables.net-buttons/js/dataTables.buttons.min.js';
import 'datatables.net-buttons/js/buttons.html5.min.js';
import 'datatables.net-buttons/js/buttons.print.min.js';
import 'datatables.net-buttons/js/buttons.colVis.min.js';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

export default function Order() {
    const [orderData, setOrderData] = useState([]);
    const tableRef = useRef(null);

    useEffect(() => {
        // Fetch order data from the server
        fetchOrders();
    }, []);

    useEffect(() => {
        if (!tableRef.current) return;

        if ($.fn.DataTable.isDataTable(tableRef.current)) {
            $(tableRef.current).DataTable().destroy();
        }

        $(tableRef.current).DataTable({
            paging: true,
            searching: true,
            dom: "lBfrtip",
            buttons: ["copy", "excel", "pdf", "print"],
        });
    }, [orderData]);

    const fetchOrders = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/orders");
            const orders = await response.json();
            setOrderData(orders);
        } catch (error) {
            console.error("Error fetching order data:", error);
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
                <p className="my-4 text-2xl font-extrabold ml-1">
                    Order Details{" "}
                    <span>
                        <button onClick={logOut} className="font-small bg-red-500 rounded py-1 px-2">
                            Logout
                        </button>
                    </span>{" "}
                </p>
                {Array.isArray(orderData) && orderData.length === 0 ? (
                    <p>No orders available.</p>
                ) : (
                    <table ref={tableRef} className="w-full text-sm text-left">
                        <thead>
                            <tr>
                                <th className="px-6 py-4">Order ID</th>
                                <th className="px-6 py-4">Total Cost</th>
                                <th className="px-6 py-4">Payment Method</th>
                                <th className="px-6 py-4">Product Names</th>
                                <th className="px-6 py-4">Status</th>
                                <th scope="col" className="px-6 py-3">
                                    ACTION
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderData.map((order, index) => (
                                <tr
                                    key={order._id}
                                    className={`${index % 2 === 0 ? "bg-gray-200" : ""} border-b border-gray-300`}
                                >
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        {order._id}
                                    </td>
                                    <td className="px-6 py-4">${order.totalCost}</td>
                                    <td className="px-6 py-4">{order.paymentMethod}</td>
                                    <td className="px-6 py-4">{order.products.map(product => product.name).join(", ")}</td>
                                    <td className="px-6 py-4">{order.status}</td>
                                    <td className="text-white flex px-6 py-3 gap-2">
                                        <button
                                            href="#"
                                            className="font-medium bg-blue-500 rounded py-1 px-3"
                                        >
                                            <span className="flex justify-between items-center gap-2">
                                                {" "}
                                                <BiEditAlt size={16} /> View
                                            </span>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}
