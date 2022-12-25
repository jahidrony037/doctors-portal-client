import React from 'react';
import Button from '../Shared/Button';

const TermsCard = ({treatment}) => {

    return (
        <div className='lg:px-10  mt-5' >
            <div className="hero min-h-screen ">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={treatment.img} className="lg:max-w-lg w-[320px]  rounded-lg shadow-2xl" />
                        <div className='lg:px-36'>
                            <h1 className="text-5xl font-bold">{treatment.title}</h1>
                            <p className="py-6">{treatment.description}</p>
                           <Button>Get Started</Button>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default TermsCard;