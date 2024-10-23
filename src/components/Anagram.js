import React, { useState, useEffect } from 'react';
import GameOver from './GameOver';
import wordList from './WordList';

function Anagram() {
  const [currentWord, setCurrentWord] = useState('');
  const [shuffledWord, setShuffledWord] = useState('');
  const [guess, setGuess] = useState('');
  const [isGameOver, setIsGameOver] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('animales');

  useEffect(() => {
    selectRandomWord(selectedCategory);
  }, [selectedCategory, ]);

  const selectRandomWord = (category) => {
    if (wordList[category] && wordList[category].length > 0) {
      const words = wordList[category];
      const word = words[Math.floor(Math.random() * words.length)];
      setCurrentWord(word);
      setShuffledWord(shuffleWord(word));
      setGuess('');
      setIsGameOver(false);
    } else {
      console.error('La categoría no existe o está vacía.');
    }
  };

  const shuffleWord = (word) => {
    if (!word) {
      return '';
    }
    return word.split('').sort(() => Math.random() - 0.5).join('');
  };

  const checkGuess = () => {
    setIsGameOver(true);
  };

  const resetGame = () => {
    selectRandomWord(selectedCategory);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <div className="mb-4">
          <label htmlFor="category" className="block mb-2 text-lg font-bold">Selecciona un tema:</label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border border-gray-300 p-2 rounded w-full"
          >
            {Object.keys(wordList).map(category => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)} {/* Capitaliza la primera letra */}
              </option>
            ))}
          </select>
        </div>

        <h2 className="text-2xl font-bold mb-4">Reordena las letras:</h2>
        {shuffledWord && !isGameOver && (
          <div>
            <p className="text-lg mb-4">{shuffledWord}</p>
            <input
              type="text"
              className="border border-gray-300 p-2 rounded mb-4 w-full"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              placeholder="Escribe tu respuesta"
            />
            <button
              onClick={checkGuess}
              className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600"
            >
              Comprobar
            </button>
          </div>
        )}

        {/* To show the result */}
        {isGameOver && (
          <GameOver 
            isWinner={guess.toLowerCase() === currentWord} 
            selectedWord={currentWord} 
            resetGame={resetGame} 
          />
        )}
      </div>
    </div>
  );
}

export default Anagram;