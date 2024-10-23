import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import GameMenu from './components/GameMenu';
import Anagram from './components/Anagram';
import Hangman from './components/Hangman';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/gamesmenu" element={<GameMenu />} />
      <Route path="/anagram" element={<Anagram />} />
      <Route path="/hangman" element={<Hangman />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
