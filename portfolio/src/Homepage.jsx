import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/menubar'
// import Footer from './Components/footer'
import Home from './Components/home'
// import About from './Pages/about'
// import Process from './Pages/process'
// import Portfolio from './Pages/portfolio'
// import Blog from './Pages/blog'
// import Services from './Pages/services'
// import Contact from './Pages/contact'
import './index.css'

function Homepage() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/process" element={<Process />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  )
}


export default Homepage
