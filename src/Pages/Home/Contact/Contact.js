import React from 'react';
import bg from '../../../assets/images/appointment.png';
const Contact = () => {
    return (
        <section
            className='grid justify-items-center mt-[149px] lg:h-[604px] h-[634px]'
            style={{background:`url(${bg})`,
                 backgroundSize: 'cover'}}
        >
            <div className='lg:mt-[60px] md:mt-[40px] mt-[30px] px-3'>
                <h1 className='text-center text-primary text-[22px] '>Contact Us</h1>
                <p className='text-[36px] text-white mt-[10px] text-center'>Stay Connected With Us</p>
            </div>
            <div className="card  lg:h-[468px] text-white-content align-middle mt-[12px]">
                <form className='flex flex-col items-center '>
                <input type="text" placeholder="Email Address" className="input input-bordered input-primary w-[450px] sm:input-sm md:input-md input-lg max-w-xs focus:outline-none" />
                <br/>
                <input type="text" placeholder="Subject" className="input input-bordered input-primary w-[450px]  sm:input-sm md:input-md input-lg max-w-xs focus:outline-none" />
                <br/>
                <textarea placeholder="Your Message" className="textarea textarea-primary textarea-bordered textarea-lg w-full h-[136px] max-w-xs focus:outline-none" ></textarea>
                <input type='submit' value="Submit" className='btn btn-primary text-white mt-[35px] w-[120px]'/>
                </form>
                
            </div>
            
        </section>
    );
};

export default Contact;