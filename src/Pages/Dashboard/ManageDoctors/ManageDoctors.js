import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import ConfirmationModal from "../../../Shared/ConfirmationModal/ConfirmationModal";
import Loading from "../../../Shared/Loading/Loading";

const ManageDoctors = () => {
  const[deletingDoctor, setDeletingDoctor] = useState('');

  const closeModal = () => {
    setDeletingDoctor(null);
  }

  


  const { data: doctors = [], isLoading,refetch } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:5000/doctors", {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await res.json();
        return data;
      } catch (err) {}
    },
  });
  

  if (isLoading) {
    return <Loading />;
  }


  const handleDeleteDoctor =  (doctor) => {
    fetch(`http://localhost:5000/doctors/${doctor._id}`,{
        method: 'DELETE',
        headers:{
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res => res.json())
    .then(data => {
        if(data.deletedCount>0){
            refetch();
            toast.success(`Doctor ${doctor.name} Deleted Successfully.`);
        }
    })
    
  }



  return (
    <div className="mx-auto my-0 text-center">
      <h2 className="text-4xl text-primary ">
        Manage Doctors: {doctors?.length}
      </h2>
      <div className="overflow-x-auto mt-4">
        <table className="table w-full">
          <thead className="bg-slate-300 text-black uppercase">
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, i) => (
              <tr key={doctor._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-24 rounded-full ">
                      <img src={doctor.image} alt="" />
                    </div>
                  </div>
                </td>
                <td>{doctor.name}</td>
                <td>{doctor.email}</td>
                <td>{doctor.specialty}</td>
                <td>
                <label htmlFor="confirmationModal"
                 onClick={() => {
                    setDeletingDoctor(doctor);
                 }}
                 className="btn btn-sm btn-error text-white">Delete</label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {

        deletingDoctor && <ConfirmationModal 
                           title={`Are you sure you want to delete?`}
                           description={`if you delete ${deletingDoctor.name}. It cannot be undone`}
                           closeModal={closeModal}
                           modalData={deletingDoctor}
                           successAction={handleDeleteDoctor}
                           successBtnName="Delete">
            
        </ConfirmationModal>

      }
    </div>
  );
};

export default ManageDoctors;
