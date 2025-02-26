import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import AvailableJobs from './components/availableJobs'
function App() {

  var jobs = [
               {
                 "jobRole": "Backend Developer",
                 "jobId": "1"
               },
               {
                 "jobRole": "Qlick Developer",
                 "jobId": "2"
               },
               {
                 "jobRole": "SAP HANA Developer",
                 "jobId": "3"
               },
               {
                 "jobRole": "BODS Developer",
                 "jobId": "4"
               },
               {
                 "jobRole": "Backend Developer",
                 "jobId": "5"
               },
               {
                 "jobRole": "Qlick Developer",
                 "jobId": "6"
               },
               {
                 "jobRole": "SAP HANA Developer",
                 "jobId": "7"
               },
               {
                 "jobRole": "BODS Developer",
                 "jobId": "8"
               },
               {
                 "jobRole": "Backend Developer",
                 "jobId": "9"
               },
               {
                 "jobRole": "Qlick Developer",
                 "jobId": "10"
               },
               {
                 "jobRole": "SAP HANA Developer",
                 "jobId": "11"
               },
               {
                 "jobRole": "BODS Developer",
                 "jobId": "12"
               }
             ];
  const callMeth=()=> {
  return (jobs.forEach((item,key) => (
                          <AvailableJobs key={key} role={item.jobRole}/>
  )))}
  return (
    <>
    <Header />
    <header className="bg-white shadow-sm">
              <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <h1 className="text-1xl font-bold tracking-tight text-black-300" style={{textAlign:"left"}}>Available Jobs</h1>
              </div>
            </header>
            <main>
              <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                {jobs.map((item) =><> <AvailableJobs key={item.jobId} role={item.jobRole}/> <br/></>)}
              </div>

            </main>

    </>
  )
}

export default App
