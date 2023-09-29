import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import apiService from "../../api/apiServices";
const Login = () => {
  // const [inputs, setInputs] = useState({});

  // const handleChange = (event) => {
  //   const name = event.target.name;
  //   const value = event.target.value;

  //   setInputs((values) => ({ ...values, [name]: value }));
  // };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    apiService
      .post("api/login", data)
      .then((response) => {
        console.log("Data sent successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="flex-1 md:max-w-sm px-8 py-6 mt-4 text-left bg-white rounded-lg md:shadow-lg">
      <h3 className="text-2xl font-bold text-center">Login </h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-4">
          <div>
            <label className="block">Email</label>
            <input
              name="email"
              type="text"
              placeholder="Email"
              {...register("email", {
                required: "* Required",
                pattern: {
                  value: /[a-zA-Z0-9._%+-]+@/,
                  message: "Invalid Email",
                },
              })}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              // onChange={handleChange}
            />
            {errors.email && (
              <span className="text-sm text-red-500">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="mt-4">
            <label className="block">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              {...register("password", { required: "*Required" })}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              // onChange={handleChange}
            />
            {errors.password && (
              <span className="text-sm text-red-500">
                {errors.password.message}
              </span>
            )}
          </div>
          <div className="flex items-baseline justify-between">
            <button
              className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
              type="submit"
            >
              Login
            </button>
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>
        </div>
      </form>
      <p className="mt-4 text-gray-400 text-center">
        Don't have an account?{" "}
        <Link to="/user/signup" className="text-blue-500 hover:underline">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Login;
