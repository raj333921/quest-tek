import { ChevronDownIcon } from '@heroicons/react/16/solid'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { ContextJobStore } from '../context/jobStore'
import * as Constants from "../constants"
import * as Urls from "./../utilities/urls"

export default function EditJob() {

  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [alert, setAlert] = useState(false);
  const [erAlert, setErAlert] = useState(false);
  const { state , dispatch} = React.useContext(ContextJobStore);
  const [formData, setFormData] = useState({
    id: state?.content?.id,
    jobRole: state?.content?.jobRole,
    client: state?.content?.client,
    commuteType: state?.content?.commuteType,
    language: state?.content?.language,
    employeeType: state?.content?.employeeType,
    experience: state?.content?.experience,
    location: state?.content?.location,
    salary: state?.content?.salary,
    description: state?.content?.description,
    techDetails: state?.content?.techDetails,
    userId: state?.content?.businessId,
    businessName:state?.content?.businessName
  });

  let initial = { "jobRoleError": false, "clientError": false, "commuteTypeError": false, "languageError": false, "employeeTypeError": false, "experienceError": false, "locationError": false, "salaryError": false, "descriptionError": false, "techDetailsError": false };
  const [errorVal, setErrorVal] = useState(initial);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrorVal(initial);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    if (!state || !state.content) {
      navigate(Constants.LOGIN);
    }
  }, []);

  const scrollTo = (x, y) => {
    window.scrollTo(x, y);
  };
  const check = (value) => {
    if (value === '' || value === null || value === undefined) {
      return true;
    }
    return false;
  };

  const handleClickCancel = () => {
    dispatch({
      type: 'AUTHENTICATE',
      content: state.content
    })
    navigate('/authLayout');
  }

  const handleClickDelete = () => {
    let url =  Urls.MAIN_URL + Urls.GET_JOB+'/'+state?.content?.id;
    axios.delete(url, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function () {
      setLoader(false);
      dispatch({
        type: 'AUTHENTICATE',
        content: state.content
      })
      navigate('/authLayout');
      setErAlert(false);
    })
      .catch(function (error) {
        setLoader(false);
        error ? setErAlert(true) : '';
        setAlert(false);
      });
    
  }

  const handleClick = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    let url =  Urls.MAIN_URL + Urls.GET_JOB;
    console.log('Form Data Submitted:', formData);
    let flag = false;
    setErrorVal(initial);
    switch (true) {
      case check(formData.jobRole):
        flag = true;
        scrollTo(0, 0);
        setErrorVal({ ...errorVal, jobRoleError: true });
        break;
      case check(formData.client):
        flag = true;
        scrollTo(0, 40);
        setErrorVal({ ...errorVal, clientError: true });
        break;
      case check(formData.commuteType):
        flag = true;
        scrollTo(0, 40);
        setErrorVal({ ...errorVal, commuteTypeError: true });
        break;
      case check(formData.language):
        flag = true;
        scrollTo(0, 40);
        setErrorVal({ ...errorVal, languageError: true });
        break;
      case check(formData.employeeType):
        flag = true;
        scrollTo(0, 40);
        setErrorVal({ ...errorVal, employeeTypeError: true });
        break;
      case check(formData.experience):
        flag = true;
        scrollTo(0, 40);
        setErrorVal({ ...errorVal, experienceError: true });
        break;
      case check(formData.description):
        flag = true;
        scrollTo(0, 40);
        setErrorVal({ ...errorVal, descriptionError: true });
        break;
      case check(formData.salary):
        flag = true;
        scrollTo(0, 40);
        setErrorVal({ ...errorVal, salaryError: true });
        break;
      case check(formData.techDetails):
        flag = true;
        scrollTo(0, 40);
        setErrorVal({ ...errorVal, techDetailsError: true });
        break;

    }
    if (flag) {
      return false;
    };
    setLoader(true);
    formData.userId = state?.content?.userId;
    formData.businessName = state?.content?.businessName;
    axios.post(url, formData, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function (response) {
      setLoader(false);
      response.data ? setAlert(true) : '';
      setFormData({
        ...formData
      });
      setErAlert(false);
    })
      .catch(function (error) {
        setLoader(false);
        error ? setErAlert(true) : '';
        setAlert(false);
      });
  };
  return (
    <>
      <header className="">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-1xl font-bold tracking-tight text-black-300" style={{ textAlign: "left" }}></h1>
        </div>
      </header>
      <form>
        <div className="space-y-12">
          <div className="border-b border-yellow-900/10 pb-12">
            <h2 className="text-base/7 font-semibold text-gray-900">Edit a Job (It's already live to customer)</h2>
            <p className="mt-1 text-sm/6 text-gray-600">
              This information will be displayed publicly so be careful what you share.
            </p>
          </div>

          <div className="border-b border-yellow-900/10 pb-12">

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="jobRole" className="block text-sm/6 font-medium text-gray-900">
                  {errorVal.jobRoleError ? <span id="errmsg" style={{ color: 'RED' }}>Please enter Job Role</span> : "Job Role*"}
                </label>
                <div className="mt-2 grid grid-cols-1">
                  <input
                    id="jobRole"
                    name="jobRole"
                    type="text"
                    value={formData.jobRole}
                    onChange={handleChange}
                    autoComplete="client"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-600 sm:text-sm/6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="client" className="block text-sm/6 font-medium text-gray-900">
                  {errorVal.clientError ? <span id="errmsg" style={{ color: 'RED' }}>Please enter Client Name</span> : "Client Name*"}
                </label>
                <div className="mt-2 grid grid-cols-1">
                  <input
                    id="client"
                    name="client"
                    type="text"
                    value={formData.client}
                    onChange={handleChange}
                    autoComplete="client"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-600 sm:text-sm/6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="commuteType" className="block text-sm/6 font-medium text-gray-900">
                  {errorVal.commuteTypeError ? <span id="errmsg" style={{ color: 'RED' }}>Please enter Type(Daily,Hybrid,Remote)</span> : "Type(Daily,Hybrid,Remote)*"}
                </label>
                <div className="mt-2 grid grid-cols-1">
                  <select id="commuteType" name="commuteType"
                    autoComplete="Regular/Hybrid/Remote"
                    value={formData.commuteType}
                    onChange={handleChange}
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-600 sm:text-sm/6"
                  >
                    <option value=''>Select</option>
                    <option value='Hybrid'>Hybrid</option>
                    <option value='Regular'>Regular</option>
                    <option value='Remote'>Remote</option>
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="language" className="block text-sm/6 font-medium text-gray-900">
                  {errorVal.languageError ? <span id="errmsg" style={{ color: 'RED' }}>Please enter Language(EN/FR/NL)</span> : "Language(EN/FR/NL)*"}
                </label>
                <div className="mt-2 grid grid-cols-1">
                  <select id="language" name="language"
                    value={formData.language}
                    onChange={handleChange}
                    autoComplete="Regular/Hybrid/Remote"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-600 sm:text-sm/6"
                  >
                    <option value=''>Select</option>
                    <option value='EN'>English</option>
                    <option value='FR'>French</option>
                    <option value='NL'>Netherands</option>
                    <option value='EN/FR'>English/French</option>
                    <option value='EN/NL'>English/Netherands</option>
                    <option value='FR/NL'>English/French/Netherlands</option>
                    <option value='FR/NL'>French/Netherlands</option>
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="employeeType" className="block text-sm/6 font-medium text-gray-900">
                  {errorVal.employeeTypeError ? <span id="errmsg" style={{ color: 'RED' }}>Please enter Employee type(Internal/Freelance)</span> : "Employee type(Internal/Freelance)*"}

                </label>
                <div className="mt-2 grid grid-cols-1">
                  <select id="employeeType" name="employeeType"
                    value={formData.employeeType}
                    onChange={handleChange}
                    autoComplete="Regular/Hybrid/Remote"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-600 sm:text-sm/6"
                  >
                    <option value=''>Select</option>
                    <option value='Internal'>Internal</option>
                    <option value='Freelance'>Freelance</option>
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="experience" className="block text-sm/6 font-medium text-gray-900">
                {errorVal.experienceError ? <span id="errmsg" style={{ color: 'RED' }}>Please enter Experience*</span> : "Experience*"}
                </label>
                <div className="mt-2 grid grid-cols-1">
                  <select id="experience" name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    autoComplete="1 year"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-600 sm:text-sm/6"
                  >
                    <option value=''>Select</option>
                    <option value='more than 1 year'> more than 1 year</option>
                    <option value='more than 2 years'> more than 2 years</option>
                    <option value='more than 3 years'> more than 3 years</option>
                    <option value='more than 4 years'> more than 4 years</option>
                    <option value='more than 5 years'> more than 5 years</option>
                    <option value='more than 6 years'> more than 6 years</option>
                    <option value='more than 7 years'> more than 7 years</option>
                    <option value='more than 8 years'> more than 8 years</option>
                    <option value='more than 9 years'> more than 9 years</option>
                    <option value='more than 10 years'> more than 10 years</option>
                    <option value='more than 11 years'> more than 13 years</option>
                    <option value='more than 12 years'> more than 12 years</option>
                    <option value='more than 15 years'> more than 15 years</option>
                    <option value='more than 20 years'> more than 20 years</option>
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                  />
                </div>
              </div>



              <div className="sm:col-span-3">
                <label htmlFor="location" className="block text-sm/6 font-medium text-gray-900">
                {errorVal.locationError ? <span id="errmsg" style={{ color: 'RED' }}>Please enter Location*</span> : "Location*"}
                </label>
                <div className="mt-2 grid grid-cols-1">
                  <input
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    type="text"
                    autoComplete="location"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-600 sm:text-sm/6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="salary" className="block text-sm/6 font-medium text-gray-900">
                {errorVal.salaryError ? <span id="errmsg" style={{ color: 'RED' }}>Please enter Salary(Gross/Per day)*</span> : "Salary(Gross/Per day)*"}
                </label>
                <div className="mt-2 grid grid-cols-1">
                  <input
                    id="salary"
                    name="salary"
                    value={formData.salary}
                    onChange={handleChange}
                    type="text"
                    autoComplete="salary"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-600 sm:text-sm/6"
                  />
                </div>
              </div>

            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">


            <div className="col-span-full">
              <label htmlFor="description" className="block text-sm/6 font-medium text-gray-900">
              {errorVal.descriptionError ? <span id="errmsg" style={{ color: 'RED' }}>Please enter Job Description*</span> : "Job Description*"}
              </label>
              <div className="mt-2">
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={10}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-600 sm:text-sm/6"
                  defaultValue={''}
                />
              </div>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <label htmlFor="techDetails" className="block text-sm/6 font-medium text-gray-900">
              {errorVal.techDetailsError ? <span id="errmsg" style={{ color: 'RED' }}>Please enter Technical Details*</span> : "Technical Details*"}
              </label>
              <div className="mt-2">
                <textarea
                  id="techDetails"
                  name="techDetails"
                  value={formData.techDetails}
                  onChange={handleChange}
                  rows={10}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-600 sm:text-sm/6"
                  defaultValue={''}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
            type="submit"
            onClick={handleClickDelete}
            className="cursorPointer rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            Delete
          </button>
          <button type="button" 
            onClick={handleClickCancel} className="cursorPointer text-sm/6 rounded-md bg-green-400 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400 ">
            Cancel
          </button>
          <button
            type="submit"
            onClick={handleClick}
            className=" cursorPointer rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-yellow-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
          >
            Save
          </button>
        </div>
        {alert && <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 middle:bg-gray-800 dark:text-green-400" role="alert">
          <span className="font-medium">Your job posting is successfully submitted. Hope Great Success !</span>
        </div>}
        {erAlert && <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 middle:bg-gray-800 dark:text-green-400" role="alert">
          <span className="font-medium">Your job posting is unsuccesfull :( , Drop us an email : {Constants.EMAILID}</span>
        </div>}
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
      </form>
    </>
  )
}
