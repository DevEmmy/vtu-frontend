import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from './dashboard'
import FundWallet from './quick action/fund-wallet'

import React from 'react'

function index() {
  return (
    
      <Routes>
        <Route path='/' element={<Dashboard />}></Route>
        <Route path='/fund-wallet' element={<FundWallet />}></Route>
      </Routes>
    
  )
}

export default index
