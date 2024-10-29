import React from 'react';

const CardsSection = () => {
  return (
    <section id="cards-section" style={{ backgroundColor: '#f4eefe' }} className="mt-0 mb-4 min-h-96 py-10 text-center">
      <div className="container mx-auto p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold title-above-cards">Acerca de Simi</h2>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white shadow-md rounded-lg h-full">
              <div className="p-6">
                <h5 className="text-xl font-semibold">Misión</h5>
                <p className="mt-2 text-gray-700">
                  Simi se trata de una aplicación para celulares que promueve el aprendizaje del quechua nivel básico de una forma amigable 
                  y accesible a través de unidades de aprendizaje que contienen audios e ilustraciones.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white shadow-md rounded-lg h-full">
              <div className="p-6">
                <h5 className="text-xl font-semibold">Quienes somos</h5>
                <p className="mt-2 text-gray-700">
                  Simi es un equipo multidisciplinario compuesto por profesionales voluntarias/os del área de programación, lingüística y
                   comunicación social que apuntan por el fortalecimiento del quechua en contextos digitales.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white shadow-md rounded-lg h-full">
              <div className="p-6">
                <h5 className="text-xl font-semibold">Visión</h5>
                <p className="mt-2 text-gray-700">
                  Simi pretende ser la primera aplicación digital líder y competitiva en la enseñanza del quechua en el contexto digital, 
                  apostando por el uso de tecnologías para la promoción y fortalecimiento del quechua en la población joven y adulta de Bolivia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardsSection;