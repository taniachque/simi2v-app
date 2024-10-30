import React, { useState, useEffect } from 'react';
import { gameData } from '../data/gameData'; 

const MatchingGame = () => {
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [selectedTheme, setSelectedTheme] = useState('tema1');
  const [gameResults, setGameResults] = useState(null);
  const [draggedWord, setDraggedWord] = useState(null);
  const [randomItems, setRandomItems] = useState([]);

  const getRandomItems = (array, count) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  useEffect(() => {
    // Al cambiar el tema, selecciona los elementos aleatorios
    const items = getRandomItems(gameData.temas[selectedTheme], 5);
    setRandomItems(items);
    setMatchedPairs([]); // Reinicia emparejamientos al cambiar de tema
    setGameResults(null); // Reinicia resultados
  }, [selectedTheme]);

  const handleDrop = (imageId) => {
    const matched = randomItems.find(item => item.id === imageId);
    if (matched && draggedWord) {
      setMatchedPairs(prev => [...prev, { ...matched, userWord: draggedWord }]); 
      setDraggedWord(null);
    }
  };

  const handleThemeChange = (theme) => {
    setSelectedTheme(theme);
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
      <h1 className="text-2xl font-bold mb-4 text-center">Emparejamiento - Tinkuchispa pukllay</h1>
  
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 mb-4 md:mr-4">
          <div className="mb-4">
            <p>Empareja imágenes con las palabras correspondientes. Asegúrate de que coincidan y mejora tu vocabulario mientras juegas.</p>
            <p>QUE: Kaypiqa juk dibujota juk sananpawan tinkuchinayki tiyan. Pukllasqa kay qhichwa simiykita wiñachinki.</p>
          </div>
          
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
  
          {gameResults && (
            <div className="mt-4">
              <p>Emparejamientos Correctos: {gameResults.correct}</p>
              <p>Emparejamientos Incorrectos: {gameResults.incorrect}</p>
            </div>
          )}
        </div>
  
        <div className="md:w-2/3">
          <div className="flex flex-col mt-4"> 
            <div className="flex justify-center">
              {randomItems.map(item => (
                <div
                  key={item.id}
                  draggable
                  onDragStart={() => setDraggedWord(item.word)}
                  onDragEnd={() => handleDrop(item.id)}
                  className="flex flex-col items-center m-2"
                >
                  <img src={item.image} alt={item.word} className="w-24 h-24 object-cover" />
                </div>
              ))}
            </div>
  
            <div className="flex justify-center w-full">
              {randomItems.map(item => (
                <div 
                  key={item.id} 
                  className="text-center text-lg m-4 cursor-pointer bg-green-400 p-2 rounded-lg"
                  onDrop={() => handleDrop(item.id)}
                  onDragOver={(e) => e.preventDefault()}
                >
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