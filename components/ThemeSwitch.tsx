'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return null
  }

  return (
    <button
      aria-label="Toggle Dark Mode"
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300/70 bg-white/65 text-slate-500 shadow-[0_8px_18px_rgba(15,23,42,0.035)] transition duration-200 hover:border-slate-500 hover:bg-white hover:text-slate-950 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-400 dark:hover:border-slate-500 dark:hover:bg-slate-900 dark:hover:text-slate-50"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className={`h-4 w-4 transition-transform duration-300 ${
          mounted && theme === 'dark' ? 'rotate-180 text-amber-300' : 'rotate-0 text-current'
        }`}
      >
        {mounted && theme === 'dark' ? (
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clipRule="evenodd"
          />
        ) : (
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        )}
      </svg>
    </button>
  )
}

export default ThemeSwitch
