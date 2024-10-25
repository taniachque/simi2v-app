import React from 'react';

const GameOver = ({ isWinner, selectedWord, resetGame }) => {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-40'>
      <div className='bg-white p-6 rounded shadow-lg text-center'>
        {isWinner ? (
          <h2 className='text-2xl'>🎉 ¡Atipanki! La palabra era: {selectedWord} 😊</h2>
        ) : (
          <h2>😢 ¡Atipachikunki! La palabra era: {selectedWord} 😔</h2>
        )}
        <button onClick={resetGame}
        className='bg-green-500 text-white font-bold mt-6 py-2 px-4 rounded hover:bg-green-600 transition duration-500'>Reiniciar Juego</button>
      </div>
    </div>
    
  );
};

export default GameOver;