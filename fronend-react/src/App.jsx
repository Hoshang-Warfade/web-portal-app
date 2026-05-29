import './assets/css/style.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import AuthProvider from './components/AuthProvider'

function App() {


  return (
    <>
    <AuthProvider>
      <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
    <Footer />
    </Router>
    </AuthProvider>

    </>
  )
}

export default App
