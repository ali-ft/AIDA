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
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800">
      {/* Background Accent Shapes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 w-80 h-80 rounded-full bg-cyan-600/20 blur-3xl" />
        <div className="absolute -right-40 -bottom-40 w-96 h-96 rounded-full bg-purple-600/25 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-18">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-10 lg:gap-12 items-center">
          {/* Left Content Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="relative z-10 bg-gradient-to-br from-slate-800/95 via-slate-800/90 to-slate-800/80 rounded-3xl sm:rounded-[2.5rem] px-5 sm:px-8 lg:px-10 py-8 sm:py-10 lg:py-12 shadow-2xl border border-white/10"
          >
            <div className="relative space-y-5 sm:space-y-7 max-w-xl">
              {/* Eyebrow / breadcrumb-style label (simple) */}
              <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 border border-white/10 text-xs sm:text-sm text-cyan-300 mb-1">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                Executive AI Training Programs
              </div>

              {/* Main Headline */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white leading-tight text-left">
                Unlock Your Company's Potential with AI
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-cyan-200/90 leading-relaxed text-left">
                International AI Training for C-Levels, Managers &amp; Employees
              </p>

              {/* CTA Button */}
              <div className="pt-2 sm:pt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleExploreCourses}
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white rounded-xl text-sm sm:text-base md:text-lg font-medium shadow-2xl hover:shadow-cyan-500/40 transition-all cursor-pointer"
                >
                  Explore Courses
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Right Image Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="relative h-64 sm:h-80 md:h-96 lg:h-[420px] xl:h-[460px]"
          >
            <div className="absolute inset-0 rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.55)] border border-white/15 bg-slate-800/30">
              <img
                src={getAssetPath("assets/hero-section-new.png")}
                alt="Corporate AI Training"
                className="h-full w-full object-cover"
              />
              {/* subtle gradient overlay for brand tint */}
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 via-transparent to-cyan-500/15" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}