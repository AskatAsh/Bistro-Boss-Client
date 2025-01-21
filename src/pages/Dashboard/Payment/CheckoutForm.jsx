import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useGetCart from "../../../Hooks/useGetCart";

const CheckoutForm = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [clientSecret, setClientSecret] = useState(null);
  const axiosSecure = useAxiosSecure();
  const [cart] = useGetCart();
  const totalPrice = cart.reduce( (total, item) => total + item.price , 0);

  const stripe = useStripe();
  const elements = useElements();

  useEffect( () => {
    axiosSecure.post('/create-payment-intent', {price: totalPrice})
    .then(res => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
    })
  }, [axiosSecure, totalPrice])

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("Error: ", error);
        setErrorMessage(error.message);
    } else {
      console.log("Payment Method: ", paymentMethod);
        setErrorMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto w-full">
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn btn-md w-full text-lg bg-darkgold text-white my-8"
        type="submit"
        disabled={!stripe}
      >
        Pay
      </button>
      <p className="text-red-600">{errorMessage}</p>
      {/* {transactionId && (
        <p className="text-green-600"> Your transaction id: {transactionId}</p>
      )} */}
    </form>
  );
};

export default CheckoutForm;
