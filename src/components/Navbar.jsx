import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 ">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <a href="#home" className="text-xl font-bold text-gray-900">Primedevs</a>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-gray-700">
          <li><a href="#home" className="hover:text-blue-600 transition">Home</a></li>
          <li><a href="#about" className="hover:text-blue-600 transition">About</a></li>
          <li><a href="#products" className="hover:text-blue-600 transition">Products</a></li>
          <li><a href="#services" className="hover:text-blue-600 transition">Services</a></li>
          <li><a href="#contact" className="hover:text-blue-600 transition">Contact</a></li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6 text-gray-900" /> : <Menu className="w-6 h-6 text-gray-900" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col gap-4 bg-white border-t p-4 text-gray-700 md:hidden">
          <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#products" onClick={() => setIsOpen(false)}>Products</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
