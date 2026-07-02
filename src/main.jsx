import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./css/style.css";
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById('root')).render(
   <BrowserRouter>
   <ToastContainer autoClose={1000} />
    <App />
  </BrowserRouter>
)
