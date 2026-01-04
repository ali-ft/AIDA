import { motion } from "motion/react";
import { useState } from "react";
import { Plus, Minus, HelpCircle, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import * as Accordion from "@radix-ui/react-accordion";

export function FAQ() {
  const faqs = [
    {
      question: "What is corporate AI training, and who is it for?",
      answer: "Corporate AI training teaches leaders and teams how to use AI tools to improve daily work, decision-making, and output quality. AIDA delivers corporate AI training for C-level executives, managers, and employees with role-based tracks so every level gets practical, job-relevant skills."
    },
    {
      question: "How fast will we see results from AI training?",
      answer: "Many companies see quick wins when training is hands-on and tied to real workflows like reporting, communication, and analysis. AIDA's ROI-focused corporate AI training program starts with immediate use cases and creates an adoption plan so benefits show up in weeks—not quarters."
    },
    {
      question: "Will AI training actually improve productivity, or is it just hype?",
      answer: "Productivity improves when people learn where AI saves time and how to use it safely and consistently. AIDA's hands-on generative AI training for business teams teaches repeatable workflows that reduce repetitive tasks and speed up execution."
    },
    {
      question: "How does AI training help with retention and lower turnover?",
      answer: "Employees stay longer when they feel they're growing and staying relevant in a fast-changing market. AIDA offers AI upskilling programs for employee retention that increase confidence, motivation, and long-term engagement across teams."
    },
    {
      question: "Can AI training reduce errors and improve work quality?",
      answer: "Yes—when teams learn to validate outputs, standardize templates, and use AI as a quality assistant rather than a shortcut. AIDA provides responsible AI training for enterprises that builds reliable review habits and reduces costly mistakes."
    },
    {
      question: "Is AI training useful for non-technical employees?",
      answer: "Absolutely—most AI value comes from everyday knowledge work like writing, summarizing, planning, and customer communication. AIDA runs AI training for non-technical employees with simple, practical exercises so adoption becomes easy and confident."
    },
    {
      question: "How do you train middle managers to lead AI adoption?",
      answer: "Managers need clear playbooks for using AI in planning, performance, reporting, and decision-making—without disrupting operations. AIDA's AI training for managers and team leads gives managers ready-to-use frameworks and team rollout steps."
    },
    {
      question: "How do we avoid confusion when different teams use different AI tools?",
      answer: "Without alignment, AI becomes fragmented and results become inconsistent across departments. AIDA's enterprise AI adoption training standardizes best practices, role-based use cases, and shared guidelines so teams operate with one AI playbook."
    },
    {
      question: "Do you offer customized AI training based on our industry and workflows?",
      answer: "Generic courses often miss your real processes, KPIs, and constraints, so adoption drops after training ends. AIDA provides customized AI training programs for companies built around your departments, real tasks, and measurable outcomes."
    },
    {
      question: "Can you train our executives separately from employees?",
      answer: "Yes—executives need strategy, governance, and decision frameworks, while employees need practical workflow skills. AIDA delivers executive AI training programs plus employee generative AI training so every level gets the right depth and focus."
    },
    {
      question: "Will AI training increase employee satisfaction and motivation?",
      answer: "Learning modern skills boosts confidence and reduces the fear of being left behind, which improves morale. AIDA's corporate AI learning and development programs are designed to be engaging and immediately useful, creating momentum across teams."
    },
    {
      question: "How does AI training support competitive advantage and hiring?",
      answer: "Companies that build AI skills internally execute faster and attract stronger candidates who want modern learning environments. AIDA's enterprise AI training and upskilling services strengthen employer branding and help you compete for high-skill talent."
    },
    {
      question: "How do you measure success after the training?",
      answer: "The best measurement combines adoption, time saved, quality improvements, and team-level consistency—not just attendance. AIDA's measurable AI training for business outcomes includes practical benchmarks and follow-up recommendations to keep gains compounding."
    },
    {
      question: "What makes AIDA different from other AI training providers?",
      answer: "Many providers offer generic lectures; real impact requires credibility, hands-on practice, and customization. AIDA delivers PhD-led corporate artificial intelligence training with industry-experienced AI trainers and customized tracks that match your company's goals."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-gradient-to-br from-white via-slate-50 to-blue-50 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-40 left-10 w-72 h-72 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      {/* Decorative Dots */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(79 70 229) 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }}></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6">
            <HelpCircle className="w-4 h-4 text-purple-600" />
            <span className="text-sm bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Got Questions?
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4">
            Frequently Asked Questions
          </h2>
          
          <p className="text-xl text-gray-600">
            Everything you need to know about AIDA's AI training programs
          </p>
        </motion.div>
        
        {/* FAQ Accordion */}
        <Accordion.Root type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Accordion.Item 
                value={`item-${index}`}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors group">
                    <span className="text-lg text-gray-900 pr-8">
                      {faq.question}
                    </span>
                    <ChevronDown className="w-5 h-5 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent flex-shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="px-6 pb-5 pt-0 text-gray-600 leading-relaxed data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden">
                  <div className="pt-2">
                    {faq.answer}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            </motion.div>
          ))}
        </Accordion.Root>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-3xl"
        >
          <h3 className="text-2xl text-white mb-4">Still have questions?</h3>
          <p className="text-blue-100 mb-6">Our team is here to help you get started</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-purple-600 px-8 py-3 rounded-xl hover:shadow-xl transition-all"
            onClick={() => navigate('/contact')}
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}