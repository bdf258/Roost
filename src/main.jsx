import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Finance from './pages/finance.jsx'
import MyHome from './pages/my-home-maintenance.jsx'
import Settings from './pages/settings'
import FindAHome from './pages/find-a-home'
import HomesAvailable from './pages/homes-available'

import { BrowserRouter, Routes, Route } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Finance />} />
        <Route path="/my-home" element={<MyHome />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/find-a-home" element={<FindAHome />} />
        <Route path="/homes-available" element={<HomesAvailable />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
