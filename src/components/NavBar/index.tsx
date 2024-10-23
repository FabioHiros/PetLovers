import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo.png';

class Navbar extends Component {
  state = {
    isOpen: false,
  };

  toggleMenu = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    return (
      <>
        <nav className="bg-azul-100 w-full mb-5">
          <div className=" mx-auto px-4 lg:px-8">
            <div className="flex justify-between place-items-end">
              <div className="w-40 max-md:w-24 bg-azul-100">
                <Link to="/">
                  <button>
                    <img src={logo} alt="Logo" />
                  </button>
                </Link>
              </div>

              <div className="max-md:hidden">
                <Link to="/clientes">
                  <button className='font-bold text-2xl h-10 w-full'>Clientes</button>
                </Link>
              </div>
              <div className="max-md:hidden">
                <Link to="/produtos">
                  <button className='font-bold text-2xl h-10 w-full'>Produtos</button>
                </Link>
              </div>
              <div className="max-md:hidden">
                <Link to="/serviços">
                  <button className='font-bold text-2xl h-10 w-full'>Serviços</button>
                </Link>
              </div>
              <div className="max-md:hidden">
                <Link to="/comprar">
                  <button className='font-bold text-2xl h-10 w-full'>Comprar</button>
                </Link>
              </div>
              <div className="max-md:hidden">
                <Link to="/dashboard">
                  <button className='font-bold text-2xl h-10 w-full'>Dashboard</button>
                </Link>
              </div>

              <div className="flex md:hidden max-md:justify-end">
                <button onClick={this.toggleMenu}>
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
            className={`md:hidden flex flex-col place-items-end border px-4 bg-azul-400 transition-all duration-300 ease-in-out overflow-hidden ${
              this.state.isOpen ? 'max-h-52 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <Link to="/clientes">
              <button className="border-b-2 mt-2">Clientes</button>
            </Link>
            <Link to="/produtos">
              <button className="border-b-2 mt-2">Produtos</button>
            </Link>
            <Link to="/serviços">
              <button className="border-b-2 mt-2">Serviços</button>
            </Link>
            <Link to="/comprar">
              <button className="border-b-2 mt-2">Comprar</button>
            </Link>
            
            <Link to="/dashboard">
              <button className="border-b-2 mt-2">Dashboard</button>
            </Link>
            
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
