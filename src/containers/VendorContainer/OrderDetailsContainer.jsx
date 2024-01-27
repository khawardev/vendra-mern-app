// OrderDetailsContainer.jsx
import React from "react";

const OrderDetailsContainer = ({ orderDetails, onClose }) => {
  // Implement rendering of order details here

  return (
    <div className="order-details-modal">

      <p>Order ID: {orderDetails._id}</p>
      <p>Total Cost: ${orderDetails.totalCost}</p>
      <p>Payment Method: {orderDetails.paymentMethod}</p>
      <p>Status: {orderDetails.status}</p>
      <p>Created At: {orderDetails.createdAt}</p>
      <p>Updated At: {orderDetails.updatedAt}</p>

      <div>
        <p>Products:</p>
        <ul>
          {orderDetails.products.map((product) => (
            <li key={product._id}>
              <p>Name: {product.name}</p>
              <p>Description: {product.description}</p>
              <p>Price: ${product.price}</p>
              <img src={product.image} alt={product.name} />
              {/* Add more details as needed */}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button
          className="font-small bg-red-500 rounded py-1 px-2"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
    
  );
};

export default OrderDetailsContainer;
