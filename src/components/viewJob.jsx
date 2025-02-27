import { CheckIcon,MapPinIcon } from '@heroicons/react/20/solid'
import {ContextJobStore} from '../context/jobStore'
import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import * as Constants from "../constants"
export default function ViewJob() {
 const {state} = React.useContext(ContextJobStore);
 const navigate = useNavigate();
 useEffect(() => {
 if(!state || !state.content){
    navigate(Constants.HOME_PAGE);
 }
 },[]);

 const buttonGroup = () =>{
 return (
  <div className="text-center">
                       <div className="mt-10 flex items-center justify-center gap-x-6">
                       <button
                                   type="button"
                                   id="apply"
                                   className="inline-flex items-center rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-yellow-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                 >
                                   <CheckIcon aria-hidden="true" className="mr-1.5 -ml-0.5 size-5" />
                                   {Constants.APPLY}
                                 </button>
                         <a href="/" className="text-sm/6 font-semibold text-gray-900">
                           {Constants.BACK}
                         </a>
                       </div>
                     </div>)
 }
  return (
    <div>
    {buttonGroup()}
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm/6 font-medium text-gray-900">Application for</dt>
                    <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{state.content.jobRole}</dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                      <dt className="text-sm/6 font-medium text-gray-900">Closing Date</dt>
                                      <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{state.content.closeDate}</dd>
                                    </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Type</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{state.content.type}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">

            <dt className="text-sm/6 font-medium text-gray-900">Location</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{state.content.location}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Salary</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{state.content.salary}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Job Description</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              {state.content.description}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-sm/6 font-medium text-gray-900">Technical Details</dt>
                      <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                        {state.content.techDetails}
                      </dd>
                    </div>

        </dl>
      </div>
    {buttonGroup()}
    </div>
  )
}
