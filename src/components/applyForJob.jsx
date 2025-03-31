import { TrashIcon, PhotoIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { useNavigate } from "react-router-dom"
import { ContextJobStore } from '../context/jobStore'
import * as Constants from "../constants"
import * as Urls from "../utilities/urls"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './header'

export default function ApplyForJob() {

  const [alert, setAlert] = useState(false);
  const [erAlert, setErAlert] = useState(false);
  const [loader, setLoader] = useState(false);
  const [file, setFile] = useState(null);
  const { state } = React.useContext(ContextJobStore);
  const navigate = useNavigate();
  let initial = { "firstNameError": false, "lastNameError": false, "emailIdError": false, "resumeError": false }
  const [errorVal, setErrorVal] = useState(initial);
  const [inputVal, setInputVal] = useState({ "firstName": "", "lastName": "", "emailId": "", "jobRole": "", "jobId": "", "country": "Belgium", "workPermit": "no", "resume": [], "salary": "", "remarks": "", "businessName":"","businessId":""});

  useEffect(() => {
    if (!state || !state.content) {
      navigate(Constants.HOME_PAGE);
    }
  }, []);
  const handleFileChange = (e) => {
    if (e.target.files) {
      setErrorVal({ ...errorVal, resumeError: false });
      setFile(e.target.files[0]);
    }
  };
  const deleteFile = () => {
    setFile(null);
  };

  const check = (value) => {
    if (value === '' || value === null || value === undefined) {
      return true;
    }

    return false;
  }
  const scrollTo = (x, y) => {
    window.scrollTo(x, y);
  }
  const saveResume = (event) => {
    let url = Urls.MAIN_URL + Urls.APPLYJOB;
    setInputVal({ ...inputVal, jobRole: state.content.jobRole, jobId: state.content.id, resume: file })
    if (event?.target.id === "save" && state?.content) {
      let flag = false;
      setErrorVal(initial);
      switch (true) {
        case check(inputVal.firstName):
          flag = true;
          scrollTo(0, 0);
          setErrorVal({ ...errorVal, firstNameError: true });
          break;
        case check(inputVal.lastName):
          flag = true;
          scrollTo(0, 40);
          setErrorVal({ ...errorVal, lastNameError: true });
          break;
        case check(inputVal.emailId):
          scrollTo(0, 40);
          flag = true;
          setErrorVal({ ...errorVal, emailIdError: true });
          break;
        case check(file):
          scrollTo(0, 300);
          flag = true;
          setErrorVal({ ...errorVal, resumeError: true });
          break;
      }
      if (flag) {
        return false;
      }
      setLoader(true);
      inputVal.businessName = state?.content?.businessName;
      inputVal.businessId = state?.content?.userId;
      axios.post(url, inputVal, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(function (response) {
        setLoader(false);
        response.data ? setAlert(true) : '';
        setErAlert(false);
      })
        .catch(function (error) {
          setLoader(false);
          error ? setErAlert(true) : '';
          setAlert(false);
        });
    }
    return false;
  }
  return (
    <>
      <Header name={state?.content?.firstName}/>
      <header className="">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-1xl font-bold tracking-tight text-black-300" style={{ textAlign: "left" }}></h1>
        </div>
      </header>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base/7 font-semibold text-gray-900">Personal Information</h2>
          <p className="mt-1 text-sm/6 text-gray-600">You are applying for the Job Role : {state.content.jobRole}</p>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                {errorVal.firstNameError ? <span id="firstErrmsg" style={{ color: 'RED' }}>Please enter your FirstName</span> : "First name*"}
              </label>
              <div className="mt-2">
                <input id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="off"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-600 sm:text-sm/6"
                  value={inputVal?.firstName}
                  onChange={(e) => {
                    setInputVal({ ...inputVal, firstName: e.target.value });
                    setErrorVal({ ...errorVal, firstNameError: false });
                  }}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">
                {errorVal.lastNameError ? <span id="firstErrmsg" style={{ color: 'RED' }}>Please enter your lastName</span> : "Last name*"}
              </label>
              <div className="mt-2">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  value={inputVal?.lastName}
                  onChange={(e) => {
                    setInputVal({ ...inputVal, lastName: e.target.value });
                    setErrorVal({ ...errorVal, lastNameError: false });
                  }}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                {errorVal.emailIdError ? <span id="errmsg" style={{ color: 'RED' }}>Please enter your Email address</span> : "Email address*"}
              </label>
              <div className="mt-2">
                <input
                  required
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={inputVal?.emailId}
                  onChange={(e) => {
                    setInputVal({ ...inputVal, emailId: e.target.value });
                    setErrorVal({ ...errorVal, emailIdError: false });
                  }}
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-600 sm:text-sm/6"
                />
              </div>

            </div>

            <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm/6 font-medium text-gray-900">
                Country*
              </label>
              <div className="mt-2 grid grid-cols-1">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  value={inputVal?.country}
                  onChange={(e) => setInputVal({ ...inputVal, country: e.target.value })}
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-600 sm:text-sm/6"
                >
                  <option value="Belgium">Belgium</option>
                  <option value="India">India</option>
                  <option value="Netherlands">Netherlands</option>
                  <option value="France">France</option>
                  <option value="Germany">Germany</option>
                </select>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="workpermit" className="block text-sm/6 font-medium text-gray-900">
                Work Permit Needed*
              </label>
              <div className="mt-2 grid grid-cols-1">
                <select
                  id="workpermit"
                  name="workpermit"
                  value={inputVal?.workPermit}
                  onChange={(e) => setInputVal({ ...inputVal, workPermit: e.target.value })}
                  autoComplete="workpermit-name"
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-600 sm:text-sm/6"
                >
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                />
              </div>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <label htmlFor="resume" className="block text-sm/6 font-medium text-gray-900">
                {errorVal.resumeError ? <span id="errmsg" style={{ color: 'RED' }}>Please upload your Resume</span> : "Resume*"}
              </label>
              {file ? <span style={{ color: 'GREEN' }}>{file.name} <TrashIcon onClick={deleteFile} aria-hidden="true" className="mx-auto size-10 text-yellow-300" /></span> : <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon aria-hidden="true" className="mx-auto size-12 text-gray-300" />
                  <div className="mt-4 flex text-sm/6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-yellow-600 focus-within:ring-2 focus-within:ring-yellow-600 focus-within:ring-offset-2 focus-within:outline-hidden hover:text-yellow-500"
                    >
                      <span>Upload a file</span>
                      <input
                        value=''
                        accept=".pdf"
                        onChange={handleFileChange} id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs/5 text-gray-600">DOC, DOCX, PDF up to 10MB</p>
                </div>
              </div>}

            </div>
            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm/6 font-medium text-gray-900">
                Any Remarks
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  value={inputVal?.remarks}
                  onChange={(e) => setInputVal({ ...inputVal, remarks: e.target.value })}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-600 sm:text-sm/6"
                  defaultValue={''}
                />
              </div>
            </div>
          </div>
        </div>
        {alert && <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 middle:bg-gray-800 dark:text-green-400" role="alert">
          <span className="font-medium">Your application is successfully submitted. Our Team will be back to you !</span>
        </div>}
        {erAlert && <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 middle:bg-gray-800 dark:text-green-400" role="alert">
          <span className="font-medium">Your application is unsuccesfull :( , Drop us an email : {Constants.EMAILID}</span>
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
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          onClick={saveResume}
          type="submit"
          id="save"
          className="rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-yellow-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
        >
          Save
        </button>
        <a href="/" className="text-sm/6 font-semibold text-gray-900">
          {Constants.BACK}
        </a>
      </div>
    </>
  )
}
