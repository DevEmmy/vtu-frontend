import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Onboarding from './components/Onboarding'
import Login from './components/create-account/Login'
import NewAccount from './components/create-account/New-account'
import Security from './components/security-password/security'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Onboarding />} />
        <Route path='/login' element={<Login />} />
        <Route path='/new-account' element={<NewAccount />}></Route>
        <Route path='/security' element={<Security onSuccess={function (): void {
          throw new Error('Function not implemented.')
        } } />}></Route>
      </Routes>
    </Router>
  )
}

export default App
