import React from 'react';
import banner from '../../../assets/images/banner.jpg.jpg'
import './Banner.css';

const Banner = () => {
    return (

        <div className="hero bg-base-150" >

            <div className="hero-content flex justify-end items-end   flex-col lg:flex-row-reverse">
                <img src={banner} className="  max-w-sm rounded-lg shadow-2xl " alt='/' />
                <div className='mr-32'>
                    <h1 className="text-4xl font-bold text-black"><span className='text-blue-700'>Creating </span> vibrant smile <br /> for healthy  lifeStyles!</h1>
                    <p className="py-6">Life is short. Smile while you still have teeth.Teeth grow in your mouth like trees, <br /> but you can't climb them</p>
                    <button className="btn  bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                </div>
            </div>

        </div>

    );
};

export default Banner;