import React from 'react'
import ReactDOM from 'react-dom/client'
import Route from './route';
import './index.css'
import Home from './componenet/home';
import About from './componenet/about';
import Locations from './componenet/locations';
import Careers from './componenet/careers';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Route></Route>,
    children: [
   {
     path: "/",
     element: <Home></Home>
   },
   {
     path: "/about",
     element: <About></About>
   },
   {
     path: "/locations",
     element: <Locations></Locations>
   },
   {
     path: "/careers",
     element: <Careers></Careers>
   },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
