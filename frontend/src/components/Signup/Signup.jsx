import React from "react";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div class="flex-1 md:max-w-sm">
      <div class="px-8 py-6 mt-4 text-left bg-white rounded-lg md:shadow-lg">
        <h1 class="text-2xl font-semibold mb-6  text-center ">Sign Up</h1>
        <form>
          <div class="mb-4">
            <label for="name" class="block text-black">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              class="w-full bg-white border border-gray-100 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div class="mb-4">
            <label for="email" class="block text-black">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="w-full bg-white border border-gray-100 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div class="mb-4">
            <label for="password" class="block text-black">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              class="w-full bg-white border border-gray-100 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div class="mb-4">
            <label for="password" class="block text-black">
              Confirm Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              class="w-full bg-white border border-gray-100 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div class="mb-6">
            <label class="flex items-center">
              <input type="checkbox" class="form-checkbox" />
              <span class="ml-2 text-gray-400">
                I agree to the{" "}
                <a href="#" class="text-blue-500 hover:underline">
                  Terms of Service
                </a>
              </span>
            </label>
          </div>
          <button
            type="submit"
            class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            Sign Up
          </button>
        </form>
        <p class="mt-4 text-gray-400 text-center">
          Already have an account?{" "}
          <Link to="/user/login" class="text-blue-500 hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
