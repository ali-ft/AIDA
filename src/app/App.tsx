import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { ForBusinesses } from './pages/ForBusinesses';
import { AboutUs } from './pages/AboutUs';
import { Contact } from './pages/Contact';
import { Articles } from './pages/Articles';
import { ArticleDetail } from './pages/ArticleDetail';

// Get base path from vite config or use root
// Normalize base path: ensure it doesn't end with / (unless it's just /)
// Vite's BASE_URL already includes the base path from vite.config.ts
const getBasePath = () => {
  let base = (import.meta as any).env.BASE_URL || '/';
  
  // Normalize: remove trailing slash if it exists and base is not just '/'
  if (base !== '/' && base.endsWith('/')) {
    base = base.slice(0, -1);
  }
  
  // Ensure base path starts with / (should already be the case from Vite)
  if (!base.startsWith('/')) {
    base = '/' + base;
  }
  
  // If base is empty or just whitespace, use '/'
  if (!base || base.trim() === '') {
    return '/';
  }
  
  return base;
};

const basePath = getBasePath();

export default function App() {
  return (
    <Router basename={basePath}>
      <div className="min-h-screen bg-white">
        <Navigation />
        
        <div className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/businesses" element={<ForBusinesses />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:id" element={<ArticleDetail />} />
          </Routes>
        </div>
        
        <Footer />
        <Toaster position="top-center" richColors />
      </div>
    </Router>
  );
}