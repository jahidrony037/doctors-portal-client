import React from 'react';

const Review = ({review}) => {
    return (
        <section>
                <div className="card lg:max-w-lg bg-slate-100 text-neutral-content">
                    <div className="card-body items-center text-center text-black">
                        <p>{review.review}</p>
                        <div className="flex justify-center items-center mt-[38px]">
                           
                                <div className="avatar">
                                    <div className="w-[75px] rounded-full ring ring-cyan-400 ring-offset-base-100 ring-offset-2">
                                        <img src={review.img} alt="img" />
                                    </div>
                                </div>
                           
                                <div className='px-4'>
                                    <h3 className='font-bold text-xl'>{review.name}</h3>
                                    <p>{review.location}</p>
                                </div>
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default Review;