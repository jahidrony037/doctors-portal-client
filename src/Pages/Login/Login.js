import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
  const { signIn, loginWithGoogle } = useContext(AuthContext);

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();
  const [loginError, setLoginError] = useState("");
  const [googleLoginError, setGoogleLoginError] = useState("");


  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";
  const handleLogin = (data) => {
    setLoginError("");
    //console.log(data);
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        if(user) {
          toast.success("Login Successful");
        }
        //console.log(user);

        navigate(from, { replace: true });
      })

      .catch((error) => {
        const errorMessage = error.message;
        setLoginError(errorMessage);
      });
  };

  const handleGoogleLogin = () => {
    setGoogleLoginError("");
    loginWithGoogle()
      .then((result) => {
        if (result.user) {
            toast.success("Login Successful");
          navigate(from, { replace: true });
        }
      })
      .catch((err) => {
        //console.log(err)
        setGoogleLoginError(err.message);
      });
  };

  


  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="lg:text-4xl md:text-3xl sm:text-2xl text-center">
          Login
        </h2>
        <form onSubmit={handleSubmit(handleLogin)}>
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
            <label className="label">
              {" "}
              <span className="label-text">Forget Password?</span>
            </label>
            {errors.password && (
              <p className="text-red-500">{errors.password?.message}</p>
            )}
          </div>
          <input
            className="btn btn-accent text-white w-full"
            value="Login"
            type="submit"
          />
          <div>
            {loginError && <p className="text-red-500">{loginError}</p>}
          </div>
        </form>
        <p className="mt-[10px] text-[12px] text-center">
          New to Doctors Portal ?{" "}
          <Link className="text-secondary underline" to="/signup">
            Create new Account
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

export default Login;
