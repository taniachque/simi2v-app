import React, { useState } from 'react';
import { gameData } from '../data/gameData'; 

const MatchingGame = () => {
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [selectedTheme, setSelectedTheme] = useState('tema1');
  const [gameResults, setGameResults] = useState(null);

  const handleDrop = (imageId, userWord) => {
    const matched = gameData.temas[selectedTheme].find(item => item.id === imageId);
    if (matched) {
      // Almacena el emparejamiento con la palabra del usuario
      setMatchedPairs(prev => [...prev, { ...matched, userWord }]); 
    }
  };

  const handleThemeChange = (theme) => {
    setSelectedTheme(theme);
    setMatchedPairs([]); // Reinicia emparejamientos
    setGameResults(null); // Reinicia resultados
  };

  const checkResults = () => {
    const correctPairs = matchedPairs.filter(item => item.word === item.userWord).length;
    const incorrectPairs = matchedPairs.length - correctPairs;

    console.log('Emparejamientos Correctos:', correctPairs);
    console.log('Emparejamientos Incorrectos:', incorrectPairs);

    setGameResults({
      correct: correctPairs,
      incorrect: incorrectPairs
    });
  };

  return (
    <div className="matching-game p-4">
      {/* Título que ocupa todo el ancho */}
      <h1 className="text-2xl font-bold mb-4 text-center">Emparejamiento  - Tinkuchispa pukllay</h1>
  
      <div className="flex flex-col md:flex-row">
        {/* Contenedor para instrucciones y resultados */}
        <div className="md:w-1/3 mb-4 md:mr-4">
          <div className="mb-4">
            <p> Empareja imágenes con las palabras correspondientes. Asegúrate de que coincidan y mejora tu vocabulario mientras juegas.</p>
            <p> QUE: Kaypiqa juk dibujota juk sananpawan tinkuchinayki tiyan. Pukllasqa kay qhichwa simiykita wiñachinki. </p>
          </div>
          
          {/* Sección para seleccionar tema */}
          <div className="mb-4">
            <label htmlFor="category" className="block mb-2 text-base font-bold">Selecciona un tema:</label>
            <select
              id="category"
              value={selectedTheme}
              onChange={(e) => handleThemeChange(e.target.value)}
              className="border border-gray-300 p-2 rounded w-64"
            >
              {['tema1', 'tema2', 'tema3'].map(theme => (
                <option key={theme} value={theme}>
                  {theme.charAt(0).toUpperCase() + theme.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={checkResults}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Verificar Resultados
          </button>
  
          {/* Resultados de emparejamientos */}
          {gameResults && (
            <div className="mt-4">
              <p>Emparejamientos Correctos: {gameResults.correct}</p>
              <p>Emparejamientos Incorrectos: {gameResults.incorrect}</p>
            </div>
          )}
        </div>
  
        {/* Contenedor para imágenes */}
        <div className="md:w-2/3">
          <div className="flex mt-4"> 
            <div className="flex flex-col items-center w-1/2">
              {gameData.temas[selectedTheme].map(item => (
                <div
                  key={item.id}
                  draggable
                  onDragEnd={() => handleDrop(item.id, item.word)}
                  className="flex flex-col items-center m-2"
                >
                  <img src={item.image} alt={item.word} className="w-24 h-24 object-cover" />
                </div>
              ))}
            </div>
  
            <div className="flex flex-col items-center w-1/2">
              {gameData.temas[selectedTheme].map(item => (
                <div key={item.id} className="text-center mt-2">
                  {item.word}
                </div>
              ))}
            </div>
          </div>
  

        </div>
      </div>
    </div>
  );
};

export default MatchingGame;