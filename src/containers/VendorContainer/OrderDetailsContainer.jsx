/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { selectExchangeRate } from '../../toolkit/Slices/CompareSlice';
import { useSelector } from 'react-redux';

const OrderDetailsContainer = ({ orderDetails, onClose }) => {
  const ExchangeRate = useSelector(selectExchangeRate);

  return (
    <div className="order-details-modal p-8 bg-white rounded-md shadow-md">
      <p className="text-lg font-semibold mb-4">Order Details</p>

      <div className="mb-4">
        <p className="font-bold">Order ID:</p>
        <p>{orderDetails._id}</p>
      </div>

      <div className="mb-4">
        <p className="font-bold">Total Cost:</p>
        <p>${orderDetails.totalCost}</p>
      </div>

      <div className="mb-4">
        <p className="font-bold">Payment Method:</p>
        <p>{orderDetails.paymentMethod}</p>
      </div>

      <div className="mb-4">
        <p className="font-bold">Status:</p>
        <p>{orderDetails.status}</p>
      </div>

      <div className="mb-4">
        <p className="font-bold">Created At:</p>
        <p>{orderDetails.createdAt}</p>
      </div>

      <div className="mb-4">
        <p className="font-bold">Updated At:</p>
        <p>{orderDetails.updatedAt}</p>
      </div>

      <div className="mb-4">
        <p className="font-bold">Products:</p>
        <ul>
          {orderDetails.products.map((product) => (
            <li key={product._id} className="mb-4">
              <div className="mb-2">
                <p className="font-bold">Name:</p>
                <p>{product.name}</p>
              </div>
              <div className="mb-2">
                <p className="font-bold">Description:</p>
                <p>{product.description}</p>
              </div>
              <div className="mb-2">
                <p className="font-bold">Price:</p>
                <p>{ExchangeRate ? ExchangeRate.code : 'USD'} {ExchangeRate ? (ExchangeRate.value * product.price).toFixed(0) : product.price}</p>
              </div>
              {/* <div className="mb-2">
                <p className="font-bold">Image:</p>
                <img src={product.image} alt={product.name} className="w-16 h-16" />
              </div> */}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <p className="font-bold">Customer Information:</p>
        <ul>
          <li>First Name: {orderDetails.customerInfo.firstName}</li>
          <li>Last Name: {orderDetails.customerInfo.lastName}</li>
          <li>Company Name: {orderDetails.customerInfo.companyName}</li>
          {/* <li>Country: {orderDetails.customerInfo.country.label}</li> */}
          <li>Street Address: {orderDetails.customerInfo.streetAddress}</li>
          {/* <li>City: {orderDetails.customerInfo.city}</li> */}
          {/* <li>State: {orderDetails.customerInfo.state.label}</li> */}
          <li>Zip Code: {orderDetails.customerInfo.zipCode}</li>
          <li>Phone Number: {orderDetails.customerInfo.phoneNumber}</li>
          <li>Email Address: {orderDetails.customerInfo.emailAddress}</li>
          {/* <li>Username: {orderDetails.customerInfo.username}</li> */}
          <li>Order Notes: {orderDetails.customerInfo.orderNotes}</li>
        </ul>
      </div>

      <button
        className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-all duration-300"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  );
};

export default OrderDetailsContainer;
