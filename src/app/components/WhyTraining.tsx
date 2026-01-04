import { motion } from 'motion/react';

export function WhyTraining() {
  const reasons = [
    {
      number: "01",
      title: 'Close the "AI adoption gap" before competitors do.',
      description: "Most companies buy AI tools but don't see results because teams don't know how to use them in real workflows—so productivity stays flat. Our corporate artificial intelligence training for employees and executive AI training program turn experimentation into consistent daily usage.",
      gradient: "from-blue-600 via-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      number: "02",
      title: "Protect retention by giving top talent a future-ready growth path.",
      description: "High performers leave when they feel stuck or falling behind; AI is now a career accelerant and employees know it. A structured AI upskilling program for employee retention and continuous AI learning for teams keeps your best people engaged and invested in staying.",
      gradient: "from-purple-600 via-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50"
    },
    {
      number: "03",
      title: "Increase productivity by removing repetitive work and decision friction.",
      description: "Without training, staff waste hours on drafting, reporting, summarizing, and manual analysis—then leaders still lack fast, reliable insights. Generative AI training for business teams and AI workflow automation training help departments automate routine tasks and improve day-to-day decision speed.",
      gradient: "from-green-600 via-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50"
    },
    {
      number: "04",
      title: "Align C-level, managers, and employees with one AI operating model.",
      description: "When leadership, middle management, and teams learn separately, AI becomes fragmented—different tools, different rules, and no measurable impact. AI training for C-level executives and managers and enterprise AI adoption training create shared standards, use cases, and governance across the organization.",
      gradient: "from-orange-600 via-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50"
    },
    {
      number: "05",
      title: "Improve quality and reduce costly errors across documents, operations, and customer work.",
      description: "Untrained use of AI leads to inconsistent outputs, compliance risks, and mistakes that damage trust; avoiding AI entirely keeps error-prone manual processes. Our responsible AI training for enterprises and AI quality assurance training teach teams how to validate, standardize, and deliver higher-quality work.",
      gradient: "from-indigo-600 via-indigo-500 to-purple-500",
      bgGradient: "from-indigo-50 to-purple-50"
    },
    {
      number: "06",
      title: "Make training an investment that returns value—not a cost center.",
      description: "Salary pressure rises when employees don't see development; disengagement increases when learning stops. A measurable ROI-focused corporate AI training approach improves satisfaction, capability, and output—reducing hidden costs from churn, rework, and slow execution.",
      gradient: "from-pink-600 via-pink-500 to-rose-500",
      bgGradient: "from-pink-50 to-rose-50"
    },
    {
      number: "07",
      title: "Strengthen employer branding to hire faster and win better candidates.",
      description: "In competitive markets, training is part of the compensation equation—especially for AI-capable talent. Offering AI training programs for companies and international AI training for corporate teams positions you as a growth-focused employer that attracts stronger applicants.",
      gradient: "from-teal-600 via-teal-500 to-cyan-500",
      bgGradient: "from-teal-50 to-cyan-50"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-center mb-12 sm:mb-20"
        >
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-4">
            <span className="text-sm bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              The Business Case
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4 px-4">
            Why Corporate AI Training Matters
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            For leaders and teams who want to stay competitive
          </p>
        </motion.div>
        
        {/* Reasons - Masonry/Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {reasons.map((reason, index) => {
            // Create variety in sizes
            const isLarge = index === 0 || index === 3;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className={`group relative overflow-hidden rounded-3xl sm:rounded-[32px] ${
                  isLarge ? 'lg:col-span-2' : 'lg:col-span-1'
                }`}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${reason.bgGradient} opacity-50 group-hover:opacity-70 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative p-6 sm:p-8 lg:p-10">
                  {/* Number Badge */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${reason.gradient} mb-4 sm:mb-6 shadow-lg`}>
                    <span className="text-xl sm:text-2xl text-white">
                      {reason.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className={`text-center text-xl sm:text-2xl lg:text-3xl text-gray-900 mb-3 sm:mb-4 leading-tight ${
                    isLarge ? 'lg:max-w-4xl' : 'lg:max-w-lg'
                  }`}>
                    {reason.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-center text-sm sm:text-base text-gray-700 leading-relaxed ${
                    isLarge ? 'lg:max-w-4xl lg:text-lg' : 'lg:max-w-lg'
                  }`}>
                    {reason.description}
                  </p>

                  {/* Decorative Gradient Line */}
                  <div className={`mt-4 sm:mt-6 h-1 w-20 sm:w-24 bg-gradient-to-r ${reason.gradient} rounded-full`}></div>
                </div>

                {/* Hover Effect - Subtle Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
