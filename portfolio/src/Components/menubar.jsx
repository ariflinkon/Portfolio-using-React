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
    <header className="w-full h-24 bg-white shadow-md flex justify-center z-50 relative">
      <div className="px-[150px] py-[10px] w-full max-w-[1920px] px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="text-3xl font-bold text-purple-700">AJL</div>

        {/* Right Section: Menu + Contact */}
        <div className="hidden lg:flex items-center gap-4">
          <nav className="flex items-center gap-0">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-lg text-gray-700 hover:text-purple-700 transition px-4 py-2"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <Link
            to="/contact"
            className="bg-purple-700 text-white px-6 py-2 rounded-full text-lg font-medium hover:bg-purple-800 transition"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-purple-700">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-24 left-0 w-full bg-white shadow-md z-40">
          <nav className="flex flex-col items-center gap-4 py-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="text-lg text-gray-700 hover:text-purple-700 transition"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-purple-700 text-white px-6 py-2 rounded-full text-lg font-medium hover:bg-purple-800 transition"
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
