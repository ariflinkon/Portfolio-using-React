import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/menubar'
import './index.css'

function Homepage() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />} />
      </Routes>
    </Router>
  )
}

export default Homepage
