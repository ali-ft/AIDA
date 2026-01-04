import { motion } from "motion/react";
import {
  TrendingUp,
  Users,
  Award,
  Brain,
  Shield,
  Trophy,
  Target,
} from "lucide-react";

export function Solution() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "INCREASED PRODUCTIVITY",
      description: "AI-Powered Automation",
      filled: false,
    },
    {
      icon: Users,
      title: "EMPLOYEE SATISFACTION",
      description: "New Skills & Growth",
      filled: false,
    },
    {
      icon: Award,
      title: "TALENT RETENTION",
      description: "Skill Development",
      filled: false,
    },
    {
      icon: Brain,
      title: "AI-DRIVEN INNOVATION",
      description: "Problem Solving",
      filled: false,
    },
    {
      icon: Shield,
      title: "IMPROVED QUALITY",
      description: "Optimized Decisions",
      filled: false,
    },
    {
      icon: Trophy,
      title: "ROI EXCELLENCE",
      description: "Measurable Impact",
      filled: false,
    },
    {
      icon: Target,
      title: "COMPETITIVE ADVANTAGE",
      description: "Future-Ready Teams",
      filled: false,
    },
  ];

  return (
    <section className="py-16 sm:py-24 pb-0 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="mb-12 sm:mb-16 text-center"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-6">
            THE AIDA SOLUTION
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Transform challenges into opportunities with our
            comprehensive AI training programs designed for real
            business impact.
          </p>
        </motion.div>

        {/* ✅ Mobile + Tablet: Hex grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden place-items-center">
          {benefits.map((benefit, index) => (
            <HexagonCard
              key={index}
              benefit={benefit}
              index={index}
            />
          ))}
        </div>

        {/* ✅ Desktop: honeycomb */}
        <div className="hidden lg:block relative max-w-6xl mx-auto">
          <div className="flex justify-center items-center mb-[-40px] relative z-10">
            {benefits.slice(0, 3).map((benefit, index) => (
              <HexagonCard
                key={index}
                benefit={benefit}
                index={index}
              />
            ))}
          </div>

          <div className="flex justify-center items-center relative z-20">
            {benefits.slice(3, 7).map((benefit, index) => (
              <HexagonCard
                key={index + 3}
                benefit={benefit}
                index={index + 3}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HexagonCard({
  benefit,
  index,
}: {
  benefit: any;
  index: number;
}) {
  const Icon = benefit.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1 }}
      whileInView={{ opacity: 1, scale: 1.12 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.06 }}
      // ✅ اندازه‌ها responsive
      className="relative group w-[210px] h-[210px] sm:w-[230px] sm:h-[230px] lg:w-[250px] lg:h-[250px]"
      style={{ margin: "0 -8px" }}
    >
      {/* SVG */}
      <svg
        viewBox="0 0 250 250"
        className="absolute inset-0 w-full h-full drop-shadow-2xl"
      >
        <defs>
          {benefit.filled && (
            <linearGradient
              id={`gradient-${index}`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          )}
        </defs>

        {/* ✅ centered hex path */}
        <path
          d="M 125 15 L 210 70 L 210 180 L 125 235 L 40 180 L 40 70 Z"
          fill={
            benefit.filled ? `url(#gradient-${index})` : "white"
          }
          stroke={benefit.filled ? "none" : "#818cf8"}
          strokeWidth={benefit.filled ? 0 : 6}
          className="group-hover:scale-[1.03] transition-transform duration-300 origin-center"
          style={{ transformBox: "fill-box" }}
        />
      </svg>

      {/* ✅ Content: همیشه داخل هگز می‌ماند */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-7 overflow-hidden">
        {/* Icon */}
        <div
          className={`rounded-full flex items-center justify-center mb-2 sm:mb-3
            w-14 h-14 sm:w-15 sm:h-15 lg:w-16 lg:h-16
            ${
              benefit.filled
                ? "bg-white/20 backdrop-blur-sm"
                : "bg-indigo-100"
            }`}
        >
          <Icon
            className={`w-7 h-7 lg:w-8 lg:h-8 ${
              benefit.filled ? "text-white" : "text-indigo-600"
            }`}
          />
        </div>

        {/* ✅ متن‌ها محدود و clamp شده */}
        <h3
          className={`font-bold tracking-wide leading-tight
            text-[11px] sm:text-xs lg:text-sm
            ${benefit.filled ? "text-white" : "text-gray-900"}
            max-w-[140px] sm:max-w-[150px] lg:max-w-[160px]
            line-clamp-2`}
        >
          {benefit.title}
        </h3>

        <p
          className={`mt-[2px] mb-3 leading-snug
            text-[10px] sm:text-[11px] lg:text-xs
            ${benefit.filled ? "text-white/90" : "text-gray-600"}
            max-w-[140px] sm:max-w-[150px] lg:max-w-[160px]
            line-clamp-2`}
        >
          {benefit.description}
        </p>
      </div>
    </motion.div>
  );
}