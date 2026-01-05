import { motion } from "motion/react";
import {
  TrendingUp,
  Users,
  Lightbulb,
  Target,
  DollarSign,
  Award,
  Zap,
} from "lucide-react";

export function Benefits() {
  const stats = [
    {
      percentage: "66%",
      title: "Hiring Advantage",
      description: (
        <>
          66% of leaders say they would not hire someone without AI skills, making AI training a <strong>hiring advantage</strong> and an employer branding signal (<strong>Hiring Advantage</strong>).
        </>
      ),
      source: "Microsoft",
      color: "from-blue-500 to-cyan-500",
      icon: Users,
    },
    {
      percentage: "4.8x",
      title: "Competitive Advantage",
      description: (
        <>
          4.8x greater labor productivity growth is seen in sectors with the highest AI penetration, showing the <strong>competitive advantage</strong> companies can gain by building AI capability across teams (<strong>Competitive advantage</strong>).
        </>
      ),
      source: "PwC",
      color: "from-purple-500 to-pink-500",
      icon: TrendingUp,
    },
    {
      percentage: "52%",
      title: "Better Quality, Fewer Errors",
      description: (
        <>
          52% of GenAI users say they use time saved to finish work earlier and with better quality, supporting the "<strong>better quality and fewer errors</strong>" benefit (<strong>Better quality, fewer errors</strong>).
        </>
      ),
      source: "BCG Web Assets",
      color: "from-green-500 to-emerald-500",
      icon: Lightbulb,
    },
    {
      percentage: "67%",
      title: "Salary-Learning Trade-off",
      description: (
        <>
          67% of professionals in the UAE say they would accept lower pay to secure AI training, showing a clear salary learning trade off that benefits employers who invest in AI upskilling (<strong>Salary educating trade off</strong>).
        </>
      ),
      source: "Gulf News",
      color: "from-orange-500 to-red-500",
      icon: DollarSign,
    },
  ];

  const reasons = [
    {
      number: "1",
      title: (
        <>
          Close the <strong>AI adoption gap</strong> before competitors do.
        </>
      ),
      description: (
        <>
          Most companies buy AI tools but don't see results because teams don't know how to use them in real workflows, so productivity stays flat. Our corporate artificial intelligence training for employees and executive AI training program turn experimentation into <strong>consistent daily usage</strong>.
        </>
      ),
      icon: TrendingUp,
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: "2",
      title: (
        <>
          Protect <strong>retention</strong> by giving top talent a future-ready <strong>growth path</strong>.
        </>
      ),
      description: (
        <>
          High performers leave when they feel stuck or falling behind, AI is now a career accelerant and employees know it. A structured AI upskilling program for employee <strong>retention</strong> and <strong>continuous AI learning</strong> for teams keeps your best people engaged and invested in staying.
        </>
      ),
      icon: Users,
      color: "from-purple-500 to-pink-500",
    },
    {
      number: "3",
      title: (
        <>
          Increase <strong>productivity</strong> by removing repetitive work and decision friction.
        </>
      ),
      description: (
        <>
          Without training, staff waste hours on drafting, reporting, summarizing, and manual analysis, then leaders still lack fast, reliable insights. Generative AI training for business teams and AI workflow automation training help departments <strong>automate routine tasks</strong> and improve day-to-day decision speed.
        </>
      ),
      icon: Zap,
      color: "from-green-500 to-emerald-500",
    },
    {
      number: "4",
      title: (
        <>
          Align C-level, managers, and employees with <strong>one AI</strong> operating <strong>model</strong>.
        </>
      ),
      description: (
        <>
          When leadership, middle management, and teams learn separately, AI becomes fragmented, different tools, different rules, and no measurable impact. AI training for C-level executives and managers and <strong>enterprise AI adoption</strong> training create shared standards, use cases, and governance across the organization.
        </>
      ),
      icon: Target,
      color: "from-orange-500 to-red-500",
    },
    {
      number: "6",
      title: (
        <>
          Make training an <strong>investment</strong> that returns value, not a cost center.
        </>
      ),
      description: (
        <>
          Salary pressure rises when employees don't see development, disengagement increases when learning stops. A <strong>measurable ROI-focused</strong> corporate AI training approach improves satisfaction, capability, and output, reducing hidden costs from churn, rework, and slow execution.
        </>
      ),
      icon: DollarSign,
      color: "from-pink-500 to-rose-500",
    },
    {
      number: "7",
      title: (
        <>
          Strengthen employer <strong>branding</strong> to hire faster and win better candidates.
        </>
      ),
      description: (
        <>
          In competitive markets, training is part of the compensation equation, especially for AI-capable talent. Offering AI training programs for companies and international AI training for corporate teams positions you as a <strong>growth-focused employer</strong> that attracts stronger applicants.
        </>
      ),
      icon: Award,
      color: "from-teal-500 to-cyan-500",
    },
  ];

  return (
    <div>
      {/* AI Skills Advantage Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-4">
              AI Skills Advantage
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600">
              The Proof in the Numbers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all overflow-hidden group"
                >
                  {/* Animated gradient background on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  ></div>

                  {/* Icon and Title together */}
                  <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center flex-shrink-0`}
                  >
                      <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-semibold">{stat.title}</h3>
                  </div>

                  {/* Large percentage with gradient text */}
                  <div
                    className={`text-6xl sm:text-7xl bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-4`}
                  >
                    {stat.percentage}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {stat.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Corporate AI Training Matters Section */}
      <section className="bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 py-16 sm:py-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
              Why Corporate AI Training Matters
            </h2>
            <p className="text-xl text-white/80">
              For leaders and teams who want to stay competitive
            </p>
          </motion.div>

          <div className="mt-16 relative">
            {/* SVG Path for the journey */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ zIndex: 0 }}
            >
              <defs>
                <linearGradient
                  id="pathGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    stopColor="#06b6d4"
                    stopOpacity="0.4"
                  />
                  <stop
                    offset="50%"
                    stopColor="#a855f7"
                    stopOpacity="0.4"
                  />
                  <stop
                    offset="100%"
                    stopColor="#ec4899"
                    stopOpacity="0.4"
                  />
                </linearGradient>
              </defs>
            </svg>

            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative mb-8"
              style={{ zIndex: 1 }}
            >
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.15,
                      type: "spring",
                    }}
                    className="relative"
                  >
                    {/* Icon circle with gradient background - positioned at top */}
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br ${reason.color} flex items-center justify-center text-white shadow-2xl z-20 border-4 border-gray-900`}
                    >
                      <Icon className="w-8 h-8" />
                    </motion.div>

                    {/* Content card */}
                    <motion.div
                      whileHover={{ y: -10, scale: 1.03 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                      }}
                      className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 pt-12 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all shadow-2xl h-full text-center"
                    >
                      {/* Title */}
                      <h3 className="text-xl text-white mb-4">
                        {reason.title}
                      </h3>
                      <p className="text-white/70 leading-relaxed text-sm">
                        {reason.description}
                      </p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}