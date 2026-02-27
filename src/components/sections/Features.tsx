import { Zap, Lock, BarChart3, Gauge } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Built with Vite and optimized for performance. Page loads in milliseconds.'
  },
  {
    icon: Lock,
    title: 'Secure by Default',
    description: 'Authentication, authorization, and best security practices built-in.'
  },
  {
    icon: BarChart3,
    title: 'Analytics Ready',
    description: 'Track user behavior and metrics with integrated analytics.'
  },
  {
    icon: Gauge,
    title: 'Scalable',
    description: 'Built to scale from MVP to millions of users.'
  },
]

export default function Features() {
  return (
    <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Powerful Features
        </h2>
        <p className="text-xl text-slate-600 dark:text-slate-300">
          Everything you need to build and scale your SaaS
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature) => {
          const Icon = feature.icon
          return (
            <div key={feature.title} className="p-6 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-600 transition-colors">
              <Icon size={32} className="text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                {feature.description}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
