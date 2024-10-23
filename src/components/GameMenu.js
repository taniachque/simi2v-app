import React from 'react';
import { Link } from 'react-router-dom';
import NinoLeyendo from '../assets/images/ninoleyendo.png';

const GameMenu = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 gap-4 mt-8 mb-8">
        <div className="card h-80 p-12 bg-white border border-gray-300 rounded shadow-md flex flex-col items-center">
          <img src={NinoLeyendo} alt="" className='mb-4 rounded h-32 w-full'/>
          <h1>ANAGRAMA</h1>
          <p className='text-gray-700 text-base'>descripcion</p>
          <Link 
          to='/Anagram'
          className='mt-auto bg-green-500 text-white px-4 py--2 rounded hover:bg-green-600' type="">Jugar</Link>
        </div>
        <div className="card h-80 p-12 bg-white border border-gray-300 rounded shadow-md flex flex-col items-center">
          <img src={NinoLeyendo} alt="" className='mb-4 rounded h-32 w-full'/>
          <h1>CAIDA LIBRE</h1>
          <p className='text-gray-700 text-base'>descripcion</p>
          <Link 
          to='/Hangman'
          className='mt-auto bg-green-500 text-white px-4 py--2 rounded hover:bg-green-600' type="">Jugar</Link>
        </div>
        <div className="card h-80 p-12 bg-white border border-gray-300 rounded shadow-md flex flex-col items-center">
          <img src={NinoLeyendo} alt="" className='mb-4 rounded h-32 w-full'/>
          <h1>SOPA DE LETRAS</h1>
          <p className='text-gray-700 text-base'>descripcion</p>
          <Link 
          to='/home'
          className='mt-auto bg-green-500 text-white px-4 py--2 rounded hover:bg-green-600' type="">Jugar</Link>
        </div>
        <div className="card h-80 p-12 bg-white border border-gray-300 rounded shadow-md flex flex-col items-center">
          <img src={NinoLeyendo} alt="" className='mb-4 rounded h-32 w-full'/>
          <h1>EMPAREJAMIENTO</h1>
          <p className='text-gray-700 text-base'>descripcion</p>
          <Link 
          to='/home'
          className='mt-auto bg-green-500 text-white px-4 py--2 rounded hover:bg-green-600' type="">Jugar</Link>
        </div>
      </div>
    </div>
  );
};

export default GameMenu;