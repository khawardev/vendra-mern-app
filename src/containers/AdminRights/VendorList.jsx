import { useEffect, useState , useRef} from 'react';
import { MdOutlineDeleteSweep } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";
import Swal from "sweetalert2";
import "datatables.net-dt";
import "datatables.net-dt/css/jquery.dataTables.css";
import $ from "jquery";
import jszip from "jszip";
// import pdfMake from "pdfmake/build/pdfmake";
// import pdfFonts from "pdfmake/build/vfs_fonts";
import 'datatables.net-buttons-dt/css/buttons.dataTables.css';
import 'datatables.net-buttons/js/dataTables.buttons.min.js';
import 'datatables.net-buttons/js/buttons.html5.min.js';
import 'datatables.net-buttons/js/buttons.print.min.js';
import 'datatables.net-buttons/js/buttons.colVis.min.js'; // For Excel button
const VendorList = () => {
  const [vendors, setVendors] = useState([]);
  const tableRef = useRef(null);
  useEffect(() => {
    fetch('http://localhost:5000/api/vendor/getallvendors') // Make sure the endpoint is correct
      .then((res) => res.json())
      .then((data) => {
        setVendors(data.data);
      })
      .catch((error) => {
        console.error('Error fetching vendors:', error);
      });
  }, []);
  // Function to handle approval status change
  const handleApprovalChange = (vendorId, isApproved) => {
    // Make a request to update the approval status
    // You can use fetch or your preferred HTTP library (axios, etc.)
    fetch(`http://localhost:5000/api/vendor/updateApproval/${vendorId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ isApproved: !isApproved }),
    })
      .then((res) => res.json())
      .then((data) => {
        // Update the state or perform any other actions
        // based on the response from the server
        if (data.status === 'ok') {
          // Update the vendors state or perform any other actions
          // based on the updated data
          setVendors((prevVendors) =>
            prevVendors.map((vendor) =>
              vendor._id === vendorId ? { ...vendor, isApproved: !isApproved } : vendor
            )
          );
        } else {
          console.error('Failed to update approval status:', data.error);
        }
      })
      .catch((error) => {
        console.error('Error updating approval status:', error);
      });
  };

  useEffect(() => {
    if (!tableRef.current) return;
    $(tableRef.current).DataTable({
        paging: true,
        searching: true,
        dom: "lBfrtip",
        buttons: ["copy", "excel", "pdf", "print"],
    });
}, [vendors]);
const logOut = () => {
  window.localStorage.clear();
  window.location.href = "/account";
};
// function initializeDataTable() {
//   if (tableRef.current) {
//       if ($.fn.DataTable.isDataTable(tableRef.current)) {
//           $(tableRef.current).DataTable().destroy();
//       }
//       $(tableRef.current).DataTable({
//           paging: true,
//           searching: true,
//           // ... other options
//       });
//   }
// }
return (
  <div className="relative overflow-x-auto bg-gray-100 rounded-2xl p-10 my-6">
      <div className="auth-inner" style={{ width: "auto" }}>
          <div className="flex justify-between items-center mb-4">
              <p className="my-4 text-2xl   font-extrabold ml-1">
                  <p className="my-4 text-2xl   font-extrabold ml-1"> Registered Vendors </p>
              </p>
              <button onClick={logOut} className="font-small bg-red-500 rounded py-1 px-2">
                  Logout
              </button>
          </div>

          {vendors.length === 0 ? (
              <p>No data available in table</p>
          ) : (
              <table ref={tableRef} className="w-full text-sm text-left">
                  <thead>
                      <tr>
                          <th className="px-6 py-4">ID</th>
                          <th className="px-6 py-4">USERNAME</th>
                          <th className="px-6 py-4">EMAIL</th>
                          <th className="px-6 py-4">PASSWORD</th>
                          <th className="px-6 py-4">STATUS</th>
                          <th className="px-6 py-4">ACTION</th>
                      </tr>
                  </thead>
                  <tfoot>
                      <tr>
                          <th className="px-6 py-4">ID</th>
                          <th className="px-6 py-4">USERNAME</th>
                          <th className="px-6 py-4">EMAIL</th>
                          <th className="px-6 py-4">PASSWORD</th>
                          <th className="px-6 py-4">STATUS</th>
                          <th className="px-6 py-4">ACTION</th>
                      </tr>
                  </tfoot>
                  <tbody>
                      {vendors.map((vendor, index)  => (
                          <tr
                              key={vendor._id}
                              className={index % 2 === 0 ? "bg-gray-200" : ""}
                          >
                              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                  {vendor._id}
                              </td>
                              <td className="px-6 py-4">{vendor.username}</td>
                              <td className="px-6 py-4">{vendor.email}</td>
                              <td className="px-6 py-4">{vendor.password}</td>
                              <td>{vendor.isApproved ? 'Approved' : 'Pending Approval'}</td>
                <td>
                  {vendor.isApproved ? (
                    <button className="font-small bg-red-500 rounded py-1 px-2" onClick={() => handleApprovalChange(vendor._id, vendor.isApproved)}>
                      Revoke Approval
                    </button>
                  ) : (
                    <button className="font-small bg-green-500 rounded py-1 px-2" onClick={() => handleApprovalChange(vendor._id, vendor.isApproved)}>
                      Approve
                    </button>
                  )}
                </td>
                              {/* <td className="text-white flex px-6 py-3 gap-2">
                                  <button
                                      href="#"
                                      className="font-medium bg-red-500 rounded py-1 px-3"
                                      onClick={() => deleteUser(vendor._id, vendor.username)}
                                  >
                                      <span className="flex justify-between items-center gap-1">
                                          {" "}
                                          <MdOutlineDeleteSweep size={18} /> Delete
                                      </span>
                                  </button>
                              </td> */}
                          </tr>
                      ))}
                  </tbody>
              </table>
          )}
      </div>
  </div>
);
};
export default VendorList;
