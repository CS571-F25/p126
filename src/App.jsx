import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import TrendingUp from './components/TrendingUp.jsx';
import TrendingDown from './components/TrendingDown.jsx';
import Favorites from './components/Favorites.jsx';
import FantasyNav from './components/FantasyNav.jsx';

function App() {

  return (
    <>
      <FantasyNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/trending-up" element={<TrendingUp />} />
        <Route path="/trending-down" element={<TrendingDown />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
}

export default App