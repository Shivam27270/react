import react from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'
import Btn from "./button"

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(
 
    <>
    <App />
    <Btn />
    </>
  
)

