import React from 'react';
import bg from '../../assets/images/appointment.png';
import Button from './../Shared/Button';
const Contact = () => {
    return (
        <section
         className='grid justify-center items-center mt-[149px] lg:h-[604px]'
         style={{background:`url(${bg})`,
                 backgroundSize: 'cover'}}
        >
                    <div className="card w-[359px] lg:w-[450px] lg:h-[468px] text-white-content align-middle">
                        <div className="cards items-center text-center">
                            <h3 className='text-cyan-400 text-xl'>Contact Us</h3>
                            <h2 className='lg:text-3xl py-3 text-white'>Stay connected with us</h2>
                        </div>
                        <div className='items-center text-center mt-[20px]'>  
                            <input type="text" placeholder="Email Address" className="input input-bordered input-md lg:w-full max-w-xs h-[48px]" />
                            <input type="text" placeholder="Subject" className="input input-bordered input-md lg:w-full max-w-xs lg:h-[48px] my-[19px]" />

                            <textarea type="text" placeholder="Your Message" className="textarea textarea-info lg:w-full  max-w-xs h-[136px] lg:h-[136px] mb-[30px]" />
                            <Button>Submit</Button>
                        </div>
                    </div>
        </section>
    );
};

export default Contact;