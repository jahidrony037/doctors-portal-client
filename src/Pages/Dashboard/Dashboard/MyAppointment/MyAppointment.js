import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Loading from "../../../../Shared/Loading/Loading";
import { AuthContext } from "../../../../contexts/AuthProvider";

const MyAppointment = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  const { data: bookings = [], isLoading} = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url,{
        headers:{
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
      });
      const data = await res.json();
      return data;
    },
  });

  if(isLoading){
    return <Loading/>
  }

  return (
    <div className="text-center">
      <h3 className="text-3xl mb-4 text-primary">My Appointments</h3>
      <div className="overflow-x-auto">
        <table className="table">
          
          <thead className="bg-slate-300 text-black uppercase">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Time</th>
              <th>Payment</th>

            </tr>
          </thead>
          <tbody>
            
            {bookings.map((booking, i) => (
              <tr key={booking._id} className="hover">
                <th>{i+1}</th>
                <td>{booking.patient}</td>
                <td>{booking.treatment}</td>
                <td>{booking.appointmentDate}</td>
                <td>{booking.slot}</td>
                <td>
                  {
                    booking.price && !booking.paid && <Link to={`/dashboard/payment/${booking._id}`}>
                    <button
                    className="btn btn-primary btn-sm text-white">
                      pay
                    </button>
                    </Link>
                  }
                  {
                    booking.price && booking.paid && <span className="text-sm text-success">paid</span>
                  }
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
