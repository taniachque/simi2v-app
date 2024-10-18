import React from 'react';
import celularImage from '../assets/images/celular_con_logo_simi.png';
import 'font-awesome/css/font-awesome.min.css';

const PhoneSection = () => {
  return (
    <section id="hero" className="py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col justify-center lg:w-1/2 order-2 lg:order-1">
            <div data-aos="fade-right" data-aos-duration="1500" className='flex flex-col items-center custom-font'>
              <h2 className="text-3xl mb-4 text-center">
                ¡La 1ra aplicación para aprender <br />
                Quechua de Cochabamba!
              </h2>
              <a 
                href="https://play.google.com/store/apps/details?id=org.labtecnosocial.simi" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="py-2 px-4  hover:underline transition duration-300" 
                id="join-simi" 
                style={{ fontSize: '30px' }}
              >
                ¡Únete a Simi!
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2 flex justify-center items-center">
            <img 
              src={celularImage} 
              className="img-fluid small-image" 
              alt="" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhoneSection;