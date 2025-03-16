import { CheckIcon } from '@heroicons/react/20/solid'
import { ContextJobStore } from '../context/jobStore'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Constants from "../constants"
import Header from './header'
export default function ViewJob() {
  const { state, dispatch } = React.useContext(ContextJobStore);
  const navigate = useNavigate();
  useEffect(() => {
    if (!state || !state.content) {
      navigate(Constants.HOME_PAGE);
    }
  }, []);

  const buttonGroup = () => {
    return (
      <div className="text-center">
        <header className="">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-1xl font-bold tracking-tight text-black-300" style={{ textAlign: "left" }}></h1>
          </div>
        </header>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button onClick={() => {
            dispatch({
              type: 'JOB',
              content: state.content
            });
            navigate(Constants.APPLY_JOB);
          }}
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
  const mapToScreenFlow = (key, value) => {
    return (
      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm/6 font-medium text-gray-900">{key}</dt>
        <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{value}</dd>
      </div>
    )
  }
  return (
    <>
      <Header />
      {buttonGroup()}
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          {mapToScreenFlow("Application for", state.content.jobRole)}
          {mapToScreenFlow("Closing Date", state.content.closeDate)}
          {mapToScreenFlow("Type", state.content.commuteType)}
          {mapToScreenFlow("Language", state.content.language)}
          {mapToScreenFlow("Experience", state.content.experience)}
          {mapToScreenFlow("Employee Type", state.content.employeeType)}
          {mapToScreenFlow("Location", state.content.location)}
          {mapToScreenFlow("Salary", state.content.salary)}
          {mapToScreenFlow("Job Description", state.content.description)}
          {mapToScreenFlow("Technical Details", state.content.techDetails)}
        </dl>
      </div>
      {buttonGroup()}
    </>
  )
}
