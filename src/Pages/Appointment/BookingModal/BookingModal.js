import { format } from "date-fns";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";

const BookingModal = ({ treatment, selectedDate, setTreatment,refetch }) => {
  const { user } = useContext(AuthContext);
  const { name, slots,price } = treatment;
  const date = format(selectedDate, "PP");

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const patientName = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const booking = {
      appointmentDate: date,
      treatment: name,
      patient: patientName,
      slot,
      email,
      phone,
      price
    };

    console.log(booking);

    fetch(`http://localhost:5000/bookings`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.acknowledged) {
          setTreatment(null);
          toast.success("Booking Confirmed");
          refetch();
        }
        else{
          toast.error(data.message);
        }
        
      });
  };
  return (
    <>
      <input type="checkbox" id="booking_modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking_modal"
            className="btn btn-primary btn-sm btn-circle text-white absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-center lg:text-left text-secondary">
            {name}
          </h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              type="text"
              disabled
              value={date}
              className="input w-full input-bordered "
            />
            <select
              name="slot"
              className="select select-bordered w-full focus:outline-none"
            >
              {slots.map((slot, i) => (
                <option value={slot} key={i}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              disabled
              defaultValue={user?.displayName}
              placeholder="Your Name"
              className="input w-full input-bordered focus:outline-none"
            />
            <input
              required
              name="email"
              type="email"
              disabled
              defaultValue={user?.email}
              placeholder="Email Address"
              className="input w-full input-bordered focus:outline-none"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input w-full input-bordered focus:outline-none"
            />
            <br />
            <input
              className="btn btn-primary text-white w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
