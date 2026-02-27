import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '$29',
    description: 'Perfect for getting started',
    features: [
      'Up to 1,000 users',
      'Core features',
      'Email support',
      'Basic analytics',
    ]
  },
  {
    name: 'Professional',
    price: '$99',
    description: 'For growing businesses',
    featured: true,
    features: [
      'Up to 10,000 users',
      'All starter features',
      'Priority support',
      'Advanced analytics',
      'Custom integrations',
    ]
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large-scale operations',
    features: [
      'Unlimited users',
      'All features',
      '24/7 phone support',
      'Custom SLA',
      'Dedicated account manager',
    ]
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Simple Pricing
        </h2>
        <p className="text-xl text-slate-600 dark:text-slate-300">
          Choose the plan that's right for you
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div 
            key={plan.name}
            className={`rounded-lg p-8 border transition-all ${
              plan.featured 
                ? 'border-blue-600 dark:border-blue-400 bg-blue-50 dark:bg-slate-900 ring-2 ring-blue-600 dark:ring-blue-400' 
                : 'border-slate-200 dark:border-slate-800'
            }`}
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              {plan.name}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
              {plan.description}
            </p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-slate-900 dark:text-white">
                {plan.price}
              </span>
              {plan.price !== 'Custom' && (
                <span className="text-slate-600 dark:text-slate-300"> /month</span>
              )}
            </div>
            <button className={`w-full py-2 rounded-lg font-medium mb-6 ${
              plan.featured
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}>
              Get Started
            </button>
            <ul className="space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex gap-3 items-start">
                  <Check size={20} className="text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 dark:text-slate-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
