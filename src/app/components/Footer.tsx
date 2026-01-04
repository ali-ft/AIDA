import { Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const getAssetPath = (path: string) => {
  const baseUrl = (import.meta as any).env?.BASE_URL || '/';
  return `${baseUrl}${path.startsWith('/') ? path.slice(1) : path}`;
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content - Single Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
          {/* Brand Section */}
          <div className="flex items-center gap-3">
            <img
              src={getAssetPath("assets/aida-logo.png")}
              alt="AIDA AI"
              className="h-10 w-10"
            />
            <div>
              <div className="text-lg bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                AIDA AI
              </div>
              <div className="text-xs text-gray-400">
                AI TRAINING CENTER
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex gap-6 text-sm">
            <Link
              to="/"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                })
              }
            >
              Home
            </Link>
            <Link
              to="/businesses"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                })
              }
            >
              For Businesses
            </Link>
            <Link
              to="/about"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                })
              }
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                })
              }
            >
              Contact
            </Link>
          </div>

          {/* Social & Contact */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:info@aida-ai.com"
              className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2 text-sm"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">
                info@aida-ai.com
              </span>
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-white/10 hover:bg-gradient-to-r hover:from-cyan-600 hover:to-purple-600 rounded-lg flex items-center justify-center transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-700/50 text-center">
          <div className="text-sm text-gray-400">
            © {currentYear} AIDA International AI Training
            Center. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}