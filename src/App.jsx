import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AvailableJobs from './components/availableJobs'
function App() {

  var jobs = [
               {
                 "jobRole": "Backend Developer",
                 "jobId": "1",
                 "type": "Hybrid",
                 "salary": "",
                 "closeDate": "23/01/2025",
                 "location": "Brussels","description": "For a public institution in Antwerp that falls under the category \"important\" within the NIS2 directive, we are looking for an experienced Enterprise (Security) Architect . The specialist will guide the client in the further development of a robust and future-oriented cybersecurity policy and IT governance, with the aim of being fully in line with the applicable laws and regulations (NIS2) by 2027 .The assignment starts with a thorough GAP analysis to map the current situation, followed by the creation of a strategic roadmap with concrete actions and priorities. The candidate works closely with both IT and business stakeholders to successfully realize this trajectory.",
                                                                        "techDetails":"Performing a GAP analysis to map maturity, risks and compliance levels\nDeveloping a roadmap to make the organization future-proof in the field of IT security and risk management.\nProvide guidance in the implementation of security frameworks such as NIS2 .\nProviding advice and support in the preparation and adjustment of processes.\nDrafting and optimizing security policies, procedures and governance models.\nGuiding internal teams and management in strengthening cybersecurity awareness and risk management.\nCollaborate with legal and operational teams to meet compliance and reporting requirements.\nDrawing up reports and advice for management and relevant stakeholders."

               },
               {
                 "jobRole": "Qlick Developer",
                 "jobId": "2",
                 "type": "Hybrid",
                 "salary": "",
                 "closeDate": "23/01/2025",
                 "location": "Brussels","description": "For a public institution in Antwerp that falls under the category \"important\" within the NIS2 directive, we are looking for an experienced Enterprise (Security) Architect . The specialist will guide the client in the further development of a robust and future-oriented cybersecurity policy and IT governance, with the aim of being fully in line with the applicable laws and regulations (NIS2) by 2027 .The assignment starts with a thorough GAP analysis to map the current situation, followed by the creation of a strategic roadmap with concrete actions and priorities. The candidate works closely with both IT and business stakeholders to successfully realize this trajectory.",
                                                                        "techDetails":"Performing a GAP analysis to map maturity, risks and compliance levels\nDeveloping a roadmap to make the organization future-proof in the field of IT security and risk management.\nProvide guidance in the implementation of security frameworks such as NIS2 .\nProviding advice and support in the preparation and adjustment of processes.\nDrafting and optimizing security policies, procedures and governance models.\nGuiding internal teams and management in strengthening cybersecurity awareness and risk management.\nCollaborate with legal and operational teams to meet compliance and reporting requirements.\nDrawing up reports and advice for management and relevant stakeholders."

               },
               {
                 "jobRole": "SAP HANA Developer",
                 "jobId": "3",
                 "type": "Hybrid",
                 "salary": "",
                 "closeDate": "23/01/2025",
                 "location": "Brussels","description": "For a public institution in Antwerp that falls under the category \"important\" within the NIS2 directive, we are looking for an experienced Enterprise (Security) Architect . The specialist will guide the client in the further development of a robust and future-oriented cybersecurity policy and IT governance, with the aim of being fully in line with the applicable laws and regulations (NIS2) by 2027 .The assignment starts with a thorough GAP analysis to map the current situation, followed by the creation of a strategic roadmap with concrete actions and priorities. The candidate works closely with both IT and business stakeholders to successfully realize this trajectory.",
                                                                        "techDetails":"Performing a GAP analysis to map maturity, risks and compliance levels\nDeveloping a roadmap to make the organization future-proof in the field of IT security and risk management.\nProvide guidance in the implementation of security frameworks such as NIS2 .\nProviding advice and support in the preparation and adjustment of processes.\nDrafting and optimizing security policies, procedures and governance models.\nGuiding internal teams and management in strengthening cybersecurity awareness and risk management.\nCollaborate with legal and operational teams to meet compliance and reporting requirements.\nDrawing up reports and advice for management and relevant stakeholders."

               },
               {
                 "jobRole": "BODS Developer",
                 "jobId": "4",
                 "type": "Hybrid",
                 "salary": "",
                 "closeDate": "23/01/2025",
                 "location": "Brussels","description": "For a public institution in Antwerp that falls under the category \"important\" within the NIS2 directive, we are looking for an experienced Enterprise (Security) Architect . The specialist will guide the client in the further development of a robust and future-oriented cybersecurity policy and IT governance, with the aim of being fully in line with the applicable laws and regulations (NIS2) by 2027 .The assignment starts with a thorough GAP analysis to map the current situation, followed by the creation of a strategic roadmap with concrete actions and priorities. The candidate works closely with both IT and business stakeholders to successfully realize this trajectory.",
                                                                        "techDetails":"Performing a GAP analysis to map maturity, risks and compliance levels\nDeveloping a roadmap to make the organization future-proof in the field of IT security and risk management.\nProvide guidance in the implementation of security frameworks such as NIS2 .\nProviding advice and support in the preparation and adjustment of processes.\nDrafting and optimizing security policies, procedures and governance models.\nGuiding internal teams and management in strengthening cybersecurity awareness and risk management.\nCollaborate with legal and operational teams to meet compliance and reporting requirements.\nDrawing up reports and advice for management and relevant stakeholders."

               },
               {
                 "jobRole": "Backend Developer",
                 "jobId": "5",
                 "type": "Hybrid",
                 "salary": "",
                 "closeDate": "23/01/2025",
                 "location": "Brussels","description": "For a public institution in Antwerp that falls under the category \"important\" within the NIS2 directive, we are looking for an experienced Enterprise (Security) Architect . The specialist will guide the client in the further development of a robust and future-oriented cybersecurity policy and IT governance, with the aim of being fully in line with the applicable laws and regulations (NIS2) by 2027 .The assignment starts with a thorough GAP analysis to map the current situation, followed by the creation of a strategic roadmap with concrete actions and priorities. The candidate works closely with both IT and business stakeholders to successfully realize this trajectory.",
                                                                        "techDetails":"Performing a GAP analysis to map maturity, risks and compliance levels\nDeveloping a roadmap to make the organization future-proof in the field of IT security and risk management.\nProvide guidance in the implementation of security frameworks such as NIS2 .\nProviding advice and support in the preparation and adjustment of processes.\nDrafting and optimizing security policies, procedures and governance models.\nGuiding internal teams and management in strengthening cybersecurity awareness and risk management.\nCollaborate with legal and operational teams to meet compliance and reporting requirements.\nDrawing up reports and advice for management and relevant stakeholders."

               },
               {
                 "jobRole": "Qlick Developer",
                 "jobId": "6",
                 "type": "Hybrid",
                 "salary": "",
                 "closeDate": "23/01/2025",
                 "location": "Brussels","description": "For a public institution in Antwerp that falls under the category \"important\" within the NIS2 directive, we are looking for an experienced Enterprise (Security) Architect . The specialist will guide the client in the further development of a robust and future-oriented cybersecurity policy and IT governance, with the aim of being fully in line with the applicable laws and regulations (NIS2) by 2027 .The assignment starts with a thorough GAP analysis to map the current situation, followed by the creation of a strategic roadmap with concrete actions and priorities. The candidate works closely with both IT and business stakeholders to successfully realize this trajectory.",
                                                                        "techDetails":"Performing a GAP analysis to map maturity, risks and compliance levels\nDeveloping a roadmap to make the organization future-proof in the field of IT security and risk management.\nProvide guidance in the implementation of security frameworks such as NIS2 .\nProviding advice and support in the preparation and adjustment of processes.\nDrafting and optimizing security policies, procedures and governance models.\nGuiding internal teams and management in strengthening cybersecurity awareness and risk management.\nCollaborate with legal and operational teams to meet compliance and reporting requirements.\nDrawing up reports and advice for management and relevant stakeholders."

               },
               {
                 "jobRole": "SAP HANA Developer",
                 "jobId": "7",
                 "type": "Hybrid",
                 "salary": "",
                 "closeDate": "23/01/2025",
                 "location": "Brussels","description": "For a public institution in Antwerp that falls under the category \"important\" within the NIS2 directive, we are looking for an experienced Enterprise (Security) Architect . The specialist will guide the client in the further development of a robust and future-oriented cybersecurity policy and IT governance, with the aim of being fully in line with the applicable laws and regulations (NIS2) by 2027 .The assignment starts with a thorough GAP analysis to map the current situation, followed by the creation of a strategic roadmap with concrete actions and priorities. The candidate works closely with both IT and business stakeholders to successfully realize this trajectory.",
                                                                        "techDetails":"Performing a GAP analysis to map maturity, risks and compliance levels\nDeveloping a roadmap to make the organization future-proof in the field of IT security and risk management.\nProvide guidance in the implementation of security frameworks such as NIS2 .\nProviding advice and support in the preparation and adjustment of processes.\nDrafting and optimizing security policies, procedures and governance models.\nGuiding internal teams and management in strengthening cybersecurity awareness and risk management.\nCollaborate with legal and operational teams to meet compliance and reporting requirements.\nDrawing up reports and advice for management and relevant stakeholders."

               },
               {
                 "jobRole": "BODS Developer",
                 "jobId": "8",
                 "type": "Hybrid",
                 "salary": "",
                 "closeDate": "23/01/2025",
                 "location": "Brussels","description": "For a public institution in Antwerp that falls under the category \"important\" within the NIS2 directive, we are looking for an experienced Enterprise (Security) Architect . The specialist will guide the client in the further development of a robust and future-oriented cybersecurity policy and IT governance, with the aim of being fully in line with the applicable laws and regulations (NIS2) by 2027 .The assignment starts with a thorough GAP analysis to map the current situation, followed by the creation of a strategic roadmap with concrete actions and priorities. The candidate works closely with both IT and business stakeholders to successfully realize this trajectory.",
                                                                        "techDetails":"Performing a GAP analysis to map maturity, risks and compliance levels\nDeveloping a roadmap to make the organization future-proof in the field of IT security and risk management.\nProvide guidance in the implementation of security frameworks such as NIS2 .\nProviding advice and support in the preparation and adjustment of processes.\nDrafting and optimizing security policies, procedures and governance models.\nGuiding internal teams and management in strengthening cybersecurity awareness and risk management.\nCollaborate with legal and operational teams to meet compliance and reporting requirements.\nDrawing up reports and advice for management and relevant stakeholders."

               },
               {
                 "jobRole": "Backend Developer",
                 "jobId": "9",
                 "type": "Hybrid",
                 "salary": "",
                 "closeDate": "23/01/2025",
                 "location": "Brussels","description": "For a public institution in Antwerp that falls under the category \"important\" within the NIS2 directive, we are looking for an experienced Enterprise (Security) Architect . The specialist will guide the client in the further development of a robust and future-oriented cybersecurity policy and IT governance, with the aim of being fully in line with the applicable laws and regulations (NIS2) by 2027 .The assignment starts with a thorough GAP analysis to map the current situation, followed by the creation of a strategic roadmap with concrete actions and priorities. The candidate works closely with both IT and business stakeholders to successfully realize this trajectory.",
                                                                        "techDetails":"Performing a GAP analysis to map maturity, risks and compliance levels\nDeveloping a roadmap to make the organization future-proof in the field of IT security and risk management.\nProvide guidance in the implementation of security frameworks such as NIS2 .\nProviding advice and support in the preparation and adjustment of processes.\nDrafting and optimizing security policies, procedures and governance models.\nGuiding internal teams and management in strengthening cybersecurity awareness and risk management.\nCollaborate with legal and operational teams to meet compliance and reporting requirements.\nDrawing up reports and advice for management and relevant stakeholders."

               },
               {
                 "jobRole": "Qlick Developer",
                 "jobId": "10",
                 "type": "Hybrid",
                 "salary": "",
                 "closeDate": "23/01/2025",
                 "location": "Brussels",
                 "description": "For a public institution in Antwerp that falls under the category \"important\" within the NIS2 directive, we are looking for an experienced Enterprise (Security) Architect . The specialist will guide the client in the further development of a robust and future-oriented cybersecurity policy and IT governance, with the aim of being fully in line with the applicable laws and regulations (NIS2) by 2027 .The assignment starts with a thorough GAP analysis to map the current situation, followed by the creation of a strategic roadmap with concrete actions and priorities. The candidate works closely with both IT and business stakeholders to successfully realize this trajectory.",
                                                 "techDetails":"Performing a GAP analysis to map maturity, risks and compliance levels\nDeveloping a roadmap to make the organization future-proof in the field of IT security and risk management.\nProvide guidance in the implementation of security frameworks such as NIS2 .\nProviding advice and support in the preparation and adjustment of processes.\nDrafting and optimizing security policies, procedures and governance models.\nGuiding internal teams and management in strengthening cybersecurity awareness and risk management.\nCollaborate with legal and operational teams to meet compliance and reporting requirements.\nDrawing up reports and advice for management and relevant stakeholders."

               },
               {
                 "jobRole": "SAP HANA Developer",
                 "jobId": "11",
                 "type": "Hybrid",
                 "salary": "",
                 "closeDate": "23/01/2025",
                 "location": "Brussels",
                 "description": "For a public institution in Antwerp that falls under the category \"important\" within the NIS2 directive, we are looking for an experienced Enterprise (Security) Architect . The specialist will guide the client in the further development of a robust and future-oriented cybersecurity policy and IT governance, with the aim of being fully in line with the applicable laws and regulations (NIS2) by 2027 .The assignment starts with a thorough GAP analysis to map the current situation, followed by the creation of a strategic roadmap with concrete actions and priorities. The candidate works closely with both IT and business stakeholders to successfully realize this trajectory.",
                                                 "techDetails":"Performing a GAP analysis to map maturity, risks and compliance levels\nDeveloping a roadmap to make the organization future-proof in the field of IT security and risk management.\nProvide guidance in the implementation of security frameworks such as NIS2 .\nProviding advice and support in the preparation and adjustment of processes.\nDrafting and optimizing security policies, procedures and governance models.\nGuiding internal teams and management in strengthening cybersecurity awareness and risk management.\nCollaborate with legal and operational teams to meet compliance and reporting requirements.\nDrawing up reports and advice for management and relevant stakeholders."

               },
               {
                                "jobRole": "BODS Developer",
                                "jobId": "12",
                                "type": "Hybrid",
                                "salary": "",
                                "closeDate": "23/01/2025",
                                "location": "Brussels",
                                "description": "For a public institution in Antwerp that falls under the category \"important\" within the NIS2 directive, we are looking for an experienced Enterprise (Security) Architect . The specialist will guide the client in the further development of a robust and future-oriented cybersecurity policy and IT governance, with the aim of being fully in line with the applicable laws and regulations (NIS2) by 2027 .The assignment starts with a thorough GAP analysis to map the current situation, followed by the creation of a strategic roadmap with concrete actions and priorities. The candidate works closely with both IT and business stakeholders to successfully realize this trajectory.",
                                "techDetails":"Performing a GAP analysis to map maturity, risks and compliance levels\nDeveloping a roadmap to make the organization future-proof in the field of IT security and risk management.\nProvide guidance in the implementation of security frameworks such as NIS2 .\nProviding advice and support in the preparation and adjustment of processes.\nDrafting and optimizing security policies, procedures and governance models.\nGuiding internal teams and management in strengthening cybersecurity awareness and risk management.\nCollaborate with legal and operational teams to meet compliance and reporting requirements.\nDrawing up reports and advice for management and relevant stakeholders."
                              }
             ];
  return (
    <>
    <header className="bg-white shadow-sm">
              <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <h1 className="text-1xl font-bold tracking-tight text-black-300" style={{textAlign:"left"}}>Available Jobs</h1>
              </div>
            </header>
            <main>
              <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                {jobs.map((item) =><> <AvailableJobs key={item.jobId} job={item}/> <br/></>)}
              </div>
            </main>
    </>
  )
}

export default App
