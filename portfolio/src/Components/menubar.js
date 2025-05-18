import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ['Home', 'About', 'Process', 'Portfolio', 'Blog', 'Services'];

  return (
    <header className="w-full h-24 bg-white shadow-md flex justify-center">
      <div className="w-full max-w-[1920px] px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="text-3xl font-bold text-purple-700">AJL</div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex gap-6">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-lg text-gray-700 hover:text-purple-700 transition px-6 py-2"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Contact Button */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            className="bg-purple-700 text-white px-6 py-2 rounded-full text-lg font-medium hover:bg-purple-800 transition"
          >
            Contact
          </a>
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
        <div className="lg:hidden absolute top-24 left-0 w-full bg-white shadow-md z-10">
          <nav className="flex flex-col items-center gap-4 py-4">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-lg text-gray-700 hover:text-purple-700 transition"
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-purple-700 text-white px-6 py-2 rounded-full text-lg font-medium hover:bg-purple-800 transition"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
