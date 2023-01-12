// Import packages and components
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter} from "react-router-dom"


// Create the render root
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
