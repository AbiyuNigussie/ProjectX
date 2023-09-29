import React, { useState } from "react";
import { FormProvider } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

  return (
    <div className="flex-1 md:max-w-sm px-8 py-6 mt-4 text-left bg-white rounded-lg md:shadow-lg">
      <h3 className="text-2xl font-bold text-center">Login </h3>
      <form onSubmit={handleSubmit}>
        <div className="mt-4">
          <div>
            <label className="block">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              onChange={handleChange}
            />
          </div>
          <div className="mt-4">
            <label className="block">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              // onChange={handleChange}
            />
          </div>
          <div className="flex items-baseline justify-between">
            <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
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
