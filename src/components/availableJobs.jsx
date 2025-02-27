import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  CurrencyEuroIcon,
  LinkIcon,
  MapPinIcon,
  UserCircleIcon,
  LanguageIcon,
  BuildingOfficeIcon
} from '@heroicons/react/20/solid'
import React from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { useNavigate } from "react-router-dom"
import {ContextJobStore} from '../context/jobStore'
import * as Constants from "../constants"

export default function AvailableJobs({job}) {
    const navigate = useNavigate();
    const {dispatch} = React.useContext(ContextJobStore);
  return (
    <div className="lg:flex lg:items-center lg:justify-between">
      <div className="min-w-0 flex-1">
        <h2 className="text-1xl font-bold text-yellow-600 sm:truncate sm:text-3xl sm:tracking-tight" style={{textAlign:"left"}}>
          {job.jobRole}
        </h2>
        <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
        <div className="mt-2 flex items-center text-sm text-gray-500">
            <BuildingOfficeIcon aria-hidden="true" className="mr-1.5 size-5 shrink-0 text-gray-400" />
                    {job.type}
                  </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <BriefcaseIcon aria-hidden="true" className="mr-1.5 size-5 shrink-0 text-gray-400" />
            {job.employeeType}
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <MapPinIcon aria-hidden="true" className="mr-1.5 size-5 shrink-0 text-gray-400" />
            {job.location}
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <UserCircleIcon aria-hidden="true" className="mr-1.5 size-5 shrink-0 text-gray-400" />
                      {job.experience}
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                                <LanguageIcon aria-hidden="true" className="mr-1.5 size-5 shrink-0 text-gray-400" />
                                          {job.language}
                                        </div>
          { job.salary ? <div className="mt-2 flex items-center text-sm text-gray-500">
            <CurrencyEuroIcon aria-hidden="true" className="mr-1.5 size-5 shrink-0 text-gray-400" />
            job.salary
          </div> : ''}
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <CalendarIcon aria-hidden="true" className="mr-1.5 size-5 shrink-0 text-gray-400" />
            Closes on {job.closeDate}
          </div>
        </div>
      </div>
      <div className="mt-5 flex lg:mt-0 lg:ml-4">
        <span className="sm:ml-3">
          <button
            type="button"
            id="view"
            onClick={() => {
                   dispatch({
                    type: 'JOB',
                    content: job
                   });
                   navigate(Constants.VIEW_JOB);
                  }}
            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50"
          >
            <LinkIcon avria-hidden="true" className="mr-1.5 -ml-0.5 size-5 text-gray-400" />
            {Constants.VIEW}
          </button>
        </span>

        <span className="sm:ml-3">
          <button
            type="button"
            id="apply"
            onClick={() => {
                               dispatch({
                                type: 'JOB',
                                content: job
                               });
                               navigate(Constants.APPLY_JOB);
                              }}
            className="inline-flex items-center rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-yellow-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <CheckIcon aria-hidden="true" className="mr-1.5 -ml-0.5 size-5" />
            {Constants.APPLY}
          </button>
        </span>

      </div>
    </div>
  )
}
