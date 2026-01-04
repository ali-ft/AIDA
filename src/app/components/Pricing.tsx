import { motion } from 'motion/react';
import { Check, Star, Zap, Crown, Sparkles } from 'lucide-react';

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      icon: Sparkles,
      price: "2,999",
      period: "per team/month",
      description: "Perfect for small teams getting started with AI",
      color: "from-blue-500 to-cyan-500",
      features: [
        "Up to 20 employees",
        "2 core modules",
        "Monthly workshops",
        "Email support",
        "Basic analytics",
        "Certificate of completion"
      ],
      popular: false
    },
    {
      name: "Professional",
      icon: Zap,
      price: "7,999",
      period: "per team/month",
      description: "Ideal for growing companies scaling AI adoption",
      color: "from-purple-500 to-pink-500",
      features: [
        "Up to 100 employees",
        "All 6 modules included",
        "Weekly live sessions",
        "Priority support",
        "Advanced analytics",
        "Custom workshops",
        "Dedicated success manager",
        "ROI tracking dashboard"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      icon: Crown,
      price: "Custom",
      period: "tailored pricing",
      description: "Complete solution for large organizations",
      color: "from-orange-500 to-red-500",
      features: [
        "Unlimited employees",
        "Fully customized curriculum",
        "On-site training available",
        "24/7 premium support",
        "White-label options",
        "API access",
        "Executive coaching",
        "Ongoing consulting",
        "Multi-location support"
      ],
      popular: false
    }
  ];

  const addons = [
    { name: "1-on-1 Executive Coaching", price: "$500/session" },
    { name: "Custom Module Development", price: "$5,000/module" },
    { name: "On-site Workshop", price: "$3,000/day" },
    { name: "AI Tool Integration", price: "$2,000/tool" }
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-cyan-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-4 sm:mb-6 shadow-lg">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600" />
            <span className="text-xs sm:text-sm bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Flexible Pricing Plans
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4 sm:mb-6 px-4 leading-tight">
            Choose Your Plan
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Transparent pricing with no hidden fees. Start transforming your workforce today.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.3,
                }}
                className={`relative bg-white rounded-3xl p-6 sm:p-8 ${
                  plan.popular 
                    ? 'shadow-2xl ring-2 ring-purple-500 scale-105 lg:scale-110' 
                    : 'shadow-lg hover:shadow-2xl'
                } transition-all duration-300`}
              >
                {/* Popular Badge - More Visible */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1.5 rounded-full shadow-lg">
                      <span className="flex items-center gap-1.5">
                        <Star className="w-3 h-3 fill-white" />
                        <span className="text-xs font-medium">Most Popular</span>
                      </span>
                    </div>
                  </div>
                )}

                {/* Icon with Gradient Background */}
                <div className={`inline-flex w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${plan.color} rounded-2xl items-center justify-center mb-6 shadow-lg`}>
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>

                {/* Plan Name */}
                <h3 className="text-2xl sm:text-3xl text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-6">{plan.description}</p>

                {/* Price - Large and Bold */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-1 mb-1">
                    {plan.price !== "Custom" && (
                      <span className="text-xl text-gray-500">$</span>
                    )}
                    <span className={`text-5xl sm:text-6xl bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                      {plan.price}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500">{plan.period}</div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${plan.color} flex items-center justify-center mt-0.5`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:shadow-2xl transition-shadow"
                >
                  Request Custom Training
                </motion.button>
              </motion.div>
            );
          })}
        </div>

        {/* Add-ons Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg mb-12"
        >
          <h3 className="text-2xl sm:text-3xl text-gray-900 mb-6 sm:mb-8 text-center">Optional Add-ons</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {addons.map((addon, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border-2 border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all"
              >
                <h4 className="text-base sm:text-lg text-gray-900 mb-3 min-h-[3rem] flex items-center">{addon.name}</h4>
                <div className="text-2xl sm:text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {addon.price}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Money-back Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 sm:px-8 py-4 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl shadow-lg">
            <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
              <Check className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <div className="text-lg sm:text-xl text-green-900">30-Day Money-Back Guarantee</div>
              <div className="text-sm text-green-700">Risk-free trial for all plans</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}