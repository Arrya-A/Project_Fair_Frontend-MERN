import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Auth from './pages/Auth'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth insideRegister={true} />} />
        <Route path='/projects' element={<Projects />} />
        {/* path parameter - id set, because each user has unique id */}
        <Route path='/:id/dashboard' element={<Dashboard />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
