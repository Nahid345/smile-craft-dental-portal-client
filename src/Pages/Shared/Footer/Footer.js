import React from 'react';
import footer from '../../../assets/images/footer.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer 
          
        style={{
            background: `url(${footer})`,
            backgroundSize: 'cover'
        }}
        
        className=" p-10 ">
            <div className='footer'>
                <div>
                    <header className="footer-title">Services</header>
                    <Link to='/' className="link link-hover">Branding</Link>
                    <Link to='/' className="link link-hover">Design</Link>
                    <Link to='/' className="link link-hover">Marketing</Link>
                    <Link to='/' className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <header className="footer-title">Company</header>
                    <Link to='/' className="link link-hover">About us</Link>
                    <Link to='/' className="link link-hover">Contact</Link>
                    <Link to='/' className="link link-hover">Jobs</Link>
                    <Link to='/' className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <header className="footer-title">Legal</header>
                    <Link to='/' className="link link-hover">Terms of use</Link>
                    <Link to='/' className="link link-hover">Privacy policy</Link>
                    <Link to='/' className="link link-hover">Cookie policy</Link>
                </div>
            </div>

            <div className='text-center mt-32'>
            <p >Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
            </div>
        </footer>
    );
};

export default Footer;