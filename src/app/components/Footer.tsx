import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const getAssetPath = (path: string) => {
  const baseUrl = (import.meta as any).env?.BASE_URL || '/';
  return `${baseUrl}${path.startsWith('/') ? path.slice(1) : path}`;
};

const scrollToTop = () =>
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-gray-900 text-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-6 xl:gap-8 lg:justify-between">
            {/* Brand Section */}
            <div className="lg:flex-shrink-0 lg:w-[280px] xl:w-[320px]">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={getAssetPath("assets/aida-logo.png")}
                  alt="AIDA AI"
                  className="h-12 w-12"
                />
                <div>
                  <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    AIDA AI
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">
                    AI Training Center
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                Empowering organizations with cutting-edge AI education and training solutions.
              </p>
              <a
                href="https://www.linkedin.com/in/hossein-rah-936535312/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-gradient-to-r hover:from-cyan-600 hover:to-purple-600 rounded-lg transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            {/* Navigation Links */}
            <div className="lg:flex-shrink-0">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Navigation
              </h3>
              <nav className="flex flex-col space-y-3">
                <Link
                  to="/"
                  className="text-sm text-gray-400 hover:text-cyan-400 transition-colors w-fit"
                  onClick={scrollToTop}
                >
                  Home
                </Link>
                <Link
                  to="/businesses"
                  className="text-sm text-gray-400 hover:text-cyan-400 transition-colors w-fit"
                  onClick={scrollToTop}
                >
                  For Businesses
                </Link>
                <Link
                  to="/articles"
                  className="text-sm text-gray-400 hover:text-cyan-400 transition-colors w-fit"
                  onClick={scrollToTop}
                >
                  Articles
                </Link>
                <Link
                  to="/about"
                  className="text-sm text-gray-400 hover:text-cyan-400 transition-colors w-fit"
                  onClick={scrollToTop}
                >
                  About Us
                </Link>
                <Link
                  to="/contact"
                  className="text-sm text-gray-400 hover:text-cyan-400 transition-colors w-fit"
                  onClick={scrollToTop}
                >
                  Contact
                </Link>
              </nav>
            </div>

            {/* Contact Information */}
            <div className="lg:flex-1 lg:max-w-md xl:max-w-lg">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Contact Us
              </h3>
              <div className="space-y-4">
                <a
                  href="tel:+971505632446"
                  className="flex items-center gap-3 text-sm text-gray-400 hover:text-cyan-400 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>+971 50 563 2446</span>
                </a>
                <a
                  href="mailto:Hossein@aidaedu.ae"
                  className="flex items-center gap-3 text-sm text-gray-400 hover:text-cyan-400 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="break-all">Hossein@aidaedu.ae</span>
                </a>
                <a
                  href="https://maps.google.com/?q=AIDA+AI+Research+SRTIP+Free+Zone+Sharjah+UAE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-gray-400 hover:text-cyan-400 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-cyan-500/20 transition-colors">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="leading-relaxed">
                    AIDA AI Research (FZE), Block B – B54-102,<br />
                    SRTIP Free Zone, Sharjah, UAE
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 py-6">
          <div className="max-w-7xl mx-auto text-center text-sm text-gray-400">
            © {currentYear} AIDA International AI Training Center. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}