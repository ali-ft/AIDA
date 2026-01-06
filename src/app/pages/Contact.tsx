import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from 'sonner';

export function Contact() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formEndpoint =
        (import.meta as any).env?.VITE_FORMSPREE_ENDPOINT ||
        'https://formspree.io/f/mykzqvwl';

      const res = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (!res.ok) {
        throw new Error('Form submission failed');
      }

      toast.success('Thank you for your message! We\'ll get back to you soon.', {
        duration: 5000,
        style: {
          background: 'linear-gradient(to right, #06b6d4, #a855f7)',
          color: 'white',
          border: 'none',
          fontSize: '16px',
          padding: '16px',
        },
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast.error('Failed to send message. Please try again or contact us directly.', {
        duration: 5000,
        style: {
          background: '#ef4444',
          color: 'white',
          border: 'none',
          fontSize: '16px',
          padding: '16px',
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "Hossein@aidaedu.ae",
      link: "mailto:Hossein@aidaedu.ae"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+971 50 563 2446",
      link: "tel:+971505632446"
    },
    {
      icon: MapPin,
      title: "Address",
      value: "Dubai, UAE",
      link: null
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50/30 to-purple-50/50 pt-16 sm:pt-20 relative overflow-hidden">
      {/* Enhanced Background with Mesh Gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Gradient Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-cyan-400/30 via-purple-400/20 to-pink-400/30 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-400/25 via-indigo-400/20 to-purple-400/25 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-cyan-300/15 via-purple-300/10 to-pink-300/15 rounded-full blur-3xl"
        ></motion.div>
      </div>

      {/* Mesh Gradient Overlay */}
      <div className="absolute inset-0 opacity-40 pointer-events-none" style={{
        backgroundImage: `
          radial-gradient(at 0% 0%, rgba(59, 130, 246, 0.15) 0px, transparent 50%),
          radial-gradient(at 100% 0%, rgba(139, 92, 246, 0.15) 0px, transparent 50%),
          radial-gradient(at 100% 100%, rgba(236, 72, 153, 0.15) 0px, transparent 50%),
          radial-gradient(at 0% 100%, rgba(6, 182, 212, 0.15) 0px, transparent 50%)
        `,
      }}></div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(30deg, transparent 40%, rgba(59, 130, 246, 0.8) 50%, transparent 60%),
            linear-gradient(-30deg, transparent 40%, rgba(139, 92, 246, 0.8) 50%, transparent 60%)
          `,
          backgroundSize: '80px 80px',
        }}></div>
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-20"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 12}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Contact Form Section - At the top */}
      <section className="py-4 sm:py-6 relative z-10">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/95 backdrop-blur-sm p-6 sm:p-8 rounded-3xl shadow-2xl border border-white/20"
          >
            <h2 className="text-2xl sm:text-3xl text-center mb-2 font-bold">
              Send Us a Message
            </h2>
            <p className="text-sm sm:text-base text-gray-600 text-center mb-6">
              Fill out the form below and we'll get back to you within 24 hours
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1.5">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 resize-none"
                  placeholder="Tell us about your AI training needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white rounded-xl hover:shadow-2xl active:scale-95 transition-all text-base font-medium flex items-center justify-center gap-2 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards - Below the form */}
      <section className="py-8 sm:py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl text-center hover:shadow-2xl transition-shadow"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl mb-2 font-semibold">{info.title}</h3>
                  {info.link ? (
                    <a href={info.link} className="text-base sm:text-lg text-gray-600 hover:text-purple-600 transition-colors">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-base sm:text-lg text-gray-600">{info.value}</p>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Map/Additional Info Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl text-white mb-6">
              Visit Our Office
            </h2>
            <p className="text-xl text-white/90 mb-8">
              We're located in the heart of Dubai, UAE
            </p>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl max-w-2xl mx-auto">
              <p className="text-white text-lg mb-4">
                Office Hours: Monday - Friday, 9:00 AM - 6:00 PM CET
              </p>
              <p className="text-white/80">
                We welcome visitors by appointment. Please contact us to schedule a meeting.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
