import { motion } from "motion/react";
import { Heart, Target, Users, Lightbulb, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export function AboutUs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  const values = [
    {
      icon: Heart,
      title: "Passion for Education",
      description: "We believe in the transformative power of knowledge and are dedicated to making AI education accessible to everyone."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We maintain the highest standards in our curriculum, instruction, and support to ensure the best learning outcomes."
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "We foster a collaborative learning environment where students, instructors, and organizations grow together."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We stay at the forefront of AI developments, continuously updating our programs with the latest technologies and methodologies."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-cyan-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-4 sm:mb-6 px-2">
              About AIDA
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto px-2">
              Empowering organizations and individuals with cutting-edge AI education
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6">
                Our Mission
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                At AIDA, we're on a mission to make AI education accessible and empower organizations to leverage artificial intelligence for positive impact. We believe that AI should be accessible, understandable, and actionable for everyone.
              </p>
              <p className="text-base sm:text-lg text-gray-600">
                Founded by experts in AI, education, and organizational development, AIDA brings together world-class instructors, cutting-edge curriculum, and a proven methodology to help businesses and institutions thrive in the age of AI.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-100 to-purple-100 p-12 rounded-3xl"
            >
              <div className="flex items-center justify-center mb-6">
                <Globe className="w-24 h-24 text-purple-600" />
              </div>
              <h3 className="text-2xl text-center mb-4">Our Vision</h3>
              <p className="text-gray-700 text-center">
                To be the global leader in corporate AI education, creating a world where every organization has the knowledge and skills to harness AI responsibly and effectively.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-16 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl text-white mb-4">
              Our Impact in Numbers
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl sm:text-6xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-white/90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Values Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-6">
              Our Core Values
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
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
                  <h3 className="text-2xl mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-cyan-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl text-white mb-6">
              Join Us on This Journey
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Become part of the AIDA community and transform your organization with AI
            </p>
            <Link
              to="/contact"
              className="inline-block px-10 py-4 bg-white text-purple-600 rounded-xl hover:shadow-2xl hover:bg-gray-50 active:scale-95 transition-all text-lg cursor-pointer"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
