import React from 'react';
import cavity from '../../assets/images/cavity.png';
import fluoride from '../../assets/images/fluoride.png';
import treatmentImg from '../../assets/images/treatment.png';
import whitening from '../../assets/images/whitening.png';
import Service from './Service';
import TermsCard from './TermsCard';
const Services = () => {
    const services = [
        {
            _id:1,
            name:'Fluoride Treatment',
            description:'',
            img:fluoride
        },
        {
            _id:2,
            name:'Cavity Filling',
            description:'',
            img:cavity
        },
        {
            _id:3,
            name:'Teeth Whitening',
            description:'',
            img:whitening
        },
    ]

    const treatment = [
        {
            title:'Exceptional Dental Care, on Your Terms',
            description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page",
            img:treatmentImg
        }
    ]
    return (
        <div className='mt-[131px]'>
            <div className='text-center'>
            <h3 className='font-bold text-cyan-400 uppercase text-xl'>Our Services</h3>
            <h2 className='text-2xl'>Services We Provide</h2>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10'>
                {
                    services.map( service => <Service key={service._id} service={service}/>)
                }
            </div>
            <div>
                <TermsCard treatment={treatment[0]} />
            </div>
        </div>
    );
};

export default Services;