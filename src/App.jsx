import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import VetPro from './pages/VetPro';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pro" element={<VetPro />} />
      </Routes>
    </Router>
  );
}
