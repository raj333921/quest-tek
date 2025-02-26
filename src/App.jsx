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
                 "jobId": "1",
                 "type": "Hybrid",
                 "salary": "",
                 "closeDate": "23/01/2025",
                 "location": "Brussels"
               },
               {
                 "jobRole": "Qlick Developer",
                 "jobId": "2",
                 "type": "Hybrid",
                 "salary": "",
                 "closeDate": "23/01/2025",
                 "location": "Brussels"
               },
               {
                 "jobRole": "SAP HANA Developer",
                 "jobId": "3",
                 "type": "Hybrid",
                 "salary": "",
                 "closeDate": "23/01/2025",
                 "location": "Brussels"
               },
               {
                 "jobRole": "BODS Developer",
                 "jobId": "4",
                 "type": "Hybrid",
                 "salary": "",
                 "closeDate": "23/01/2025",
                 "location": "Brussels"
               },
               {
                 "jobRole": "Backend Developer",
                 "jobId": "5",
                 "type": "Hybrid",
                 "salary": "",
                 "closeDate": "23/01/2025",
                 "location": "Brussels"
               },
               {
                 "jobRole": "Qlick Developer",
                 "jobId": "6",
                 "type": "Hybrid",
                 "salary": "",
                 "closeDate": "23/01/2025",
                 "location": "Brussels"
               },
               {
                 "jobRole": "SAP HANA Developer",
                 "jobId": "7",
                 "type": "Hybrid",
                 "salary": "",
                 "closeDate": "23/01/2025",
                 "location": "Brussels"
               },
               {
                 "jobRole": "BODS Developer",
                 "jobId": "8",
                 "type": "Hybrid",
                 "salary": "",
                 "closeDate": "23/01/2025",
                 "location": "Brussels"
               },
               {
                 "jobRole": "Backend Developer",
                 "jobId": "9",
                 "type": "Hybrid",
                 "salary": "",
                 "closeDate": "23/01/2025",
                 "location": "Brussels"
               },
               {
                 "jobRole": "Qlick Developer",
                 "jobId": "10",
                 "type": "Hybrid",
                 "salary": "",
                 "closeDate": "23/01/2025",
                 "location": "Brussels"
               },
               {
                 "jobRole": "SAP HANA Developer",
                 "jobId": "11",
                 "type": "Hybrid",
                 "salary": "",
                 "closeDate": "23/01/2025",
                 "location": "Brussels"
               },
               {
                 "jobRole": "BODS Developer",
                 "jobId": "12",
                 "type": "Hybrid",
                 "salary": "",
                 "closeDate": "23/01/2025",
                 "location": "Brussels"
               }
             ];
  const callMeth=()=> {
  return (jobs.forEach((item,key) => (
                          <AvailableJobs key={key} role={item.jobRole} />
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
                {jobs.map((item) =><> <AvailableJobs key={item.jobId} role={item.jobRole} type={item.type} salary={item.salary} closeDate={item.closeDate} location={item.location}/> <br/></>)}
              </div>

            </main>

    </>
  )
}

export default App
