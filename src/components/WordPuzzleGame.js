// src/components/WordPuzzleGame.js
import React, { useEffect, useState } from "react";
import { answerWords } from "./words"; // Asegúrate de que la ruta sea correcta

const generateRandomMatrix = (rows, cols, words) => {
  const letters = "abcdefghijklmnopqrstuvwxyz"; // Letras para elegir
  const matrix = Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => letters[Math.floor(Math.random() * letters.length)])
  );

  // Intentamos colocar las palabras en la matriz
  words.forEach((word) => {
    let placed = false;
    while (!placed) {
      const direction = Math.random() < 0.5 ? 'horizontal' : 'vertical'; // Elegir dirección al azar
      const startRow = Math.floor(Math.random() * rows);
      const startCol = Math.floor(Math.random() * cols);

      // Comprobar si la palabra cabe en la dirección elegida
      if (direction === 'horizontal' && startCol + word.length <= cols) {
        // Comprobar si hay espacio para colocar la palabra
        let canPlace = true;
        for (let i = 0; i < word.length; i++) {
          if (matrix[startRow][startCol + i] !== letters[Math.floor(Math.random() * letters.length)]) {
            canPlace = false;
            break;
          }
        }
        if (canPlace) {
          for (let i = 0; i < word.length; i++) {
            matrix[startRow][startCol + i] = word[i]; // Colocar la palabra
          }
          placed = true;
        }
      } else if (direction === 'vertical' && startRow + word.length <= rows) {
        // Comprobar si hay espacio para colocar la palabra verticalmente
        let canPlace = true;
        for (let i = 0; i < word.length; i++) {
          if (matrix[startRow + i][startCol] !== letters[Math.floor(Math.random() * letters.length)]) {
            canPlace = false;
            break;
          }
        }
        if (canPlace) {
          for (let i = 0; i < word.length; i++) {
            matrix[startRow + i][startCol] = word[i]; // Colocar la palabra
          }
          placed = true;
        }
      }
    }
  });

  return matrix;
};

const WordPuzzleGame = () => {
  const [matrix, setMatrix] = useState([]);
  const [isSelecting, setIsSelecting] = useState(false);
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [foundWords, setFoundWords] = useState([]);

  useEffect(() => {
    const newMatrix = generateRandomMatrix(8, 9, answerWords); // Generar matriz con palabras
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
    const selectedWord = selectedLetters.map((l) => l.letter).join("");
    
    if (answerWords.includes(selectedWord)) {
      setFoundWords((prev) => [...prev, selectedWord]);
    }

    setSelectedLetters([]);
  };

  return (
    <div className="flex items-center justify-center min-h-screen flex-col">
      <h1 className="text-2xl mb-4">Sopa de letras</h1>
      <div className="mb-4">
        <h2>Palabras a buscar: {answerWords.join(", ")}</h2>
      </div>
      <div className="mb-4">
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