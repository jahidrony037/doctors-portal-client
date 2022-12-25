import React from 'react';
import bg from '../../assets/images/bg.png';
import chair from '../../assets/images/chair.png';
import Button from '../Shared/Button';
const Banner = () => {
   
    return (
        <div className="hero min-h-screen"
            style={{background:`url(${bg})`,
                    backgroundSize:'cover'}}
            >
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="lg:max-w-lg w-[320px] rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                    {/* <button className="btn btn-accent uppercase font-bold text-white px-[15px] py-[14px]bg-gradient-to-r from-green-400 to-blue-500">Get Started</button> */}
                    <Button>GET STARTED1</Button>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;