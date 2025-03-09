import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ViewJob from './components/viewJob'
import Company from './components/Company'
import ApplyForJob from './components/applyForJob'
import PostJob from './components/PostJob'
import Login from './components/Login'
import Header from './components/header'
import {ContextJobStoreProvider} from './context/jobStore'
import * as Constants from "./constants"
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
        <Route exact path={Constants.HOME_PAGE} element={<App />} />
        <Route path={Constants.VIEW_JOB} element={<ViewJob />} />
        <Route path={Constants.COMPANY} element={<Company />} />
        <Route path={Constants.APPLY_JOB} element={<ApplyForJob />} />
        <Route path={Constants.LOGIN} element={<Login />} />
        <Route path={Constants.POST_JOB} element={<PostJob />} />
      </Route>

  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ContextJobStoreProvider>
    <RouterProvider router={router} >
    </RouterProvider>
   </ContextJobStoreProvider>
  </StrictMode>,
)
