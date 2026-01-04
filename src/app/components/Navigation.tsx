import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const getAssetPath = (path: string) => {
  const baseUrl = (import.meta as any).env?.BASE_URL || '/';
  return `${baseUrl}${path.startsWith('/') ? path.slice(1) : path}`;
};

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { label: "For Businesses", path: "/businesses" },
    { label: "About Us", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];


  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3">
            <img src={getAssetPath("assets/aida-logo.png")} alt="AIDA AI" className="h-10 w-10 sm:h-12 sm:w-12" />
            <div>
              <div className="text-lg sm:text-xl font-bold bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
                AIDA AI
              </div>
              <div className="text-[10px] sm:text-xs text-gray-600 hidden xs:block">
                International AI Training Center
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="text-gray-700 hover:text-purple-600 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <button onClick={() => navigate('/contact')} className="px-6 py-2.5 bg-gradient-to-r from-cyan-600 to-purple-600 text-white rounded-lg hover:shadow-lg hover:from-cyan-700 hover:to-purple-700 active:scale-95 transition-all cursor-pointer">
              Book a Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 cursor-pointer hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="block py-3 text-gray-700 hover:text-purple-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button onClick={() => { navigate('/contact'); setIsOpen(false); }} className="w-full mt-4 px-6 py-2.5 bg-gradient-to-r from-cyan-600 to-purple-600 text-white rounded-lg hover:shadow-lg hover:from-cyan-700 hover:to-purple-700 active:scale-95 transition-all cursor-pointer">
              Book a Demo
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}