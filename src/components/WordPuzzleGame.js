// src/components/WordPuzzleGame.js
import React, { useEffect, useState } from "react";
import { answerWords } from "./words"; // Asegúrate de que la ruta sea correcta

const generateRandomMatrix = (rows, cols) => {
  const letters = "abcdefghijklmnopqrstuvwxyz"; // Letras para elegir
  return Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () =>
      letters[Math.floor(Math.random() * letters.length)]
    )
  );
};

const WordPuzzleGame = () => {
  const [matrix, setMatrix] = useState([]);
  const [isSelecting, setIsSelecting] = useState(false);
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [foundWords, setFoundWords] = useState([]);

  useEffect(() => {
    // Generar una matriz aleatoria
    const newMatrix = generateRandomMatrix(8, 9);
    setMatrix(newMatrix);
  }, []);

  const handleMouseDown = (letter, row, col) => {
    setIsSelecting(true);
    setSelectedLetters((prev) => [...prev, { letter, row, col }]);
  };

  const handleMouseOver = (letter, row, col) => {
    if (isSelecting) {
      setSelectedLetters((prev) => [...prev, { letter, row, col }]);
    }
  };

  const handleMouseUp = () => {
    setIsSelecting(false);
    // Aquí puedes agregar la lógica para verificar si se encontró una palabra
    // Ejemplo: verificar si las letras seleccionadas forman una palabra en wordsToFind
    const selectedWord = selectedLetters.map((l) => l.letter).join("");
    
    if (answerWords.includes(selectedWord)) {
      setFoundWords((prev) => [...prev, selectedWord]);
    }

    // Reiniciar selección
    setSelectedLetters([]);
  };

  return (
    <div className="p-4">
      <h1>Word Puzzle Game</h1>
      <div>
        <h2>Palabras encontradas: {foundWords.join(", ")}</h2>
      </div>
      <table className="table-auto border-collapse border border-gray-300" onMouseLeave={() => setIsSelecting(false)}>
        <tbody>
          {matrix.map((rowData, rowIndex) => (
            <tr key={rowIndex}>
              {rowData.map((letter, colIndex) => (
                <td
                  key={colIndex}
                  onMouseDown={() => handleMouseDown(letter, rowIndex, colIndex)}
                  onMouseOver={() => handleMouseOver(letter, rowIndex, colIndex)}
                  onMouseUp={handleMouseUp}
                  style={{
                    backgroundColor: selectedLetters.some((l) => l.row === rowIndex && l.col === colIndex) ? 'lightblue' : 'white',
                    cursor: 'pointer',
                    width: '40px', // Ancho de cada celda
                    height: '40px', // Alto de cada celda
                    textAlign: 'center', // Centrar texto
                    verticalAlign: 'middle', // Centrar verticalmente
                  }}
                  className="border border-gray-300"
                >
                  <h3>{letter}</h3>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WordPuzzleGame;