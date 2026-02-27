import { useEffect, useState } from 'react'

export function useDarkMode() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Check initial preference
    const isDarkMode = 
      localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
    
    setIsDark(isDarkMode)
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    
    const html = document.documentElement
    if (isDark) {
      html.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      html.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark, mounted])

  return { isDark, setIsDark, mounted }
}
