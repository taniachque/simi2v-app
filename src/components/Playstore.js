import React from 'react';
import GooglePlayLogo from '../assets/images/google_play.png';
import NinoLeyendo from '../assets/images/ninoleyendo.png';

const Playstore = () => {
  return (
    <section id="hero" className="py-10">
      <div className="container mx-auto" data-aos="fade-in" data-aos-duration="3000">
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col justify-center items-center lg:w-1/2 order-2 lg:order-1 pt-5 lg:pt-0">
            <div className="mb-8 text-center">
              <h1 className="text-4xl mb-6">Simi</h1>
              <h3 className="text-xl mb-6">Aprende Quechua de una manera amigable</h3>
              <a
                href="https://play.google.com/store/apps/details?id=org.labtecnosocial.simi"
                className="inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={GooglePlayLogo} className="max-w-xs h-auto" alt="Google Play" />
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2">
            <img src={NinoLeyendo} className="max-w-s h-auto" alt="Niño leyendo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Playstore;