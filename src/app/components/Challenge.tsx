import { motion } from "motion/react";
import {
  TrendingDown,
  Users,
  UserX,
  Target,
  BarChart3,
  Shield,
  GitBranch,
  Settings,
} from "lucide-react";

export function Challenge() {
  const challenges = [
    {
      icon: TrendingDown,
      title: "Lagging AI Adoption",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Users,
      title: "Low Employee Motivation",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: UserX,
      title: "High Employee Turnover",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Target,
      title: "Competitive Disadvantage",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: BarChart3,
      title: "Stagnant Productivity",
      color: "from-pink-500 to-red-500",
    },
    {
      icon: Shield,
      title: "Weakened Retention",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: GitBranch,
      title: "Unclear AI Strategy",
      color: "from-orange-500 to-yellow-500",
    },
    {
      icon: Settings,
      title: "Operational Inefficiencies",
      color: "from-yellow-500 to-green-500",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="mb-10 sm:mb-12"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4">
            THE CHALLENGE
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl">
            Organizations today face critical barriers to AI success. Without
            structured training, these challenges compound and slow growth.
          </p>
        </motion.div>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${challenge.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg text-gray-900 leading-tight">
                  {challenge.title}
                </h3>

                {/* Hover Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${challenge.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`}
                ></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}