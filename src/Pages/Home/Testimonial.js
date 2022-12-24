import React from 'react';
import quote from '../../assets/icons/quote.svg';
import pepole1 from '../../assets/images/people1.png';
import pepole2 from '../../assets/images/people2.png';
import pepole3 from '../../assets/images/people3.png';
import Review from './Review';
const Testimonial = () => {
    const reviews = [
        {
            _id:1,
            name: 'jahid rony',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img:pepole1,
            location:'Dhaka, Bangladesh'
        },
        {
            _id:2,
            name: 'jahid rony',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img:pepole2,
            location:'Dhaka, Bangladesh'
        },
        {
            _id:3,
            name: 'jahid rony',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img:pepole3,
            location:'Dhaka, Bangladesh'
        },
    ]
    return (
        <section className='mt-[84px]'>
            <div className='flex justify-between'>
                    <div>
                            <h3 className='font-bold text-cyan-400 text-xl'>Testimonial</h3>
                            <h2 className='text-3xl'>What Our Patients Says</h2>
                    </div>
                    <div>
                            <img className='lg:w-[192px] w-[98px]' src={quote} alt=''/>
                    </div>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 lg:mt-10'>
                        {
                        reviews.map(review => <Review
                                    key={review._id}
                                    review={review}
                        />)
                        }
            </div>
        </section>
    );
};

export default Testimonial;