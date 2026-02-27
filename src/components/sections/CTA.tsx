export default function CTA() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-800 rounded-2xl p-12 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Ready to get started?
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          Join thousands of companies building their SaaS with our platform
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold">
            Start Free Trial
          </button>
          <button className="border border-white text-white hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold">
            Schedule Demo
          </button>
        </div>
        <p className="text-blue-100 text-sm mt-6">
          No credit card required. 14-day free trial.
        </p>
      </div>
    </section>
  )
}
