import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import Header from './components/Header';
import Home from './components/Home';
import GameMenu from './components/GameMenu';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/gamesmenu" element={<GameMenu />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
