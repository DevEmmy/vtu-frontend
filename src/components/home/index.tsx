import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from './dashboard'
import FundWallet from './fund-wallet'

import React from 'react'

function index() {
  return (
    
        <>
        <Dashboard />
        <Router>
            <Routes></Routes>
        </Router>   
            
        </>
            
        
    
      
    
  )
}

export default index
