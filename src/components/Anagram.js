import React, { useState, useEffect, useCallback } from 'react';
import GameOver from './GameOver';
import wordList from './WordList';

function Anagram() {
  const [currentWord, setCurrentWord] = useState('');
  const [shuffledWord, setShuffledWord] = useState('');
  const [guess, setGuess] = useState('');
  const [isGameOver, setIsGameOver] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('animales');

  const selectRandomWord = useCallback((category) => {
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
  }, []);

  useEffect(() => {
    selectRandomWord(selectedCategory);
  }, [selectedCategory, selectRandomWord]);

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
        <h1 className='text-3xl font-bold mb-8 text-left'>Anagrama - T’ikraspa pukllay</h1>
        <p className="text-sm mb-4 text-left">Desafía tu mente reorganizando letras para formar palabras. Encuentra todas las combinaciones posibles antes de que el tiempo se agote.</p>
        <p className="text-sm mb-8 text-left">QUE: Kaypi t’ukunayki kay sananpakunamanta tikraspa t’ikraspa allin simikunata tarinaykikama</p>
        <div className="mb-4">
          <label htmlFor="category" className="block mb-4 text-base font-bold">Selecciona un tema:</label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border border-gray-300 p-2 rounded w-64"
          >
            {Object.keys(wordList).map(category => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <h2 className="text-xl font-bold mb-4">Reordena las letras:</h2>
        {shuffledWord && !isGameOver && (
          <div className='flex flex-col items-center'>
            <p className="text-4xl mb-4">{shuffledWord}</p>
            <input
              type="text"
              className="border border-gray-300 p-2 rounded mb-2 w-64"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              placeholder="Escribe tu respuesta"
            />
            <button
              onClick={checkGuess}
              className="bg-blue-500 text-white p-2 rounded w-64 hover:bg-blue-600 block mt-2"
            >
              Comprobar
            </button>
          </div>
        )}

        {/* Mostrar el resultado */}
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