import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Exceptional = ({treatment}) => {
    const {img,description,title}=treatment;
    return (
        <div className='lg:px-10  mt-5' >
            <div className="hero min-h-screen ">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={img} className="lg:max-w-lg lg:w-[450px]  rounded-lg shadow-2xl" />
                        <div className='lg:px-36'>
                            <h1 className="text-5xl font-bold">{title}</h1>
                            <p className="py-6">{description}</p>
                            <div className="card-actions justify-start">
                                <PrimaryButton>Listen</PrimaryButton>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Exceptional;