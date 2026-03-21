'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    question: 'What differentiates Tenacix from other agencies?',
    answer:
      'We blend cognitive architecture with high-end aesthetic design. Unlike traditional agencies, we build systems that are not just visually stunning but also operationally intelligent, utilizing advanced AI agents to automate your business flows.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Timeline varies by complexity. A standard web presence takes 2-4 weeks, while complex AI-integrated platforms may take 6-10 weeks. We prioritize quality and architectural integrity over rushed delivery.',
  },
  {
    question: 'Do you offer post-launch support?',
    answer:
      'Yes. We build for longevity. Our partnerships extend beyond launch with dedicated support tiers, ensuring your digital ecosystem evolves alongside your business needs.',
  },
  {
    question: 'Can you integrate AI into my existing systems?',
    answer:
      'Absolutely. Our specialty lies in seamless integration. We can deploy autonomous agents that interface with your current CRMs, databases, and communication channels without disrupting your core operations.',
  },
  {
    question: 'What is your design philosophy?',
    answer:
      'Visual Intelligence. We believe design should communicate value instantly. We use cognitive psychology principles to guide user attention and maximize conversion, wrapped in a distinct, premium aesthetic.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg">
            Clarity on our process, philosophy, and execution.
          </p>
        </motion.div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <button
                onClick={() => setOpenIndex((current) => (current === idx ? null : idx))}
                className={`w-full text-left p-6 md:p-8 rounded-2xl transition-all duration-300 border ${
                  openIndex === idx
                    ? 'bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800'
                    : 'bg-transparent border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700'
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3
                    className={`text-xl font-semibold transition-colors ${
                      openIndex === idx
                        ? 'text-zinc-900 dark:text-zinc-100'
                        : 'text-zinc-700 dark:text-zinc-300'
                    }`}
                  >
                    {faq.question}
                  </h3>
                  <span
                    className={`flex-shrink-0 p-2 rounded-full transition-colors ${
                      openIndex === idx
                        ? 'bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-white'
                        : 'text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300'
                    }`}
                  >
                    {openIndex === idx ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </span>
                </div>

                <AnimatePresence initial={false}>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed pr-12">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
