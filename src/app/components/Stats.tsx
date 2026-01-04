import { motion } from "motion/react";
import { TrendingUp, Award, Target, Users } from "lucide-react";

export function Stats() {
  const stats = [
    {
      number: "66%",
      label: "Hiring Advantage",
      description:
        "of leaders say they would not hire someone without AI skills, making AI training a hiring advantage and an employer branding signal",
      source: "Microsoft",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: "4.8x",
      label: "Competitive Advantage",
      description:
        "greater labor productivity growth is seen in sectors with the highest AI penetration, showing the competitive advantage companies can gain by building AI capability across teams",
      source: "PwC",
      icon: TrendingUp,
      color: "from-purple-500 to-pink-500",
    },
    {
      number: "52%",
      label: "Better Quality, Fewer Errors",
      description:
        'of GenAI users say they use time saved to finish work earlier and with better quality, supporting the "better quality and fewer errors" benefit',
      source: "BCG Web Assets",
      icon: Award,
      color: "from-green-500 to-emerald-500",
    },
    {
      number: "67%",
      label: "Salary-Learning Trade-off",
      description:
        "of professionals in the UAE say they would accept lower pay to secure AI training, showing a clear salary learning trade off that benefits employers who invest in AI upskilling",
      source: "Gulf News",
      icon: Target,
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-4">
            <span className="text-xs sm:text-sm bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Backed by Data
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4 px-4">
            AI Skills Advantage: The Proof in the Numbers
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
              }}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} mb-6`}
              >
                <stat.icon className="w-7 h-7 text-white" />
              </div>

              {/* Number - Large and Bold */}
              <div
                className={`text-5xl sm:text-6xl lg:text-7xl bg-gradient-to-br ${stat.color} bg-clip-text text-transparent mb-2`}
              >
                {stat.number}
              </div>

              {/* Label - Clear and Bold */}
              <div className="text-base sm:text-lg text-gray-900 mb-4">
                {stat.label}
              </div>

              {/* Description - Smaller */}
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                {stat.description}
              </p>

              {/* Source */}
              <div className="pt-4 border-t border-gray-200">
                <span className="text-xs text-gray-500">
                  Source: {stat.source}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}