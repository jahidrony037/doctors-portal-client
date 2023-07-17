import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
//console.log(stripePromise);


const Payment = () => {
    const booking = useLoaderData();
   // const navigation = useNavigation();
    const {treatment,price,appointmentDate,slot} = booking;

    // if(navigation.state === "loading"){
    //     return <Loading/>
    // }
    return (
        <div>
            <h3 className='text-4xl text-primary text-center'>Payment for {treatment}</h3>
            <p className='text-2xl text-center mt-4'>Please Pay <strong>{price} TK</strong> for your appointment on <span className='text-red-400'>{appointmentDate}</span> at {slot}</p>

            <div className='w-96 mt-12 mx-auto my-0'>
            <Elements stripe={stripePromise}>
                <CheckoutForm booking={booking}/>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;