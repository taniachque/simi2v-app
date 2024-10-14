import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Games from './components/Games';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/home" element={<Home />} />
        <Route path="/games" element={<Games />} />
      </Routes>
    </Router>
  );
}

export default App;
