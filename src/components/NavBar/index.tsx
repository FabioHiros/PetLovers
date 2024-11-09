import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-azul-100 w-full mb-5">
      <div className="mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="w-40 max-md:w-24 bg-azul-100">
            <Link to="/">
              <button>
                <img src={logo} alt="Logo" />
              </button>
            </Link>
          </div>

          <div className="hidden md:flex space-x-4">
            {['Clientes', 'Produtos', 'Serviços', 'Comprar', 'Dashboard'].map((item) => (
              <Link to={`/${item.toLowerCase()}`} key={item}>
                <button className="font-bold text-2xl h-10 w-full">{item}</button>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle Menu">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-azul-400 transition-all duration-300 ease-in-out ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        {['Clientes', 'Produtos', 'Serviços', 'Comprar', 'Dashboard'].map((item) => (
          <Link to={`/${item.toLowerCase()}`} key={item}>
            <button className="block w-full text-left py-2 px-4 border-b-2">{item}</button>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
