import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './assets/Home';
import About from './assets/About';
import Features from './assets/Features';
import Showcase from './assets/Showcase';
import Community from './assets/Community';
import Conference from './assets/Conference';
import Join from './assets/Join';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/showcase" element={<Showcase />} />
        <Route path="/community" element={<Community />} />
        <Route path="/conference" element={<Conference />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </Router>
  );
}