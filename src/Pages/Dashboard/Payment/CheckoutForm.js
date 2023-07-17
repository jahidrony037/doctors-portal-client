import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
const CheckoutForm = ({ booking }) => {
  const { price,email,patient, _id } = booking;
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionID] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    //create PaymentIntent as soon as the page loads
    fetch(`http://localhost:5000/create-payment-intent`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      },

      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
      //console.log(clientSecret);
  }, [price]);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      //console.log('[error]', error);
      setCardError(error.message);
    } else {
      setCardError("");
       
    }

    setSuccess('');

    setProcessing(true);

    const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              name: patient,
              email: email
            },
          },
        },
      );

      if(confirmError){
        setCardError(confirmError.message);
        return;
      }
      //console.log("payment",paymentIntent);

      if(paymentIntent.status === "succeeded"){
            

            //store payment info in the database 
            const payment={
                price,
                transactionId: paymentIntent.id,
                email,
                bookingId: _id
            
            }
            fetch('http://localhost:5000/payments',{
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
            .then(res => res.json())
            .then(result => {
               // console.log(result);
                if(result.insertedId){
                    setSuccess('Congrats! your payment completed')
                    setTransactionID(paymentIntent.id);
                }
            } )
            
      }
      setProcessing(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
          type="submit"
          className="btn btn-primary btn-sm mt-5"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      <p className="text-red-500">{cardError}</p>
      {
        success && <div> 
            <p className="text-green-500">{success}</p>
            <p>Your TransactionID: <span className="font-bold">{transactionId}</span></p>
        </div>
      }
    </div>
  );
};

export default CheckoutForm;
