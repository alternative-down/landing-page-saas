import { Moon, Sun } from 'lucide-react'
import { useDarkMode } from '@/hooks/useDarkMode'

export function ThemeToggle() {
  const { isDark, setIsDark, mounted } = useDarkMode()

  if (!mounted) return <div className="w-10 h-10" />

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="inline-flex items-center justify-center rounded-sm w-10 h-10 hover:bg-accent transition-colors"
      aria-label="Alternar tema"
    >
      {isDark ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </button>
  )
}
