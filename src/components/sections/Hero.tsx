import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
      <div className="text-center">
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
          Build your <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">SaaS</span> faster
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
          Everything you need to launch a modern SaaS product. Built with TypeScript, React, and best practices.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2">
            Get Started <ArrowRight size={20} />
          </button>
          <button className="border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white px-8 py-3 rounded-lg font-medium hover:bg-slate-50 dark:hover:bg-slate-900">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}
