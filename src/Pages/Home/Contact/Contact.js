import React from 'react';
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const Contact = () => {
    return (
        <div className="hero " style={{ backgroundImage: `url(${appointment})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-white ">
                <div className="my-6">
                    <p>Contact Us</p>
                    <h1 className="mb-5 text-3xl ">Stay Connected With You</h1>
                    <div className='m-6'>
                        <input type="email" placeholder="Enter Email" className="input input-bordered w-96 mb-2 p-2" /> <br />
                        <input type="text" placeholder="Subject" className="input input-bordered mb-2 w-96 p-2"  /> <br />
                        <textarea className="textarea textarea-accent p-8 w-96" placeholder="Message"></textarea> <br />
                    </div>
                    <PrimaryButton>Submit</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Contact;