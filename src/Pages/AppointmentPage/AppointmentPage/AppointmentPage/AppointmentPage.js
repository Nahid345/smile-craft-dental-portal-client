import React, { useState } from 'react';
import AppointmentBanner from '../../AppointmentBanner/AppointmentBanner';
import AvailableAppointments from '../../AvailableAppointments/AvailableAppointments';

const AppointmentPage = () => {
    const [selectedDate, setSelectedDate] = useState( new Date());
    return (
        <div>
          <AppointmentBanner

          selectedDate ={selectedDate}
          setSelectedDate={setSelectedDate}

          ></AppointmentBanner>
          <AvailableAppointments
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          ></AvailableAppointments>
        </div>
    );
};

export default AppointmentPage;