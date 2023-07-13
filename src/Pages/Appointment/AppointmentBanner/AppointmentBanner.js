import { format } from 'date-fns';
import React from 'react';
import { DayPicker } from 'react-day-picker';
import bg from '../../../assets/images/bg.png';
import chair from '../../../assets/images/chair.png';
const AppointmentBanner = ({selectedDate,setSelectedDate}) => {
     
    return (
        <header className='my-6 h-[838px]'
            style={{
                background: `url(${bg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse justify-center items-center">
                    <img src={chair} alt="dentist chair" className="lg:max-w-lg md:max-w-md sm:max-w-sm rounded-lg lg:mt-56 shadow-2xl" />
                    <div className='lg:mr-[325px] md:ml-[100px]sm:w-full lg:mt-56'>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                        <p>You Have Selected Data: {format(selectedDate,'PP')}</p>
                    </div>
                    
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;