import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Onboarding from './components/Onboarding'
import Login from './components/create-account/Login'
import NewAccount from './components/create-account/New-account'
import Security from './components/security-password/security'
import FundWallet from './components/home/quick-actions/fund-wallet'
import Index from './components/home/dashboard'
import BulkSMS from './components/home/services/bulk-sms'
import BuyData from './components/home/quick-actions/buy-data'
import BuyAirtime from './components/home/quick-actions/buy-airtime'
import Successful from './components/home/successful'
import Reciept from './components/home/reciept'
import PayBills from './components/home/quick-actions/pay-bills'
import SmileData from './components/home/services/smile-data'
import Services from './components/home/services/services'
import Transactions from './components/home/transactions'
import Profile from './components/home/profile/profile'
import ProfileEdit from './components/home/profile/profile-edit'
import Settings from './components/home/settings/settings'
import AccountSettings from './components/home/settings/account-settings'
import NotificationSettings from './components/home/settings/notification-settings'
import PrivacySettings from './components/home/settings/privacy-settings'
import ChangePassword from './components/home/settings/change-password'
import EducationalPins from './components/home/services/educational-pins'
import TvSubscription from './components/home/services/tv-subscription'

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
        <Route path='/successful' element={<Successful />}></Route>
        <Route path='/buy-data' element={<BuyData />}></Route>
        <Route path='/reciept' element={<Reciept />}></Route>
        <Route path='/buy-airtime' element={<BuyAirtime />}></Route>
        <Route path='/pay-bills' element={<PayBills />}></Route>
        <Route path='/smile-data' element={<SmileData />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/transactions' element={<Transactions />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/profile-edit' element={<ProfileEdit />}></Route>
        <Route path='/settings' element={<Settings />}></Route>
        <Route path='/account-settings' element={<AccountSettings />}></Route>
        <Route path='/notification-settings' element={<NotificationSettings />}></Route>
        <Route path='/privacy-settings' element={<PrivacySettings />}></Route>
        <Route path='/change-password' element={<ChangePassword />}></Route>
        <Route path='/educational-pins' element={<EducationalPins />}></Route>
        <Route path='/tv-subscription' element={<TvSubscription />}></Route>

      </Routes>
    </Router>
  )
}

export default App
