import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "./BookingModal";
import Service from "./Service";

const AvailableAppointment = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mt-10">
      <h4 className="text-cyan-300 text-xl lg:text-2xl text-center font-bold">
        Available Services on {format(date, "PP")}
      </h4>
      <div className="py-10 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
        {services.map((service) => (
          <Service
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          />
        ))}
      </div>
      {treatment && <BookingModal treatment={treatment}></BookingModal>}
    </div>
  );
};

export default AvailableAppointment;
