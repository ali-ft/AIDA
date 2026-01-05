import { motion } from "motion/react";

const getAssetPath = (path: string) => {
  const baseUrl = (import.meta as any).env?.BASE_URL || '/';
  return `${baseUrl}${path.startsWith('/') ? path.slice(1) : path}`;
};

export function Hero() {
  const handleExploreCourses = () => {
    const element = document.getElementById('modules');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-[75vh] sm:h-[80vh] lg:h-[85vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={getAssetPath("assets/banner-hero-section-2.png")}
          alt="Corporate AI Training"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="space-y-6 sm:space-y-8"
        >
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight px-2">
            Unlock Your Company's Potential with AI
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-cyan-300 max-w-4xl mx-auto px-2">
            International AI Training for C-Levels, Managers & Employees
          </p>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleExploreCourses}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white rounded-lg text-base sm:text-lg shadow-2xl hover:shadow-cyan-500/50 transition-all cursor-pointer"
          >
            Explore Courses
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}