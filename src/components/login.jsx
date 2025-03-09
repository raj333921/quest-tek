import * as Constants from "../constants"
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"

import Header from './header'

export default function Login() {

const navigate = useNavigate();
const [formData, setFormData] = useState({
    pwd: '',
    email: '',
  });

const handleChange = (e) => {
      const { name, value} = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
};

const handleClick = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // You can now handle the form data (e.g., send to an API)

    console.log('Form Data Submitted:', formData);
    navigate(Constants.POST_JOB);
  };
  return (
     <>
        <Header />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div>
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="pwd"
                  name="pwd"
                  type="password"
                  required
                  autoComplete="current-password"
                  value={formData.pwd}
                  onChange={handleChange}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={handleClick}
                className="flex w-full justify-center rounded-md bg-yellow-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-yellow-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
