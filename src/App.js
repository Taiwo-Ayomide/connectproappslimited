import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Company from './pages/Company';
import Solution from './pages/Solution';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/company" element={<Company/>} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/contact" element={<Solution />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
