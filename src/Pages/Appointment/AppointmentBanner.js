import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import bg from "../../assets/images/bg.png";
import chair from "../../assets/images/chair.png";
const AppointmentBanner = ({ date, setDate }) => {
  return (
    <section
      style={{
        background: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="hero lg:min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse  lg:gap-20 gap-10 lg:max-w-lg w-[300px]">
          <img
            src={chair}
            className="lg:max-w-[400px] w-[250px] rounded-lg shadow-2xl"
            alt="chair"
          />
          <div>
            <DayPicker mode="single" selected={date} onSelect={setDate} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentBanner;
