import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

const Footer = () => {
  return (
    <footer id="footer" style={{ backgroundColor: '#5dbf40' }} className="min-h-48 py-12 custom-font">
      <div className="container">
        <div className="text-center text-3xl">
          <h2>Simi</h2>
          <a 
            href="https://www.facebook.com/appsimiquechua" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-gray-300 mx-2"
          >
            <i className="fa fa-facebook"></i>
          </a>
          <a 
            href="https://www.instagram.com/appsimiquechua/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-gray-300 mx-2"
          >
            <i className="fa fa-instagram"></i>
          </a>
          <a 
            href="https://www.youtube.com/channel/UCYWCAC-1g-co7okL_nzvcUQ" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-gray-300 mx-2"
          >
            <i className="fa fa-youtube"></i>
          </a>
          <a 
            href="mailto:simiappbo@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-gray-300 mx-2"
          >
            <i className="fa fa-envelope"></i>
          </a>
          <div className="footer-bottom text-2xl">
            <h5>
              Desarrollado por el{" "}
              <a 
                className="red-link text-white font-bold hover:text-blue-700" 
                target="_blank" 
                rel="noopener noreferrer" 
                href="https://labtecnosocial.org/"
              >
                Lab TecnoSocial
              </a>
            </h5>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;