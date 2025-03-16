import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import React, { useState } from 'react';
import Header from './header'
import axios from 'axios'

export default function PostJob() {

 const [value, setValue] = useState({
        startDate: null,
        endDate: null
    });
const [formData, setFormData] = useState({
    jobRole: '',
    client: '',
    commuteType: '',
    language: '',
    employeeType: '',
    experience: '',
    location: '',
    salary: '',
    description: '',
    techDetails: ''
  });

 const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleClick = (event) => {
      event.preventDefault(); // Prevent the default form submission behavior
      let url = "https://sachadigi.com/freshdb/jobListing"
      console.log('Form Data Submitted:', formData);
      axios.post(url, formData, {
              headers: {
                'Content-Type': 'application/json'
              }
            }).then(function (response) {
                  console.log(response.data)
                })
                .catch(function (error) {
                  console.log(error)
                });
    };


  return (
<>
        <Header />
  <header className="">
                       <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                         <h1 className="text-1xl font-bold tracking-tight text-black-300" style={{textAlign:"left"}}></h1>
                       </div>
                     </header>
    <form>
      <div className="space-y-12">
        <div className="border-b border-yellow-900/10 pb-12">
          <h2 className="text-base/7 font-semibold text-gray-900">Post a Job to public users</h2>
          <p className="mt-1 text-sm/6 text-gray-600">
            This information will be displayed publicly so be careful what you share.
          </p>


        </div>

        <div className="border-b border-yellow-900/10 pb-12">

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
                                                                      <label htmlFor="jobRole" className="block text-sm/6 font-medium text-gray-900">
                                                                        Job Role*
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
                                                              Client*
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
                Type(Daily,Hybrid,Remote)*
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
                Language(EN/FR/NL)*
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
                            Employee type(Internal/Freelance)*
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
                            Experience*
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
                Location*
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
                            Salary(Gross/Per day)
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
                Job Description*
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
                          Technical Details*
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
        <button type="button" className="text-sm/6 font-semibold text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
           onClick={handleClick}
          className="rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-yellow-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
        >
          Save
        </button>
      </div>
    </form>
    </>
  )
}
