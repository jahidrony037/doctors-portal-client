import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
const SignUP = () => {
  const { createUser, updateUser, loginWithGoogle } = useContext(AuthContext);
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();
  const [signUpError, setSignUpError] = useState("");
  const [googleLoginError, setGoogleLoginError] = useState("");
  const navigate = useNavigate();

  const handleSignUP = (data) => {
    //console.log(data);
    setSignUpError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        toast.success("User Create Successfully.");
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            navigate('/');
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        setSignUpError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    setGoogleLoginError("");
    loginWithGoogle()
      .then((result) => {
        if (result.user) {
          toast.success("Congrats Login Successful!");
        }
      })
      .catch((err) => {
        console.log(err);
        setGoogleLoginError(err.message);
      });
  };
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="lg:text-4xl md:text-3xl sm:text-2xl text-center">
          Sign UP
        </h2>
        <form onSubmit={handleSubmit(handleSignUP)}>
          <div className="form-control w-full ">
            <label className="label">
              {" "}
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Name is required",
              })}
              className="input input-bordered w-full focus:outline-none"
            />
            {errors.name && (
              <p className="text-red-600">{errors.name?.message}</p>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              {" "}
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email Address is required",
              })}
              className="input input-bordered w-full focus:outline-none"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              {" "}
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters long",
                },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  message:
                    "Password must have uppercase, number and special characters",
                },
              })}
              className="input input-bordered w-ful focus:outline-none"
            />

            {errors.password && (
              <p className="text-red-500">{errors.password?.message}</p>
            )}
          </div>
          <input
            className="btn btn-accent text-white w-full mt-[30px]"
            value="Sign UP"
            type="submit"
          />
          <div>
            {signUpError && <p className="text-red-500">{signUpError}</p>}
          </div>
        </form>
        <p className="mt-[10px] text-[12px] text-center">
          Already Registered ?{" "}
          <Link className="text-secondary underline" to="/login">
            Please Login Here
          </Link>
        </p>
        <div className="divider">OR</div>
        <button onClick={handleGoogleLogin} className="btn btn-outline w-full">
          CONTINUE WITH GOOGLE
        </button>
        <div>
          {googleLoginError && (
            <p className="text-red-500">{googleLoginError}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUP;
