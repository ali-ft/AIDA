import { motion } from "motion/react";
import {
  GraduationCap,
  Wrench,
  Briefcase,
  Layers,
  Lock,
  Building,
} from "lucide-react";

export function SmarterWay() {
  const ways = [
    {
      icon: GraduationCap,
      title: "Expert led credibility",
      description:
        "Many companies struggle with low trust in AI training because instructors feel generic, theoretical, or not senior enough for C levels. AIDA solves this with PhD level AI training instructors from top ranked global universities, delivering credible learning that leadership respects and teams follow.",
      highlight: "PhD-level instructors",
      gradient: "from-blue-500 to-cyan-500",
      position: "left",
      image: "https://images.unsplash.com/photo-1736066330610-c102cab4e942?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwcHJvZmVzc29yJTIwdGVhY2hpbmd8ZW58MXx8fHwxNzY3MzM2NDMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: Wrench,
      title: "Hands on skills that stick",
      description:
        "Teams often attend AI sessions but still cannot apply AI in daily workflows, so productivity does not improve and momentum fades. AIDA delivers hands on generative AI training for employees with real role based tasks, showing AI in action for automation, reporting, analysis, and decision making.",
      highlight: "Real role-based tasks",
      gradient: "from-purple-500 to-pink-500",
      position: "right",
      image: "https://images.unsplash.com/photo-1647154933795-422ba6b3034e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMHR5cGluZyUyMGxhcHRvcHxlbnwxfHx8fDE3NjczMzY0MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: Briefcase,
      title: "Real world implementation experience",
      description:
        "Many training providers explain AI concepts but cannot guide teams through practical constraints like change management, tool selection, and rollout planning. AIDA brings industry proven AI implementation training, helping managers move from ideas to execution with workflows that fit real business operations.",
      highlight: "Ideas to execution",
      gradient: "from-green-500 to-emerald-500",
      position: "left",
      image: "https://images.unsplash.com/photo-1601509876296-aba16d4c10a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc2NzI4NDk5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: Layers,
      title: "Customized training by department",
      description:
        "One size fits all AI courses fail because finance, HR, sales, operations, and customer support have different needs and pain points. AIDA builds custom corporate AI training programs aligned with your teams priorities, so every session maps directly to job tasks and measurable outcomes.",
      highlight: "Department-specific",
      gradient: "from-orange-500 to-red-500",
      position: "right",
      image: "https://images.unsplash.com/photo-1765438863717-49fca900f861?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB3b3Jrc2hvcCUyMHRyYWluaW5nfGVufDF8fHx8MTc2NzMzNjQzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: Lock,
      title: "Clear governance and safe usage",
      description:
        "Leaders worry about data leakage, unapproved tools, and inconsistent AI usage across teams, which creates legal and brand risk. AIDA includes responsible AI governance training for companies, giving practical policies, safe prompting patterns, and usage standards that teams can follow immediately.",
      highlight: "Safe usage standards",
      gradient: "from-indigo-500 to-purple-500",
      position: "left",
      image: "https://images.unsplash.com/photo-1760199789455-49098afd02f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwZGlnaXRhbHxlbnwxfHx8fDE3NjczMzY0MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: Building,
      title: "Adoption across the whole organization",
      description:
        "Even good training fails when executives, middle managers, and employees are not aligned, leading to scattered pilots and slow adoption. AIDA provides executive AI leadership training plus AI training for managers and employees, aligning strategy and daily execution so AI adoption becomes consistent and scalable.",
      highlight: "C-suite to frontline",
      gradient: "from-pink-500 to-rose-500",
      position: "right",
      image: "https://images.unsplash.com/photo-1758691737217-77302c5f988f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGVhbSUyMG9mZmljZXxlbnwxfHx8fDE3NjczMzY0MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 via-white to-purple-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-cyan-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-200/30 to-pink-200/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-100 to-purple-100 border border-cyan-200/50 rounded-full mb-6">
            <span className="text-sm bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
              Our Approach
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight">
            A smarter way to run company wide AI training
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Six pillars that separate effective training from generic courses
          </p>
        </motion.div>

        {/* Timeline Layout - Alternating Left/Right */}
        <div className="relative max-w-5xl mx-auto">
          {/* Center line - hidden on mobile */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-300 via-purple-300 to-pink-300"></div>

          <div className="space-y-12 lg:space-y-16">
            {ways.map((way, index) => {
              const Icon = way.icon;
              const isLeft = way.position === "left";

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative lg:grid lg:grid-cols-2 lg:gap-8"
                >
                  {/* Number Circle - Center for desktop */}
                  <div className="hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 z-10">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${way.gradient} flex items-center justify-center text-white text-2xl shadow-2xl border-4 border-white`}
                    >
                      {index + 1}
                    </motion.div>
                  </div>

                  {/* Content Card - Left side if isLeft, Right side if !isLeft */}
                  <div className={`${isLeft ? 'lg:col-start-1' : 'lg:col-start-2'}`}>
                    <motion.div
                      whileHover={{ scale: 1.03, y: -5 }}
                      className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border border-gray-100 overflow-hidden group"
                    >
                      {/* Gradient overlay on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${way.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                      {/* Icon - Large and prominent */}
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.8 }}
                        className={`inline-flex w-20 h-20 rounded-2xl bg-gradient-to-br ${way.gradient} items-center justify-center mb-6 shadow-lg`}
                      >
                        <Icon className="w-10 h-10 text-white" />
                      </motion.div>

                      {/* Mobile number badge */}
                      <div className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-700 text-lg mb-4 ml-4">
                        {index + 1}
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl mb-4 leading-tight">
                        {way.title}
                      </h3>

                      {/* Highlight badge */}
                      <div className={`inline-block px-4 py-2 bg-gradient-to-r ${way.gradient} rounded-full mb-6`}>
                        <span className="text-sm text-white">
                          {way.highlight}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed">
                        {way.description}
                      </p>

                      {/* Decorative corner accent */}
                      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${way.gradient} opacity-10 rounded-bl-full`}></div>
                    </motion.div>
                  </div>

                  {/* Image - Right side if isLeft, Left side if !isLeft */}
                  <div className={`hidden lg:block ${isLeft ? 'lg:col-start-2' : 'lg:col-start-1 lg:row-start-1'}`}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      className="relative h-full min-h-[400px] rounded-3xl overflow-hidden shadow-2xl"
                    >
                      <img
                        src={way.image}
                        alt={way.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${way.gradient} opacity-20`}></div>
                      {/* Animated border on hover */}
                      <div className={`absolute inset-0 border-4 rounded-3xl border-transparent bg-gradient-to-br ${way.gradient} opacity-0 group-hover:opacity-30 transition-opacity`} style={{ backgroundClip: 'padding-box' }}></div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 px-8 py-8 bg-gradient-to-r from-cyan-50 to-purple-50 border-2 border-purple-200/50 rounded-3xl shadow-lg">
            <div className="text-center sm:text-left">
              <div className="text-3xl lg:text-4xl mb-2 bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
                Ready to transform your team?
              </div>
              <div className="text-gray-600">
                Join leading organizations already upskilling with AIDA
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white rounded-xl transition-all shadow-lg hover:shadow-2xl whitespace-nowrap"
            >
              Get Started
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}