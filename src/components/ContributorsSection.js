import React from 'react';
import LogoLabtecnosocial from '../assets/images/logolabtecnosocial.png';
import LogoAtuqyachachiq from '../assets/images/logoatuqyachachiq.png';
import Logoelp from '../assets/images/logoelp.png';

const ContributorsSection = () => {
  return (
    <div id="logos" className="logos">
      <div className="container mx-auto mt-12">
        <div className="text-center" data-aos="fade-up">
          <h2 className="text-xl font-bold">Una iniciativa de:</h2>
        </div>

        <div className="flex flex-wrap justify-center mt-14 mb-8">
          <div className="w-1/4 md:w-1/3 sm:w-1/2 flex items-center justify-center p-4">
            <div className="logo" data-aos="zoom-in">
              <img src={LogoLabtecnosocial} className="w-28 h-auto" alt="Logo Labtecnosocial" />
            </div>
          </div>

          <div className="w-1/4 md:w-1/3 sm:w-1/2 flex items-center justify-center p-4">
            <div className="logo" data-aos="zoom-in" data-aos-delay="100">
              <img src={LogoAtuqyachachiq} className="w-28 h-auto" alt="Logo Atuqyachachiq" />
            </div>
          </div>
        </div>


        <div className="text-center mt-8" data-aos="fade-up">
          <h2 className="text-xl font-bold">Con el apoyo de:</h2>
        </div>

        <div className="flex flex-wrap justify-center mt-4 mb-24">
          <div className="w-1/4 md:w-1/3 sm:w-1/2 flex items-center justify-center p-4">
            <div className="logo-elp" data-aos="zoom-in">
              <img src={Logoelp} className="w-40 h-auto" alt="Logo Elp" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContributorsSection;