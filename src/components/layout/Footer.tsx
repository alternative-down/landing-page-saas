export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li><a href="#" className="hover:text-slate-900 dark:hover:text-white">Features</a></li>
              <li><a href="#" className="hover:text-slate-900 dark:hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-slate-900 dark:hover:text-white">Security</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li><a href="#" className="hover:text-slate-900 dark:hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-slate-900 dark:hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-slate-900 dark:hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li><a href="#" className="hover:text-slate-900 dark:hover:text-white">Privacy</a></li>
              <li><a href="#" className="hover:text-slate-900 dark:hover:text-white">Terms</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Follow</h3>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li><a href="#" className="hover:text-slate-900 dark:hover:text-white">Twitter</a></li>
              <li><a href="#" className="hover:text-slate-900 dark:hover:text-white">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 text-center text-sm text-slate-600 dark:text-slate-400">
          <p>&copy; 2026 Micro-SaaS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
