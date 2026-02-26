import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import Heropage from './pages/heropage'
import Footer from './components/footer'
import SignIn from './pages/signin'
import SignUp from './pages/signup'
import BookAppointment from './pages/bookappointment'
import Dashboard from './pages/dashboard'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Header /><Heropage /><Footer /></>} />
        <Route path="/signin" element={<><Header /><SignIn /><Footer /></>} />
        <Route path="/signup" element={<><Header /><SignUp /><Footer /></>} />
        <Route path="/book-appointment" element={<><Header /><BookAppointment /><Footer /></>} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
