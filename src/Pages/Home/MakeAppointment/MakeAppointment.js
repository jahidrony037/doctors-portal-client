import React from 'react';
import { Link } from 'react-router-dom';
import appointment from '../../../assets/images/appointment.png';
import doctor from '../../../assets/images/doctor.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section
         className='mt-20 flex justify-center items-center bg-cover '
         style={{background:`url(${appointment})`,
                 backgroundSize:'cover'}}
        >
            <div className='flex-1 hidden lg:block'>
                    <img className='mt-[-150px]' src={doctor} alt=""/>
            </div>
            <div className='lg:flex-1 p-5'>
                <h3 className='text-xl text-cyan-400 font-bold'>Appointment</h3>
                <h2 className='text-3xl py-[22px] text-white'>Make and Appointment Today</h2>
                <p className='text-white pb-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <PrimaryButton><Link to="/appointment">Appointment</Link></PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;