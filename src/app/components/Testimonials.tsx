import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      company: "Whitefox",
      rating: 5,
      text: (
        <>
          Honestly, we thought corporate machine learning training would be too theoretical for a product delivery team. AIDA made it practical from day one, and within <strong>6 weeks</strong> we had <strong>5 reusable notebooks</strong>, <strong>3 production ready analysis pipelines</strong>, and a <strong>28% reduction in reporting turnaround time</strong>. This is the first enterprise AI training program that actually changed our weekly execution, not just our vocabulary.
        </>
      ),
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-white via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-6">
            TESTIMONIALS
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl">
            Hear from companies who have transformed
            their teams with AIDA's AI training programs.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 mb-16 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6 sm:p-8 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300"
            >
              {/* Quote Icon Badge */}
              <div className="absolute -top-3 -right-3 w-14 h-14 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform z-10">
                <Quote className="w-7 h-7 text-white" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6">
                {testimonial.text}
              </p>

              {/* Company Info */}
              <div>
                <div className="text-white font-semibold text-lg">
                  {testimonial.company}
                </div>
              </div>

              {/* Hover Gradient Border Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity"></div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-3xl p-8 sm:p-12 text-center shadow-2xl"
        >
          <h6 className="text-2xl sm:text-3xl lg:text-4xl text-white mb-6">
            Ready to Transform Your Business with AI
          </h6>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/contact'}
            className="px-10 py-4 bg-white text-cyan-600 font-bold rounded-xl shadow-2xl hover:shadow-white/30 hover:bg-gray-50 active:scale-95 transition-all text-lg cursor-pointer"
          >
            Book a Demo
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}