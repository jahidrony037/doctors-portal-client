import React from 'react';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const Info = () => {
    return (
        <div className='self-center grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] lg:gap-6 lg:px-10'>
            <InfoCard cardTitle={"Opening Hours"} img={clock} bgClass="bg-gradient-to-r from-cyan-400 to-green-500"/>
            <InfoCard cardTitle={"Visit our location"} img={marker} bgClass="bg-neutral"/>
            <InfoCard cardTitle={"Contact us now"} img={phone} bgClass="bg-gradient-to-r from-green-400 to-cyan-500"/>
        </div>
    );
};

export default Info;