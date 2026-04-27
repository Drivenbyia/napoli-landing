import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MentionsLegales from './pages/MentionsLegales';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
      </Routes>
    </Router>
  );
}
