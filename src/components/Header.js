import React from 'react';
import logo from '../assets/images/logosimi.png';

const Header = () => {
  return (
    <header id="inicio" style={{backgroundColor: '#5dbf40' }}>
      <nav className='bg-red'>
        <div className='container mx-auto px-4'>
            <div className='flex items-center justify-between py-4'>
                <div className='logo-container'>
                    <img src={logo} alt="Logo de Simi" className="h-10" />                
                </div>
                
                <a className='nav-link' href="" style={{ color: '#f4eefe', fontWeight:'bold' }}>Simi</a>

                <button className='navbar-toggler block lg:hidden focus:outline-none' type="button">
                    <span className='navbar-toggler-icon'></span>
                </button>

                <div className="hidden lg:flex flex-grow justify-end space-x-4" id="navbarNav">
                  <ul className="flex space-x-4">
                    <li>
                    <a className="nav-link active text-gray-700 hover:text-blue-500" aria-current="page" href="#inicio">Inicio</a>
                    </li>
                    <li>
                    <a className="nav-link text-gray-700 hover:text-blue-500" href="#cards-section">Acerca de Simi</a>
                    </li>
                    <li>
                    <a className="nav-link text-gray-700 hover:text-blue-500" href="#cards-section-1">Equipo</a>
                    </li>
                    <li>
                    <a className="nav-link text-gray-700 hover:text-blue-500" href="#footer">Nuestras redes</a>
                    </li>
                    <li>
                    <a className="nav-link text-gray-700 hover:text-blue-500" href="#footer">Juegos</a>
                    </li>
                  </ul>
                </div>
            </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;