import React, { useState, useEffect } from 'react';
import gameData from '../data/gameData.json'; 

const MatchingGame = () => {
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [selectedTheme, setSelectedTheme] = useState('tema1'); 
  const [gameResults, setGameResults] = useState(null); 

  const totalPairs = gameData.temas[selectedTheme].length; 

  const handleDrop = (imageId, word) => {
    const matched = gameData.temas[selectedTheme].find(item => item.id === imageId);
    if (matched) {
      setMatchedPairs(prev => [...prev, { ...matched, userWord: word }]); 
    }
  };

  const handleThemeChange = (theme) => {
    setSelectedTheme(theme);
    setMatchedPairs([]); 
    setGameResults(null); 
  };

  const checkResults = () => {
    const correctPairs = matchedPairs.filter(item => item.word === item.userWord).length;
    const incorrectPairs = matchedPairs.length - correctPairs;

    setGameResults({
      correct: correctPairs,
      incorrect: incorrectPairs
    });
  };

  return (
    <div className="matching-game">
      <h1 className="text-2xl text-center">Empareja las Imágenes con las Palabras</h1>
      <div className="theme-selector flex justify-center mb-4">
        <button onClick={() => handleThemeChange('tema1')} className="m-2 p-2 bg-blue-500 text-white rounded">Tema 1</button>
        <button onClick={() => handleThemeChange('tema2')} className="m-2 p-2 bg-blue-500 text-white rounded">Tema 2</button>
        <button onClick={() => handleThemeChange('tema3')} className="m-2 p-2 bg-blue-500 text-white rounded">Tema 3</button>
      </div>
      <div className="images flex flex-wrap justify-center">
        {gameData.temas[selectedTheme].map(item => (
          <div
            key={item.id}
            draggable
            onDragEnd={() => handleDrop(item.id, item.word)}
            className="image-card m-2"
          >
            <img src={item.image} alt={item.word} className="w-32 h-auto" />
          </div>
        ))}
      </div>
      <div className="words flex flex-wrap justify-center mt-4">
        {gameData.temas[selectedTheme].map(item => (
          <div key={item.id} className="word-card m-2 p-2 border border-gray-300 rounded">
            {item.word}
          </div>
        ))}
      </div>
      <div className="matched mt-4">
        <h2 className="text-lg">Emparejados:</h2>
        {matchedPairs.map(item => (
          <div key={item.id} className="matched-item">
            {item.userWord} → {item.word}
          </div>
        ))}
      </div>
      <button onClick={checkResults} className="mt-4 p-2 bg-green-500 text-white rounded">Verificar Resultados</button>
      {gameResults && (
        <div className="game-results text-xl mt-4">
          <p>Emparejamientos Correctos: {gameResults.correct}</p>
          <p>Emparejamientos Incorrectos: {gameResults.incorrect}</p>
        </div>
      )}
    </div>
  );
};

export default MatchingGame;