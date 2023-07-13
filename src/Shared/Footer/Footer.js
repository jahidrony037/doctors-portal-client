import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../assets/images/footer.png';
const Footer = () => {
    return (
        <footer className="p-10 lg:h-[407px]"
        style={{background:`url(${footer})`,
                backgroundSize:'cover',
                backgroundRepeat:'no-repeat'}}      
        >
                    <div className='footer justify-between'>
                        <div>
                            <span className="footer-title">Services</span> 
                            <Link className="link link-hover">Emergency Checkup</Link>
                            <Link className="link link-hover">Monthly Checkup</Link>
                            <Link className="link link-hover">Weekly Checkup</Link>
                            <Link className="link link-hover">Deep Checkup</Link>
                        </div> 
                        <div>
                            <span className="footer-title">ORAL HEALTH</span> 
                            <Link className="link link-hover">Fluoride Treatment</Link>
                            <Link className="link link-hover">Cavity Filling</Link>
                            <Link className="link link-hover">Teeth Whitening</Link>
                            
                        </div> 
                        <div>
                            <span className="footer-title">OUR ADDRESS</span> 
                            <Link className="link link-hover">Dhaka - 101010 Hudson</Link>
                        </div>
                    </div>
                    <div className='my-16 text-center'>
                        <p>Copyright © 2022 - All right reserved</p>
                    </div>
        </footer>
    );
};

export default Footer;