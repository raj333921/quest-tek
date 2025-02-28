import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'
import AvailableJobs from './components/availableJobs'
import React, {useEffect} from 'react'
function App() {
 const [jobData,setJobData] = React.useState(null);
 const endpoints = [
     'https://sachadigi.com/freshdb/jobListing'
   ];
 React.useEffect(()=>{
   axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
     axios.spread(({data: index}) => {
        setJobData(index);
     })
   );
 },[]);
  return (
    <>
    <header className="">
              <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <h1 className="text-1xl font-bold tracking-tight text-black-300" style={{textAlign:"left"}}>Available Jobs</h1>
              </div>
            </header>
            <main>
              <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                {jobData?.map((item) =><> <AvailableJobs key={item.jobId} job={item}/> <br/></>)}
              </div>
            </main>
    </>
  )
}

export default App
