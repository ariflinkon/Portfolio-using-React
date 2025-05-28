import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Process', path: '/process' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Services', path: '/services' }
  ]

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-[1920px] mx-auto flex items-center justify-between px-6 sm:px-10 lg:px-[150px] py-4 h-24">
        {/* Logo */}
        <div className="text-3xl font-bold text-purple-700">Brooklyn</div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          <nav className="flex items-center gap-2">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-base text-gray-700 hover:text-purple-700 transition px-3 py-2"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <Link
            to="/contact"
            className="bg-purple-700 text-white px-6 py-2 rounded-full text-base font-medium hover:bg-purple-800 transition"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-purple-700">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden w-full bg-white shadow-md absolute top-24 left-0 z-40">
          <nav className="flex flex-col items-center gap-4 py-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="text-base text-gray-700 hover:text-purple-700 transition"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-purple-700 text-white px-6 py-2 rounded-full text-base font-medium hover:bg-purple-800 transition"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
