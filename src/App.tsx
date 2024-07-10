import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Onboarding from './components/Onboarding'
import Login from './components/create-account/Login'
import NewAccount from './components/create-account/New-account'
import Security from './components/security-password/security'
import FundWallet from './components/home/fund-wallet'
import Index from './components/home/dashboard'
import BulkSMS from './components/home/bulk-sms'


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Onboarding />} />
        <Route path='/login' element={<Login />} />
        <Route path='/new-account' element={<NewAccount />}></Route>
        <Route path='/security' element={<Security />}></Route>
        <Route path='/home' element={<Index />}></Route>
        <Route path='/fund-wallet' element={<FundWallet />}></Route>
        <Route path='/bulk-sms' element={<BulkSMS />}></Route>
      </Routes>
    </Router>
  )
}

export default App
