import * as Constants from "../constants"
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import Header from './header'
import { ContextJobStore } from '../context/jobStore'
import * as Urls from "./../utilities/urls"

export default function Login() {

  const navigate = useNavigate();

  const [loader, setLoader] = useState(false);
  const [erAlert, setErAlert] = useState(false);
  const [formData, setFormData] = useState({
    pwd: '',
    userId: '',
  });
  let initial = { "userIdError": false, "pwdError": false }
  const [errorVal, setErrorVal] = useState(initial);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrorVal(initial);
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const { state, dispatch } = React.useContext(ContextJobStore);
  const check = (value) => {
    if (value === '' || value === null || value === undefined) {
      return true;
    }
    return false;
  };
  const scrollTo = (x, y) => {
    window.scrollTo(x, y);
  };
  const handleClick = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();
    if (event?.target.id === "save") {
      let flag = false;
     // setFormData({ ...formData, userId: state.content.userId, pwd: state.content.pwd });
      setErrorVal(initial);
      switch (true) {
        case check(formData.userId):
          flag = true;
          scrollTo(0, 0);
          setErrorVal({ ...errorVal, userIdError: true });
          break;
        case check(formData.pwd):
          flag = true;
          scrollTo(0, 40);
          setErrorVal({ ...errorVal, pwdError: true });
          break;
      }
      if (flag) {
        return false;
      };
      setLoader(true);
      let url =  Urls.MAIN_URL + Urls.LOGIN;
      console.log('Form Data Submitted:', formData);
      axios.post(url, formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        console.log(response.data)
        setLoader(false);
        response.data && dispatch({
          type: 'AUTHENTICATE',
          content: response.data
        }); navigate(Constants.POST_JOB);
        setErAlert(false);

      })
        .catch(function (error) {
          setLoader(false);
          error && setErAlert(true);
        });
    }
    return false;

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
              <label htmlFor="userId" className="block text-sm/6 font-medium text-gray-900">
                {errorVal.userIdError ? <span id="errmsg" style={{ color: 'RED' }}>Please enter your Email address</span> : "Email address*"}
              </label>
              <div className="mt-2">
                <input
                  id="userId"
                  name="userId"
                  type="userId"
                  required
                  autoComplete="userId"
                  value={formData.userId}
                  onChange={handleChange}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div>
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  {errorVal.pwdError ? <span id="errmsg" style={{ color: 'RED' }}>Please enter your password</span> : "Password*"}
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
              {loader && <div className="text-center">
                <div role="status">
                  <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
              }
              {erAlert && <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 middle:bg-gray-800 dark:text-green-400" role="alert">
                <span className="font-medium">Your login is unsuccesfull :( , Drop us an email : {Constants.EMAILID}</span>
              </div>}
              <button
                type="submit"
                onClick={handleClick}
                id="save"
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
