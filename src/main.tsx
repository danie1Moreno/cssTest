import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Pprovider } from "./Redux/providers.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Pprovider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Pprovider>
  </React.StrictMode>
)
