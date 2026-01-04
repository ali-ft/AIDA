import { motion } from 'motion/react';
import { Building2, Globe, Sparkles, GraduationCap } from 'lucide-react';
import leidenLogo from 'figma:asset/c141912995381c315b691576bd3aa351ab3f89d5.png';
import birminghamLogo from 'figma:asset/aec424cdf43e71558b5f42a2cfb884bc1ad5e7c5.png';
import maastrichtLogo from 'figma:asset/da9036b94cc997a7ca2c9204f489fbebe8adc753.png';

export function PreviousCustomers() {
  const customers = [
    { 
      name: "Leiden University", 
      shortName: "Leiden",
      industry: "Higher Education", 
      location: "Netherlands",
      description: "One of Europe's leading research universities",
      color: "from-blue-600 to-blue-800",
      logo: leidenLogo
    },
    { 
      name: "Maastricht University", 
      shortName: "Maastricht",
      industry: "Higher Education", 
      location: "Netherlands",
      description: "International research university with innovative approach",
      color: "from-red-600 to-red-800",
      logo: maastrichtLogo
    },
    { 
      name: "University of Birmingham", 
      shortName: "UoB",
      industry: "Higher Education", 
      location: "United Kingdom",
      description: "Member of prestigious Russell Group universities",
      color: "from-purple-600 to-indigo-800",
      logo: birminghamLogo
    }
  ];

  const stats = [
    { number: "3", label: "Leading Universities", color: "from-blue-500 to-cyan-500" },
    { number: "2K+", label: "Academics Trained", color: "from-purple-500 to-pink-500" },
    { number: "3", label: "Countries", color: "from-green-500 to-emerald-500" },
    { number: "100%", label: "Client Satisfaction", color: "from-orange-500 to-red-500" }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full mb-4 sm:mb-6">
            <span className="text-xs sm:text-sm text-white">
              Trusted Partners
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white mb-4 sm:mb-6 px-4 leading-tight">
            Our Previous Customers
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-blue-200 max-w-3xl mx-auto px-4">
            Leading universities trust AIDA for their AI education needs
          </p>
        </motion.div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.3,
              }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 text-center"
            >
              <div className={`text-4xl sm:text-5xl bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.number}
              </div>
              <div className="text-sm text-blue-200">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* University Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {customers.map((customer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.3,
              }}
              className="group bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300"
            >
              {/* University Logo */}
              <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 p-4">
                <img 
                  src={customer.logo} 
                  alt={`${customer.name} logo`}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* University Name */}
              <h3 className="text-2xl text-center mb-2">{customer.name}</h3>
              
              {/* Short Name Badge */}
              <div className="text-center mb-4">
                <span className={`inline-block px-4 py-1 bg-gradient-to-r ${customer.color} rounded-full text-sm`}>
                  {customer.shortName}
                </span>
              </div>

              {/* Description */}
              <p className="text-blue-200 text-center mb-6">
                {customer.description}
              </p>

              {/* Details */}
              <div className="space-y-3">
                <div className="flex items-center justify-center gap-2 text-blue-300">
                  <Building2 className="w-4 h-4" />
                  <span className="text-sm">{customer.industry}</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-blue-300">
                  <Globe className="w-4 h-4" />
                  <span className="text-sm">{customer.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl mb-4">Our Impact in Academia</h3>
            <p className="text-blue-200 text-lg">
              Transforming research and teaching capabilities across leading institutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl mb-2">Research Excellence</h4>
              <p className="text-blue-200 text-sm">
                Enabling cutting-edge AI research across multiple disciplines
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl mb-2">Faculty Development</h4>
              <p className="text-blue-200 text-sm">
                Upskilling professors and researchers in AI methodologies
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl mb-2">Global Reach</h4>
              <p className="text-blue-200 text-sm">
                Supporting international collaboration and knowledge exchange
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-blue-200 mb-6 text-lg">
            Is your institution ready to join these leaders in AI education?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-900 px-10 py-4 rounded-xl hover:shadow-2xl transition-shadow"
          >
            Partner With Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}