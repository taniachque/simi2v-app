import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import GameMenu from './components/GameMenu';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/gamesmenu" element={<GameMenu />} />
      </Routes>
    </Router>
  );
}

export default App;
