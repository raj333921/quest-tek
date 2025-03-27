import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  CurrencyEuroIcon,
  LinkIcon,
  MapPinIcon,
  UserCircleIcon,
  LanguageIcon,
  BuildingOfficeIcon
} from '@heroicons/react/20/solid'
import React from 'react'
import { useNavigate } from "react-router-dom"
import { ContextJobStore } from '../context/jobStore'
import * as Constants from "../constants"
import { dataFormat } from '../utilities/common'

export default function AvailableJobs({ job,flag }) {
  const navigate = useNavigate();
  const { dispatch } = React.useContext(ContextJobStore);
  return (
    <div className="lg:flex lg:items-center lg:justify-between">
      <div className="min-w-0 flex-1">
        <h2 className="text-1xl font-bold text-yellow-600 sm:truncate sm:text-3xl sm:tracking-tight" style={{ textAlign: "left" }}>
          {job.jobRole}
        </h2>
        <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <BuildingOfficeIcon aria-hidden="true" className="mr-1.5 size-5 shrink-0 text-gray-400" />
            {job.commuteType}
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
          {job.salary ? <div className="mt-2 flex items-center text-sm text-gray-500">
            <CurrencyEuroIcon aria-hidden="true" className="mr-1.5 size-5 shrink-0 text-gray-400" />
            {job.salary}
          </div> : ''}
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <CalendarIcon aria-hidden="true" className="mr-1.5 size-5 shrink-0 text-gray-400" />
            Closes on {dataFormat(job.closeDate)}
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <BriefcaseIcon aria-hidden="true" className="mr-1.5 size-5 shrink-0 text-gray-400" />
            {job.businessName}
          </div>
        </div>
      </div>

      <div className="mt-5 flex lg:mt-0 lg:ml-4">
      {flag ? <span className="sm:ml-3">
          <button
            type="button"
            id="view"
            onClick={() => {
              dispatch({
                type: 'JOB',
                content: job
              });
              navigate(Constants.POST_JOB);
            }}
            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
</svg>


            {Constants.EDIT}
          </button>
        </span>:
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
        </span>}

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
};
