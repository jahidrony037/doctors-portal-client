import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loading from "../../../../Shared/Loading/Loading";

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const imageHostKey = process.env.REACT_APP_imgbb_key;

  const navigate = useNavigate();

  const { data: specialties = [], isLoading } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/appointmentSpecialty`);
      const data = await res.json();
      return data;
    },
  });

  const handleAddDoctor = (data) => {
    //console.log(data);

    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
       
        if (imgData.success) {
          //console.log(imgData.data.url);
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            image: imgData.data.url,
          };

          //save doctors information to the database
          fetch(`http://localhost:5000/doctors`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((result) => {
                if(result.acknowledged== true){
                    //console.log(result);
                    toast.success(`${data.name} is added Successfully`);
                    navigate('/dashboard/manage-doctors')
                }
             
            });
        }
      });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="w-96 p-7 text-center mx-auto my-0">
      <h2 className="text-4xl text-primary ">Add A Doctor</h2>
      <form onSubmit={handleSubmit(handleAddDoctor)}>
        <div className="form-control w-full">
          <label className="label">
            {" "}
            <span className="label-text font-bold">Name</span>
          </label>
          <input
            type="text"
            {...register("name", {
              required: "Name is Required",
            })}
            className="input input-bordered w-full focus:outline-none"
          />
          {/* {errors.name && <p className='text-red-500'>{errors.name.message}</p>} */}
        </div>
        <div className="form-control w-full">
          <label className="label">
            {" "}
            <span className="label-text font-bold">Email</span>
          </label>
          <input
            type="email"
            {...register("email", {
              required: true,
            })}
            className="input input-bordered w-full focus:outline-none"
          />
          {/* {errors.email && <p className='text-red-500'>{errors.email.message}</p>} */}
        </div>
        <div className="form-control w-full">
          <label className="label">
            {" "}
            <span className="label-text font-bold">Specialty</span>
          </label>
          <select
            {...register("specialty")}
            className="select input-bordered w-full focus:outline-none"
          >
            {specialties.map((specialty) => (
              <option key={specialty._id} value={specialty.name}>
                {specialty.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control w-full">
          <label className="label font-bold">
            {" "}
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            {...register("image", {
              required: "Photo is Required",
            })}
            className="input input-bordered w-full focus:outline-none"
          />
          {errors.img && <p className="text-red-500">{errors.img.message}</p>}
        </div>
        <input
          className="btn btn-primary text-white w-full mt-4"
          value="Add Doctor"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddDoctor;
