import { motion } from 'motion/react';
import { Clock, BookOpen, CheckCircle2 } from 'lucide-react';

export function CourseModules() {
  const modules = [
    {
      icon: BookOpen,
      title: "Introduction to Data Science",
      duration: "10-16 hours",
      level: "Beginner",
      color: "from-blue-500 to-cyan-500",
      topics: [
        "Data types, data quality, and common errors",
        "Descriptive statistics for business interpretation",
        "Correlation vs causation",
        "Regression basics and interpretation",
        "Model error and evaluation intuition",
        "Hypothesis testing and t test fundamentals"
      ],
      image: "https://images.unsplash.com/photo-1748439281934-2803c6a3ee36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwc3RhdGlzdGljcyUyMGNoYXJ0c3xlbnwxfHx8fDE3NjcxODI2NDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      icon: BookOpen,
      title: "Machine Learning Fundamentals",
      duration: "12-16 hours",
      level: "Intermediate",
      color: "from-purple-500 to-pink-500",
      topics: [
        "Supervised learning concepts and examples",
        "Unsupervised learning concepts and clustering basics",
        "Feature engineering introduction",
        "Model evaluation with precision, recall, and F measure",
        "Overfitting and generalization intuition",
        "Interpreting results for business stakeholders"
      ],
      image: "https://images.unsplash.com/photo-1717502085413-478382daf23f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwYWxnb3JpdGhtfGVufDF8fHx8MTc2NzE4MjY0N3ww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      icon: BookOpen,
      title: "Prompt Engineering for Business Workflows",
      duration: "6-12 hours",
      level: "Beginner",
      color: "from-green-500 to-emerald-500",
      topics: [
        "Zero shot prompting patterns",
        "Few shot prompting patterns",
        "Prompt templates for emails, reports, and analysis",
        "Building internal knowledge Q and A safely",
        "RAG fundamentals for company knowledge bases",
        "Fine tuning overview and when it makes sense"
      ],
      image: "https://images.unsplash.com/photo-1731963094554-c5c981ccdefd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3cml0aW5nJTIwcHJvbXB0cyUyMGNyZWF0aXZlJTIwdGV4dHxlbnwxfHx8fDE3NjcxODI2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      icon: BookOpen,
      title: "Natural Language Processing and LLMs",
      duration: "12-16 hours",
      level: "Advanced",
      color: "from-orange-500 to-red-500",
      topics: [
        "Traditional NLP methods and text representations",
        "Large language models and common capabilities",
        "Attention and transformers foundations",
        "Practical LLM use cases in enterprise systems",
        "RAG pipelines, retrieval quality, and evaluation basics",
        "Reliability, safety, and bias considerations"
      ],
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5ndWFnZSUyMGNvbW11bmljYXRpb24lMjB0ZXh0fGVufDF8fHx8MTc2NzE4MjY0OHww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      icon: BookOpen,
      title: "Outlier and Fraud Analysis with AI",
      duration: "10-16 hours",
      level: "Intermediate",
      color: "from-indigo-500 to-purple-500",
      topics: [
        "Outlier detection methods and anomaly patterns",
        "Fraud signals, features, and risk scoring ideas",
        "Supervised vs unsupervised fraud detection approaches",
        "Precision vs false positives and threshold setting",
        "Monitoring, alerting, and drift awareness",
        "Case exercises tailored to business fraud scenarios"
      ],
      image: "https://images.unsplash.com/photo-1740908900906-a51032597559?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmF1ZCUyMGRldGVjdGlvbiUyMHNlY3VyaXR5JTIwYWxlcnQ8ZW58MXx8fHwxNzY3MTgyNjQ4fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      icon: BookOpen,
      title: "Industry Specific Analysis, AI for Mining",
      duration: "8-16 hours",
      level: "Advanced",
      color: "from-amber-500 to-yellow-500",
      topics: [
        "Predictive maintenance and equipment failure prediction",
        "Safety incident prediction and risk trend analysis",
        "Production optimization and operational forecasting",
        "Anomaly detection for sensor and IoT signals",
        "Quality monitoring and process control concepts",
        "Practical examples using mining style data scenarios"
      ],
      image: "https://images.unsplash.com/photo-1582280871722-424e91cbee8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbmclMjBleGNhdmF0b3IlMjBoZWF2eSUyMG1hY2hpbmVyeXxlbnwxfHx8fDE3NjcxODI2NDl8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      icon: BookOpen,
      title: "Industry Specific Analysis, AI for Healthcare",
      duration: "8-16 hours",
      level: "Advanced",
      color: "from-rose-500 to-pink-500",
      topics: [
        "Patient journey analytics and operational optimization",
        "Clinical text summarization and documentation support",
        "Fraud, waste, and abuse detection fundamentals",
        "Privacy first AI adoption and safe data handling",
        "Quality improvement and error reduction workflows",
        "Real use case mapping to departments and roles"
      ],
      image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBwYXRpZW50JTIwaGVhbHRoY2FyZSUyMGhvc3BpdGFsfGVufDF8fHx8MTc2NzE4MjY0OXww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      icon: BookOpen,
      title: "Industry Specific Analysis, AI for Recruitment",
      duration: "8-16 hours",
      level: "Intermediate",
      color: "from-teal-500 to-cyan-500",
      topics: [
        "Candidate screening support and skills matching basics",
        "Detecting fake resumes and synthetic profiles signals",
        "Interview assistance and structured evaluation templates",
        "Bias awareness and responsible hiring AI practices",
        "Workflow automation for recruiters and talent ops",
        "Practical scenarios for hiring funnels and compliance"
      ],
      image: "https://images.unsplash.com/photo-1758518730380-04c8e0d57b68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb2IlMjBpbnRlcnZpZXclMjBoaXJpbmclMjBjYW5kaWRhdGV8ZW58MXx8fHwxNzY3MTgyNjUwfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      icon: BookOpen,
      title: "Industry Specific Analysis, AI for Fintech",
      duration: "8-16 hours",
      level: "Advanced",
      color: "from-violet-500 to-purple-500",
      topics: [
        "Risk scoring concepts and customer profiling basics",
        "Fraud detection patterns for account opening and login",
        "Transaction monitoring and anomaly detection ideas",
        "Model evaluation focus on precision and recall",
        "Governance, audit readiness, and explainability basics",
        "Case exercises aligned with fintech workflows"
      ],
      image: "https://images.unsplash.com/photo-1758524944226-461a52709c1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBiYW5raW5nJTIwcGF5bWVudCUyMGNhcmR8ZW58MXx8fHwxNjcxODI2NTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      icon: BookOpen,
      title: "AI for Cybersecurity Concerns",
      duration: "8-16 hours",
      level: "Advanced",
      color: "from-red-500 to-orange-500",
      topics: [
        "Threat detection basics and anomaly based monitoring",
        "Phishing detection patterns and user behavior signals",
        "Security log analysis and triage support using AI",
        "Reducing false positives and improving alert quality",
        "Safe use of AI in incident response workflows",
        "Governance, access control, and secure AI usage policies"
      ],
      image: "https://images.unsplash.com/photo-1719255417989-b6858e87359e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlciUyMGF0dGFjayUyMGhhY2tpbmclMjBzZWN1cml0eXxlbnwxfHx8fDE3NjcxODI2NTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const levelColors = {
    "Beginner": "bg-green-100 text-green-700",
    "Intermediate": "bg-blue-100 text-blue-700",
    "Advanced": "bg-purple-100 text-purple-700"
  };

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-100 to-purple-100 rounded-full mb-4">
            <span className="text-xs sm:text-sm bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
              Our Curriculum
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4 sm:mb-6 px-4 leading-tight">
            Comprehensive AI Training Modules
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            10 specialized courses covering every aspect of AI
          </p>
        </motion.div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.3,
                }}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={module.image}
                    alt={module.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${module.color} opacity-60`}></div>
                  
                  {/* Icon */}
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                      <Icon className={`w-6 h-6 bg-gradient-to-br ${module.color} bg-clip-text text-transparent`} />
                    </div>
                  </div>

                  {/* Level Badge */}
                  <div className="absolute bottom-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs ${levelColors[module.level as keyof typeof levelColors]}`}>
                      {module.level}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-500">{module.duration}</span>
                  </div>

                  <h3 className="text-xl mb-4 text-gray-900">
                    {module.title}
                  </h3>

                  <div className="space-y-2 mb-6">
                    {module.topics.slice(0, 4).map((topic, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 bg-gradient-to-br ${module.color} bg-clip-text text-transparent`} />
                        <span>{topic}</span>
                      </div>
                    ))}
                    {module.topics.length > 4 && (
                      <div className="text-sm text-gray-500 pl-6">
                        +{module.topics.length - 4} more topics
                      </div>
                    )}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 rounded-xl bg-gradient-to-r ${module.color} text-white hover:shadow-lg transition-shadow`}
                  >
                    View Details
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-white rounded-3xl p-8 shadow-lg"
        >
          <h3 className="text-2xl text-gray-900 mb-4">Can't find what you need?</h3>
          <p className="text-gray-600 mb-6">
            We offer custom curriculum development tailored to your specific industry and business needs.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:shadow-2xl transition-shadow"
          >
            Request Custom Training
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}