import { motion } from 'motion/react';

export function WhyUs() {
  const benefits = [
    {
      title: "Training With ROI",
      description: "Traditional courses feel inspiring, then usage fades. We design ROI-focused corporate AI training tied to productivity and quality. Your leaders see measurable progress, not certificates.",
      color: "from-blue-500 to-cyan-500",
      image: "https://images.unsplash.com/photo-1653378972336-103e1ea62721?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxST0klMjByZXR1cm4lMjBpbnZlc3RtZW50JTIwZ3Jvd3RofGVufDF8fHx8MTc2NzE4MjY0NXww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Hands-On Adoption",
      description: "Most training stays theoretical and generic. Our hands-on generative AI training for employees uses real tasks and tools. Teams leave with workflows they can repeat tomorrow.",
      color: "from-purple-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1614792403436-ba5b3e747604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMG9uJTIwd29ya3Nob3AlMjB0b29sc3xlbnwxfHx8fDE3NjcxODI2NDV8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Role-Based Programs",
      description: "One-size training misses different needs. We run AI training for C-level executives and managers and separate tracks for employees. This prevents fragmentation and speeds adoption across departments",
      color: "from-green-500 to-emerald-500",
      image: "https://images.unsplash.com/photo-1618506487216-4e8c60a64c73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBleGVjdXRpdmVzJTIwbWFuYWdlcnMlMjBtZWV0aW5nfGVufDF8fHx8MTc2NzE4MjY0NXww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Retention-Focused Upskilling",
      description: "Top talent leaves when growth stops. Our AI upskilling program for employee retention keeps teams future-ready. This supports satisfaction and lowers turnover risk.",
      color: "from-orange-500 to-red-500",
      image: "https://images.unsplash.com/photo-1758691737060-3814f16d5aba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbXBsb3llZSUyMGRldmVsb3BtZW50JTIwY2FyZWVyJTIwZ3Jvd3RofGVufDF8fHx8MTc2NzE4MjY0Nnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Industry-Experienced Trainers",
      description: "Theory alone doesn't survive real constraints. Our industry-experienced AI trainers for enterprises teach what works under deadlines. That reduces rework and accelerates delivery speed.",
      color: "from-indigo-500 to-purple-500",
      image: "https://images.unsplash.com/photo-1512238972088-8acb84db0771?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleHBlcmllbmNlZCUyMHRlYWNoZXIlMjBtZW50b3IlMjBjb2FjaGluZ3xlbnwxfHx8fDE3NjcxODI2NDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full mb-4 sm:mb-6">
            <span className="text-xs sm:text-sm text-white">
              Why Choose AIDA
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white mb-4 sm:mb-6 px-4 leading-tight">
            Why leaders choose AIDA for AI training
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-blue-200 max-w-3xl mx-auto px-4">
            Built for results, designed for scale
          </p>
        </motion.div>
        
        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.3,
              }}
              className="group bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <motion.img
                  src={benefit.image}
                  alt={benefit.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-40`}></div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl mb-3 sm:mb-4">
                  {benefit.title}
                </h3>
                
                <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-purple-600 px-8 sm:px-10 py-3 sm:py-4 rounded-xl hover:shadow-2xl transition-all text-sm sm:text-base"
          >
            Start Your AI Training Journey
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}