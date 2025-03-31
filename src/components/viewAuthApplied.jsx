import React,{useEffect} from 'react'
import { ContextJobStore } from '../context/jobStore'
import * as Urls from "./../utilities/urls"
import axios from 'axios'
import './../App.css'
import { dateFormat } from '../utilities/common'

export default function ViewAuthApplied() {

  const [jobData, setJobData] = React.useState(null);
    const { state } = React.useContext(ContextJobStore);
    useEffect(() => {
        let inputVal = {
            businessId: state?.content?.userId,
            businessName: state?.content?.businessName
          }
          axios.get(Urls.MAIN_URL + Urls.APPLYJOB, inputVal)
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

    const handleFileDownload = (event) =>{
        let inputVal = {
            businessId: state?.content?.userId,
            id: event.target.id,
            businessName: state?.content?.businessName
          }
          axios.post(Urls.MAIN_URL + Urls.APPLYJOB+"/"+event.target.id, inputVal)
          .then(function (response) {
            const buf = new Uint8Array(response.data[0].resume.data);
             const blob = new Blob([buf],{type: 'application/pdf'});
             const url = window.URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = response.data[0].fileName;
              a.click();
              window.URL.revokeObjectURL(url);
          })
          .catch(function (error) {
            console.log(error);
          })
          .finally(function () {
            // always executed
          });
    }

    const jobDataIteration = () => {
        return jobData?.map(item => {
         return(<tr key={item.jobId} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item.firstName+' '+item.lastName}
            </th>
            <td className="px-6 py-4">
            {item.emailId}
            </td>
            <td className="px-6 py-4">
            {item.jobRole}
            </td>
            <td className="px-6 py-4">
            {item.jobId}
            </td>
            <td className="px-6 py-4">
            {item.workPermit}
            </td>
            <td className="px-6 py-4">
            {dateFormat(item.created_at)}
            </td>
            <td className="px-6 py-4 text-right">
                <a onClick={handleFileDownload} id={item.id} className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursorPointer">{item.fileName}</a>
            </td>
        </tr>)})
    }

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            FirstName & LastName
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Email Id
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Job Role
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Job Id
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Work Permit
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Uploaded
                        </th>
                        <th scope="col" className="px-6 py-3 text-right">
                            Resume
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {jobDataIteration()}
                </tbody>
            </table>
        </div>
        )


}