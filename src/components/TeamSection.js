import React from 'react';

import alexRojasImg from '../assets/images/alexrojas.jpg';
import nicaelaLeonImg from '../assets/images/nicaelaleon.jpg';
import ruthJimenezImg from '../assets/images/ruthjimenez.jpg';
import elenaRocabadoImg from '../assets/images/elenarocabado.jpg';
import taniaGiselaImg from '../assets/images/taniagisela.jpg';
import karlaGalvezImg from '../assets/images/karlagalvez.jpg';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Alex Ojeda Copa",
      role: "Sociólogo e informático",
      imgSrc: alexRojasImg,
      linkedIn: "https://www.linkedin.com/in/alexroc/"
    },
    {
      name: "Nicaela Leon Coico",
      role: "Lingüista e Ilustradora infantil",
      imgSrc: nicaelaLeonImg,
      linkedIn: "https://www.linkedin.com/in/nicaelaleon/"
    },
    {
      name: "Ruth Jimenez Nina",
      role: "Lingüista",
      imgSrc: ruthJimenezImg,
      linkedIn: "https://www.twitter.com/tu_enlace_de_twitter"
    },
    {
      name: "Elena Rocabado Zalles",
      role: "Lingüista",
      imgSrc: elenaRocabadoImg,
      linkedIn: "https://www.linkedin.com/in/celia-elena-rocabado-zalles-4a7239257/"
    },
    {
      name: "Tania Gisela Choque Condori",
      role: "Ingeniera de sistemas y médico cirujano",
      imgSrc: taniaGiselaImg,
      linkedIn: "https://bo.linkedin.com/in/tania-gisela-choque-condori"
    },
    {
      name: "Karla Galvez",
      role: "Comunicadora Social",
      imgSrc: karlaGalvezImg,
      linkedIn: "https://www.twitter.com/tu_enlace_de_twitter"
    },
  ];

  return (
    <section id="cards-section-1" style={{ backgroundColor: '#f4eefe' }} className="container mx-auto pt-2 mb-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold mt-8">Equipo</h2>
      </div>
      <div className="flex flex-wrap justify-center">
        {teamMembers.map((member, index) => (
          <div key={index} className="w-full md:w-1/3 my-1 px-2">
            <div className="rounded-lg flex flex-col h-full">
              <div className="p-4 text-center flex flex-col justify-center items-center">
                <img src={member.imgSrc} className="rounded-full w-32 h-32 object-cover mb-4" alt={member.name} />
                <h5 className="text-xl font-semibold">{member.name}</h5>
                <p className="text-gray-700">{member.role}</p>
                <div className="mt-2">
                  <a 
                    href={member.linkedIn} 
                    className="text-blue-500 hover:text-blue-700" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;