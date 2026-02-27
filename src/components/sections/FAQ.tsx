import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'How do I get started?',
    answer: 'Sign up for a free account and you\'ll have access to all the features. No credit card required.'
  },
  {
    question: 'Can I change my plan?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and wire transfers for enterprise plans.'
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes, we offer a 14-day free trial for all plans. No credit card needed to get started.'
  },
  {
    question: 'What about data security?',
    answer: 'We use industry-standard encryption and comply with GDPR, CCPA, and SOC 2 requirements.'
  },
  {
    question: 'Do you offer API access?',
    answer: 'Yes, all plans include API access with comprehensive documentation and SDKs.'
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-xl text-slate-600 dark:text-slate-300">
          Find answers to common questions
        </p>
      </div>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div 
            key={idx}
            className="border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => setOpen(open === idx ? null : idx)}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
            >
              <span className="font-semibold text-slate-900 dark:text-white text-left">
                {faq.question}
              </span>
              <ChevronDown 
                size={20}
                className={`flex-shrink-0 text-slate-600 dark:text-slate-400 transition-transform ${
                  open === idx ? 'rotate-180' : ''
                }`}
              />
            </button>
            {open === idx && (
              <div className="px-6 py-4 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
                <p className="text-slate-600 dark:text-slate-300">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
