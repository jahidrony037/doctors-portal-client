import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const booking = useLoaderData();
    const {treatment,price,appointmentDate,slot} = booking;
    return (
        <div>
            <h3 className='text-4xl text-primary text-center'>Payment for {treatment}</h3>
            <p className='text-2xl text-center mt-4'>Please Pay <strong>{price} TK</strong> for your appointment on <span className='text-red-400'>{appointmentDate}</span> at {slot}</p>
        </div>
    );
};

export default Payment;