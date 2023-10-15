import React from 'react';
import Banner from './Banner/Banner';
import InfoCards from './InfoCards/InfoCards';
import Services from './Services/Services';
import Treatment from './Treatment/Treatment';
import Appointment from './Appointment/Appointment';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <InfoCards></InfoCards>
           <Services></Services>
           <Treatment></Treatment>
           <Appointment></Appointment>
           <Testimonial></Testimonial>
        </div>
    );
};

export default Home;