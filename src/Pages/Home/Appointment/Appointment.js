import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const Appointment = () => {
    return (
        <section className='mt-32'
         style={{
                background: `url(${appointment})`
            }}
        >
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} alt='' className=" -mt-32 -mb-4 hidden sm:block lg:w-1/2 rounded-lg " />
                    <div className='text-white '>
                        <h2 className='mb-3'>Appointment</h2>
                        <h1 className="text-3xl font-bold ">Make Appointment Today</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable <br /> content of a page  when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like  readable English.Many desktop publishing packages and web page</p>
                       <PrimaryButton>Getting Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;