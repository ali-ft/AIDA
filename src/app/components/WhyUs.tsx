import { motion } from "motion/react";

export function WhyUs() {
  const reasons = [
    {
      title: "Training With ROI",
      description: (
        <>
          Traditional courses feel inspiring, then usage fades. We design <strong>ROI-focused corporate AI training</strong> tied to productivity and quality. Your leaders see measurable progress, not certificates.
        </>
      ),
      gradient: "from-blue-500 to-cyan-500",
      number: "01",
    },
    {
      title: "Hands-On Adoption",
      description: (
        <>
          Most training stays theoretical and generic. Our <strong>hands-on generative AI training for employees</strong> uses real tasks and tools. Teams leave with workflows they can repeat tomorrow.
        </>
      ),
      gradient: "from-purple-500 to-pink-500",
      number: "02",
    },
    {
      title: "Role-Based Programs",
      description: (
        <>
          One-size training misses different needs. We run <strong>AI training for C-level executives and managers</strong> and separate tracks for employees. This prevents fragmentation and speeds adoption across departments.
        </>
      ),
      gradient: "from-green-500 to-emerald-500",
      number: "03",
    },
    {
      title: "Retention-Focused Upskilling",
      description: (
        <>
          Top talent leaves when growth stops. Our <strong>AI upskilling program for employee retention</strong> keeps teams future-ready. This supports satisfaction and lowers turnover risk.
        </>
      ),
      gradient: "from-orange-500 to-red-500",
      number: "04",
    },
    {
      title: "Industry-Experienced Trainers",
      description: (
        <>
          Theory alone doesn't survive real constraints. Our <strong>industry-experienced AI trainers for enterprises</strong> teach what works under deadlines. That reduces rework and accelerates delivery speed.
        </>
      ),
      gradient: "from-indigo-500 to-purple-500",
      number: "05",
    },
  ];

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      {/* Creative Background with Mesh Gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(59,130,246,0.03)_50%,transparent_100%)]"></div>
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}></div>
      </div>

      {/* Floating Gradient Orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl"
      ></motion.div>
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"
      ></motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm border-2 border-cyan-200 rounded-full mb-6 shadow-lg"
          >
            <span className="text-sm bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent font-bold">
              Why Choose Us
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-6 font-bold">
            <span className="bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Why Us
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Five reasons why leading organizations choose AIDA for their AI training needs
          </p>
        </motion.div>
        
        {/* Cards Grid */}
        <div className="space-y-8">
          {/* Top Row - 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {reasons.slice(0, 3).map((reason, index) => {
              return (
            <motion.div
              key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="relative group"
                >
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-gray-200/50 h-full">
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                    
                    {/* Number Badge - Top Left */}
                    <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                      <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${reason.gradient} opacity-10 transform rotate-45 translate-x-6 -translate-y-6`}></div>
                      <div className="absolute top-3 right-3">
                        <span className={`text-2xl font-black bg-gradient-to-br ${reason.gradient} bg-clip-text text-transparent`}>
                          {reason.number}
                        </span>
                      </div>
              </div>

              {/* Content */}
                    <div className="relative z-10 pr-8">
                      <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 leading-tight">
                        {reason.title}
                </h3>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        {reason.description}
                </p>
                    </div>

                    {/* Bottom gradient accent */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${reason.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            </motion.div>
              );
            })}
        </div>
        
          {/* Bottom Row - 2 Cards Centered */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {reasons.slice(3, 5).map((reason, index) => {
              return (
        <motion.div
                  key={index + 3}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
                  transition={{ delay: (index + 3) * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="relative group w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-md"
        >
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-gray-200/50 h-full">
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                    
                    {/* Number Badge - Top Left */}
                    <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                      <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${reason.gradient} opacity-10 transform rotate-45 translate-x-6 -translate-y-6`}></div>
                      <div className="absolute top-3 right-3">
                        <span className={`text-2xl font-black bg-gradient-to-br ${reason.gradient} bg-clip-text text-transparent`}>
                          {reason.number}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 pr-8">
                      <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 leading-tight">
                        {reason.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        {reason.description}
                      </p>
                    </div>

                    {/* Bottom gradient accent */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${reason.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  </div>
        </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
