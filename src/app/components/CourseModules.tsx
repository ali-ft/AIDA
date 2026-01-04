import { motion } from 'motion/react';
import { Clock, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const getAssetPath = (path: string) => {
  const baseUrl = (import.meta as any).env?.BASE_URL || '/';
  return `${baseUrl}${path.startsWith('/') ? path.slice(1) : path}`;
};

export function CourseModules() {
  const [expandedModules, setExpandedModules] = useState<Set<number>>(new Set());
  const navigate = useNavigate();

  const toggleModule = (index: number) => {
    const newExpanded = new Set(expandedModules);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedModules(newExpanded);
  };

  const modules = [
    {
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
      image: getAssetPath("assets/curriculum/Data-Science.png")
    },
    {
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
      image: getAssetPath("assets/curriculum/Machine-Learning.png")
    },
    {
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
      image: getAssetPath("assets/curriculum/Prompt.png")
    },
    {
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
      image: getAssetPath("assets/curriculum/LLM.png")
    },
    {
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
      image: getAssetPath("assets/curriculum/Outlier.png")
    },
    {
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
      image: getAssetPath("assets/curriculum/Mining.png")
    },
    {
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
      image: getAssetPath("assets/curriculum/Healthcare.png")
    },
    {
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
      image: getAssetPath("assets/curriculum/Recruitment.png")
    },
    {
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
      image: getAssetPath("assets/curriculum/Fintech.png")
    },
    {
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
      image: getAssetPath("assets/curriculum/Cybersecurity.png")
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {modules.map((module, index) => {
            const isExpanded = expandedModules.has(index);
            const visibleTopics = module.topics.slice(0, 4);
            const hiddenTopics = module.topics.slice(4);
            const hasMore = module.topics.length > 4;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.3,
                }}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img
                    src={module.image}
                    alt={module.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://via.placeholder.com/400x300?text=${encodeURIComponent(module.title)}`;
                    }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${module.color} opacity-60`}></div>
                  
                  {/* Level Badge */}
                  <div className="absolute bottom-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${levelColors[module.level as keyof typeof levelColors]}`}>
                      {module.level}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    <span className="text-sm text-gray-500">{module.duration}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-gray-900 leading-tight">
                    {module.title}
                  </h3>

                  {/* Topics List with Bullets */}
                  <div className="space-y-2.5 mb-4 flex-grow">
                    {visibleTopics.map((topic, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                        <div className={`flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2 bg-gradient-to-br ${module.color}`}></div>
                        <span className="leading-relaxed">{topic}</span>
                      </div>
                    ))}
                    
                    {/* Hidden Topics */}
                    {hasMore && (
                      <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                        {hiddenTopics.map((topic, idx) => (
                          <div key={idx + 4} className="flex items-start gap-3 text-sm text-gray-700 pt-2.5">
                            <div className={`flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2 bg-gradient-to-br ${module.color}`}></div>
                            <span className="leading-relaxed">{topic}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Read More Button */}
                  {hasMore && (
                    <button
                      onClick={() => toggleModule(index)}
                      className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 mb-4 transition-colors self-start cursor-pointer"
                    >
                      <span>{isExpanded ? 'Read Less' : 'Read More'}</span>
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                      />
                    </button>
                  )}

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => navigate('/contact')}
                    className={`w-full py-3 rounded-xl bg-gradient-to-r ${module.color} text-white hover:shadow-lg active:scale-95 transition-shadow text-sm sm:text-base font-medium cursor-pointer`}
                  >
                    Contact Us
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
          className="mt-12 sm:mt-16 text-center bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg"
        >
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Can't find what you need?</h3>
          <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
            We offer custom curriculum development tailored to your specific industry and business needs.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/contact')}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:shadow-2xl active:scale-95 transition-shadow text-sm sm:text-base font-medium w-full sm:w-auto cursor-pointer"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
