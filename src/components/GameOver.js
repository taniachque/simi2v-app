import React from 'react';

const GameOver = ({ isWinner, selectedWord, resetGame }) => {
  return (
    <div className='flex flex-col items-center justify-center py-2'>
      {isWinner ? (
        <h2>🎉 ¡Atipanki! La palabra era: {selectedWord} 😊</h2>
      ) : (
        <h2>😢 ¡Atipachikunki! La palabra era: {selectedWord} 😔</h2>
      )}
      <button onClick={resetGame}
      className='bg-green-500 text-white font-bold mt-6 py-2 px-4 rounded hover:bg-green-600 transition duration-500'>Reiniciar Juego</button>
    </div>
  );
};

export default GameOver;