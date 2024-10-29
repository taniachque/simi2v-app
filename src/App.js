import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import GameMenu from './components/GameMenu';
import Anagram from './components/Anagram';
import Hangman from './components/Hangman';
import MatchingGame from './components/MatchingGame';
import WordPuzzleGame from './components/WordPuzzleGame';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/gamesmenu" element={<GameMenu />} />
      <Route path="/anagram" element={<Anagram />} />
      <Route path="/hangman" element={<Hangman />} />
      <Route path="/matchinggame" element={<MatchingGame />} />
      <Route path="/wordpuzzlegame" element={<WordPuzzleGame />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
