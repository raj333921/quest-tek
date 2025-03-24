import axios from 'axios'
import './../App.css'
import AvailableJobs from './availableJobs'
import React from 'react'
import * as Urls from "./../utilities/urls"
import { ContextJobStore } from '../context/jobStore'
function ViewAuthJobs() {
  const [jobData, setJobData] = React.useState(null);
  const { state } = React.useContext(ContextJobStore);
  
  React.useEffect(() => {  
    let inputVal = {
      userId: state?.content?.userId,
      businessName: state?.content?.businessName
    }
    axios.post(Urls.MAIN_URL + Urls.GET_AUTHJOB, inputVal)
    .then(function (response) {
      setJobData(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  }, []);
  const dataShow = (name,align) =>{
    return (<div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h1 className="text-1xl font-bold tracking-tight text-black-300" style={{ textAlign: align }}>{name}</h1>
    </div>);
  }
  return (
    <>
      <header className="">
     {dataShow("Jobs posted by you","left")}
      </header>
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          {jobData?.map((item) => <> <AvailableJobs key={item.jobId} job={item} /> <br /></>)}
        </div>
        {jobData? '':dataShow("No Jobs are listed","center")}
      </main>
    </>
  )
}

export default ViewAuthJobs
