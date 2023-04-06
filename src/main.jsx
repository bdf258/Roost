import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import FindAHome from './pages/find-a-home'
import HomesAvailable from './pages/homes-available'

import { BrowserRouter, Routes, Route } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FindAHome />} />
        <Route path="/homes-available" element={<HomesAvailable />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
