import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, Zap, Lock, BarChart3, Gauge } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Header */}
      <header className="border-b border-slate-200 dark:border-slate-800 sticky top-0 bg-white dark:bg-slate-950 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold text-slate-900 dark:text-white">
            Micro-SaaS
          </a>
          <div className="flex gap-6 items-center">
            <a href="#features" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">
              Features
            </a>
            <a href="#pricing" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">
              Pricing
            </a>
            <a href="#contact" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">
              Contact
            </a>
            <Button>Get Started</Button>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
              Build your <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">SaaS</span> faster
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
              Everything you need to launch a modern SaaS product. Built with TypeScript, React, and best practices.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* Features */}
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
            {[
              { icon: Zap, title: 'Lightning Fast', desc: 'Built with Vite and optimized for performance.' },
              { icon: Lock, title: 'Secure by Default', desc: 'Authentication and best security practices built-in.' },
              { icon: BarChart3, title: 'Analytics Ready', desc: 'Track user behavior and metrics.' },
              { icon: Gauge, title: 'Scalable', desc: 'Built to scale from MVP to millions.' }
            ].map((feature) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title} className="p-6">
                  <Icon className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-4" />
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    {feature.desc}
                  </p>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Pricing */}
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
            {[
              { name: 'Starter', price: '$29', features: ['Up to 1,000 users', 'Core features', 'Email support'] },
              { name: 'Professional', price: '$99', featured: true, features: ['Up to 10,000 users', 'All starter features', 'Priority support', 'Advanced analytics'] },
              { name: 'Enterprise', price: 'Custom', features: ['Unlimited users', 'All features', '24/7 support', 'Dedicated manager'] }
            ].map((plan) => (
              <Card 
                key={plan.name}
                className={`p-8 ${plan.featured ? 'border-blue-600 dark:border-blue-400 ring-2 ring-blue-600 dark:ring-blue-400' : ''}`}
              >
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-slate-900 dark:text-white">
                    {plan.price}
                  </span>
                  {plan.price !== 'Custom' && (
                    <span className="text-slate-600 dark:text-slate-300">/month</span>
                  )}
                </div>
                <Button className="w-full mb-6" variant={plan.featured ? "default" : "outline"}>
                  Get Started
                </Button>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-slate-600 dark:text-slate-300">
                      <span className="mr-2">✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-800 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to get started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands building their SaaS with our platform
            </p>
            <div className="flex gap-4 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-blue-50">
                Start Free Trial
              </Button>
              <Button className="border border-white text-white hover:bg-blue-700">
                Schedule Demo
              </Button>
            </div>
            <p className="text-blue-100 text-sm mt-6">
              No credit card required. 14-day free trial.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center text-sm text-slate-600 dark:text-slate-400">
            <p>&copy; 2026 Micro-SaaS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
