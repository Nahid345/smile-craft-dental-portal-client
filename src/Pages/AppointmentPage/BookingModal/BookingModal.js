import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selectedDate,setTreatment }) => {
    const { name, slots } = treatment;
    const date = format(selectedDate, "PP")

    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const pname = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

       const booking ={
        appointmentDate: date,
        treatment: name,
        patient: pname,
        slot,
        email,
        phone

       } //todo: send data server khj krte hbe
       console.log(booking);
       setTreatment(null);
    }
    return (
        <>
            <input type='checkbox' id='booking-modal' className='modal-toggle'></input>
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className='btn btn-sm btn-circle absolute right-2 top-2'>X</label>
                    <h3 className='text-lg font-bold text-center'>{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled value={date} className="input input-bordered w-full " />
                        <select name="slot" className='select select-bordered w-full'>
                            {
                                slots.map((slot, index) =>
                                    <option
                                        value={slot}
                                        key={index}
                                    >{slot}
                                    </option>)
                            }
                        </select>
                        <input type="text" name='name' placeholder="Name" className="input input-bordered w-full " />
                        <input type="email" name='email' placeholder="Email" className="input input-bordered w-full " />
                        <input type="text" name='phone' placeholder="Phone" className="input input-bordered w-full " />

                        <br />
                        <input type="submit" className='btn btn-accent w-full' value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;