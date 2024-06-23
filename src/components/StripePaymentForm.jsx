// StripePayment.js
import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Swal from "sweetalert2";

const StripePayment = ({ onSuccessfulPayment }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      setLoading(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      Swal.fire({
        icon: "error",
        title: "Payment Failed",
        text: error.message,
      });
      setLoading(false);
    } else {
      // Call the backend to create a payment intent
      const response = await fetch("http://localhost:5000/api/payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ paymentMethodId: paymentMethod.id }),
      });

      const paymentIntent = await response.json();
      if (paymentIntent.error) {
        Swal.fire({
          icon: "error",
          title: "Payment Failed",
          text: paymentIntent.error.message,
        });
      } else {
        Swal.fire({
          icon: "success",
          title: "Payment Successful",
          text: "Your payment was successful.",
        }).then(() => {
          onSuccessfulPayment();
        });
      }
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe || loading}>
        {loading ? "Processing..." : "Pay"}
      </button>
    </form>
  );
};

export default StripePayment;
