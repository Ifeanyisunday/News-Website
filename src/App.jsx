import { useState } from 'react'
import './App.css'
import Routes from './routers'
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  ...Routes
])

function App() {

  return (
    <>
      <RouterProvider router={router}>

      </RouterProvider>
    
    </>
  )
}

export default App
