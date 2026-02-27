export default function Header() {
  return (
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
          <a href="#faq" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">
            FAQ
          </a>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
            Get Started
          </button>
        </div>
      </nav>
    </header>
  )
}
