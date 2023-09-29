import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div class="flex-1 md:max-w-sm px-8 py-6 mt-4 text-left bg-white rounded-lg md:shadow-lg">
      <h3 class="text-2xl font-bold text-center">Login </h3>
      <form action="">
        <div class="mt-4">
          <div>
            <label class="block" for="email">
              Email
            </label>
            <input
              type="text"
              placeholder="Email"
              class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <div class="mt-4">
            <label class="block">Password</label>
            <input
              type="password"
              placeholder="Password"
              class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <div class="flex items-baseline justify-between">
            <button class="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
              Login
            </button>
            <a href="#" class="text-sm text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>
        </div>
      </form>
      <p class="mt-4 text-gray-400 text-center">
        Don't have an account?{" "}
        <Link to="/user/signup" class="text-blue-500 hover:underline">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Login;
