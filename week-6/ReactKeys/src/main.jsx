import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AppWrapperComp from './AppWrapperComp.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWrapperComp />
  </React.StrictMode>,
)
