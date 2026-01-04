import { motion } from "motion/react";
import { Building2, Users, TrendingUp, Target, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function ForBusinesses() {
  const benefits = [
    {
      icon: Users,
      title: "Upskill Your Workforce",
      description: "Empower your team with cutting-edge AI knowledge and practical skills that drive innovation and productivity."
    },
    {
      icon: TrendingUp,
      title: "Measurable ROI",
      description: "See tangible results with improved efficiency, reduced costs, and enhanced decision-making capabilities across your organization."
    },
    {
      icon: Target,
      title: "Custom Training Programs",
      description: "Tailored AI training solutions that address your specific business challenges and industry requirements."
    },
    {
      icon: Building2,
      title: "Enterprise-Ready",
      description: "Scalable solutions designed for organizations of all sizes, from startups to Fortune 500 companies."
    }
  ];

  const features = [
    "Customized curriculum aligned with business goals",
    "Hands-on projects with real-world applications",
    "Expert instructors with industry experience",
    "Flexible learning schedules (on-site or remote)",
    "Progress tracking and analytics dashboard",
    "Certificate programs for team members",
    "Ongoing support and resources",
    "Integration with existing systems"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1758518731706-be5d5230e5a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBjb3Jwb3JhdGV8ZW58MXx8fHwxNzY3MjY2MDA5fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Business Meeting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white mb-6">
              Transform Your Business with AI
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Equip your team with the AI skills they need to drive innovation, increase productivity, and stay ahead of the competition.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white rounded-xl hover:shadow-2xl transition-all text-lg"
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-6">
              Why Choose AIDA for Your Business
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the unique challenges businesses face when adopting AI technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl text-white mb-6">
                What's Included in Our Enterprise Programs
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Comprehensive AI training designed for business success
              </p>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1739298061707-cefee19941b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBjb2xsYWJvcmF0aW9uJTIwdGVhbXxlbnwxfHx8fDE3NjcxNjczNDN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Team Collaboration"
                className="rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl mb-6">
              Ready to Transform Your Organization?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how AIDA can help your business leverage AI for competitive advantage.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white rounded-xl hover:shadow-2xl transition-all text-lg"
            >
              Book a Demo <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
