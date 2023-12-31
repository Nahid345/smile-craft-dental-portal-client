import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppointments = ({selectedDate}) => {
    const[appointmentOptions,setAppointmentOptions] = useState([])
    const[treatment, setTreatment] = useState(null)

    useEffect(()=>{
        fetch('appointmentOptions.json')
        .then(res => res.json())
        .then(data => setAppointmentOptions(data))

        .catch(err => console.error(err))

    },[])
    return (
        <section className='my-16'>
            <p className='text-center text-secondary font-bold'>Available Services on {format(selectedDate, "PP")}</p>
            <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                     key={option._id}
                     appointmentoption ={option}
                     setTreatment = {setTreatment}
                    ></AppointmentOption>)
                }
            </div>
         {    
               treatment &&
               <BookingModal
               selectedDate = {selectedDate}
               treatment ={treatment}
               setTreatment={setTreatment}
               ></BookingModal>
         }
        </section>

    );
};

export default AvailableAppointments;