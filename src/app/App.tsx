import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { ForBusinesses } from './pages/ForBusinesses';
import { AboutUs } from './pages/AboutUs';
import { Contact } from './pages/Contact';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        
        <div className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/businesses" element={<ForBusinesses />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        
        <Footer />
      </div>
    </Router>
  );
}