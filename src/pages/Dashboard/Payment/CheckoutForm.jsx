import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useGetCart from "../../../Hooks/useGetCart";
import useAuth from "../../../Hooks/useAuth";
// import { utcToZonedTime } from "date-fns-tz";
import { Swal } from 'sweetalert2';
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const { user } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");
  const [clientSecret, setClientSecret] = useState(null);
  const axiosSecure = useAxiosSecure();
  const [cart, refetch] = useGetCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const stripe = useStripe();
  const elements = useElements();
  const currentDate = new Date();
  const navigate = useNavigate();
  // console.log(utcToZonedTime(currentDate, "UTC"));

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

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

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: `${user?.displayName}` || "Anonymous",
            email: `${user?.email}` || "Anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirm error: ", confirmError);
      setErrorMessage(confirmError.message);
    } else {
      console.log("payment intent: ", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log(paymentIntent.id);
      }
    }

    const payment = {
      email: user?.email,
      price: totalPrice,
      date: new Date(),
      transactionId: paymentIntent.id,
      cartIds: cart.map((item) => item._id),
      menuItemIds: cart.map((item) => item.itemId),
      status: "Processing",
    };

    const res = await axiosSecure.post("/payments", payment);
    console.log("Payment done: ", res);

    // show success message
    refetch();
    if (res.data?.paymentResult?.insertedId) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Thank you for the taka paisa",
        showConfirmButton: false,
        timer: 1500,
      });
      // navigate("/dashboard/paymentHistory");
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
        disabled={!stripe || !clientSecret}
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
