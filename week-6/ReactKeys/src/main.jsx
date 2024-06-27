import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AppWrapperComp from './AppWrapperComp.jsx'
import AppRandomTodoRenderer from './AppRandomTodoRenderer.jsx'
import AppIdTodoRenderer from './AppIdTodoRenderer.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // Removed React.StrictMode as it intentionally double-invokes
  // components and causes unnecessary re-renders
    <AppIdTodoRenderer />
)
