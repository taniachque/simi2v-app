import React, { useEffect, useState } from 'react';
import personajessimiImage from '../assets/images/personajessimi.png';
import problemasimiImage from '../assets/images/problemasimi.png';

const HeroForm = () => {
  const [scrollMessageVisible, setScrollMessageVisible] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const elementPosition = document.getElementById('people-images').offsetTop;

      // Mostrar la ventana de sugerencias cuando se hace scroll
      if (window.scrollY > elementPosition - window.innerHeight + 200) {
        setScrollMessageVisible(true);
      } else {
        setScrollMessageVisible(false);
      }

      if (currentScrollPos < prevScrollPos) {
        setScrollMessageVisible(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const closeMessage = () => {
    setScrollMessageVisible(false);
  };

  return (
    <div className="flex flex-col lg:flex-row">
      {/* People Section */}
      <section id="people-images" className="relative w-full">
        <img 
          src={personajessimiImage} 
          className="w-full h-auto"
          alt="Imagen de personajes Simi" 
        />
        
        {/* Suggestion Box */}
        {scrollMessageVisible && (
          <div className="scroll-message absolute bg-white bg-opacity-80 border rounded shadow-lg p-4 lg:w-1/3 lg:right-4 lg:bottom-16 text-sm">
            <div className="close-btn" onClick={closeMessage}>
              <span className="close-icon cursor-pointer">×</span>
            </div>
            <p>¿Quieres dejar alguna sugerencia?</p>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSf91IAN8xH9o4VQnELxAWdFbj6iYhXcgyOsRMGYHD8BrpZ8Qw/viewform" 
              target="_blank" 
              rel="noopener noreferrer"
              className='font-bold'
            >
              Haz click acá para mandarnos tu sugerencia
            </a>
            <p>¿Encontraste un error?</p>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSdDCzuKpa-6jABQICgjvb9mYONlmQ1XKc24IuuLLlbmobTDpQ/viewform" 
              target="_blank" 
              rel="noopener noreferrer"
              className='font-bold'
            >
              Reporta el error haciendo click acá
            </a>
            <img 
              className='h-32 w-auto mx-auto'
              src={problemasimiImage} 
              alt="Imagen de problemas Simi" 
            />
          </div>
        )}
      </section>
    </div>
  );
};

export default HeroForm;