import React from "react";

const Service = ({service,setTreatment}) => {
    const {name,slots} = service;

  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <div class="card-body items-center text-center">
        <h2 class="card-title text-cyan-300">{name}</h2>
        <p>{slots.length >0
        ?<span>{slots[0]}</span>
        :<span className="text-red-500">Try Another Date</span>}</p>
        <p className=" text-gray-600">{slots.length} {slots.length >1 ? 'spaces': 'space'} available</p>
        <div class="card-actions justify-center">
          
           <label 
            className="btn btn-neutral"
           for="booking-modal"
           onClick={()=> setTreatment(service)}
           disabled={slots.length === 0}
           >Book Appointment</label>
        </div>
      </div>
    </div>
  );
};

export default Service;
