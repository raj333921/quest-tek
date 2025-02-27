import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ViewJob from './components/viewJob'
import Header from './components/header'
import {ContextJobStoreProvider} from './context/jobStore'
import * as Constants from "./constants"
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
        <Route path={Constants.HOME_PAGE} element={<App />} />
        <Route path={Constants.VIEW_JOB} element={<ViewJob />} />
      </Route>

  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ContextJobStoreProvider>
   <Header />
       <RouterProvider router={router} />
   </ContextJobStoreProvider>
  </StrictMode>,
)
