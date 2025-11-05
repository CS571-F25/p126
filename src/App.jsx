import './App.css'
import { HashRouter, Routes, Route } from 'react-router'
import Home from './components/Home.jsx'
import AboutMe from './components/AboutMe.jsx'

function App() {

  return <HashRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutMe />} />
    </Routes>
  </HashRouter>

}

export default App
