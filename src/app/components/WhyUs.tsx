import { motion } from "motion/react";
import {
  TrendingUp,
  Wrench,
  Users,
  Target,
  Award,
} from "lucide-react";

export function WhyUs() {
  const reasons = [
    {
      title: "Training With ROI",
      description: (
        <>
          Traditional courses feel inspiring, then usage fades. We design <strong>ROI-focused corporate AI training</strong> tied to productivity and quality. Your leaders see measurable progress, not certificates.
        </>
      ),
      icon: TrendingUp,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Hands-On Adoption",
      description: (
        <>
          Most training stays theoretical and generic. Our <strong>hands-on generative AI training for employees</strong> uses real tasks and tools. Teams leave with workflows they can repeat tomorrow.
        </>
      ),
      icon: Wrench,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Role-Based Programs",
      description: (
        <>
          One-size training misses different needs. We run <strong>AI training for C-level executives and managers</strong> and separate tracks for employees. This prevents fragmentation and speeds adoption across departments.
        </>
      ),
      icon: Users,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Retention-Focused Upskilling",
      description: (
        <>
          Top talent leaves when growth stops. Our <strong>AI upskilling program for employee retention</strong> keeps teams future-ready. This supports satisfaction and lowers turnover risk.
        </>
      ),
      icon: Target,
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Industry-Experienced Trainers",
      description: (
        <>
          Theory alone doesn't survive real constraints. Our <strong>industry-experienced AI trainers for enterprises</strong> teach what works under deadlines. That reduces rework and accelerates delivery speed.
        </>
      ),
      icon: Award,
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-100 to-purple-100 border border-cyan-200/50 rounded-full mb-6">
            <span className="text-sm bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent font-semibold">
              Why Choose Us
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
            Why Us
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Five reasons why leading organizations choose AIDA for their AI training needs
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="space-y-8">
          {/* First 3 cards in top row - Desktop: 3 columns, Mobile/Tablet: 1-2 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
            {reasons.slice(0, 3).map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all overflow-hidden group border border-gray-100 w-full max-w-md"
                >
                  {/* Gradient overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  ></div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${reason.gradient} flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900">
                    {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {reason.description}
                  </p>

                  {/* Decorative corner accent */}
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${reason.gradient} opacity-10 rounded-bl-full`}
                  ></div>
                </motion.div>
              );
            })}
          </div>

          {/* Last 2 cards in bottom row - Desktop: centered 2 columns, Mobile/Tablet: 1-2 columns */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {reasons.slice(3, 5).map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={index + 3}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index + 3) * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all overflow-hidden group border border-gray-100 w-full md:w-[calc(50%-1rem)] lg:w-[400px] max-w-md"
                >
                  {/* Gradient overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  ></div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${reason.gradient} flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900">
                    {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {reason.description}
                  </p>

                  {/* Decorative corner accent */}
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${reason.gradient} opacity-10 rounded-bl-full`}
                  ></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
