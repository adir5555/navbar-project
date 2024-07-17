import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import { router } from './Rouret/Rouret';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className=" bg-blue-950 text-white">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
