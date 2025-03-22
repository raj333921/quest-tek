import Header from './components/header'
import axios from 'axios'
import './App.css'
import AvailableJobs from './components/availableJobs'
import React from 'react'
import * as Urls from "./utilities/urls"
function App() {
  const [jobData, setJobData] = React.useState(null);
  const endpoints = [
    Urls.MAIN_URL + Urls.GET_JOB
  ];
  React.useEffect(() => {
    axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
      axios.spread(({ data: index }) => {
        setJobData(index);
      })
    );
  }, []);
  return (
    <>
      <Header />
      <header className="">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-1xl font-bold tracking-tight text-black-300" style={{ textAlign: "left" }}>Available Jobs</h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          {jobData?.map((item) => <> <AvailableJobs key={item.jobId} job={item} /> <br /></>)}
        </div>
      </main>
    </>
  )
}

export default App
