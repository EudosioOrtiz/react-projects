import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//siempre tienen que empezar en mayusculas los elementos en pascal case
const Button = ({text})=>{
  return(<button>{text}</button>)
}

createRoot(document.getElementById('root')).render(
  <App />
)
