'use client'

import { useState } from 'react'
import Link from './Link'
import headerNavLinks from '@/data/headerNavLinks'

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false)

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = 'auto'
      } else {
        // Prevent scrolling
        document.body.style.overflow = 'hidden'
      }
      return !status
    })
  }

  return (
    <>
      <button
        aria-label="Toggle Menu"
        onClick={onToggleNav}
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300/70 text-slate-700 shadow-[0_6px_18px_rgba(15,23,42,0.03)] transition-colors duration-200 hover:border-slate-500 hover:text-slate-950 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:text-slate-50 md:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-4.5 w-4.5"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={`fixed h-screen left-0 top-0 z-40 w-full transform bg-[#f0f1f5] opacity-100 duration-300 ease-out dark:bg-[#0c1220] md:hidden ${
          navShow ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-slate-300/80 px-6 py-6 dark:border-slate-800">
          <div className="flex flex-col">
            <span className="editorial-kicker text-[0.65rem]">Navigation</span>
            <span className="font-display text-2xl text-slate-950 dark:text-slate-50">Yu</span>
          </div>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300/80 text-slate-800 dark:border-slate-700 dark:text-slate-100"
            aria-label="Toggle Menu"
            onClick={onToggleNav}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <nav className="mt-10 space-y-3 px-6">
          {headerNavLinks.map((link) => (
            <div
              key={link.title}
              className="border-b border-slate-300/70 pb-3 dark:border-slate-800"
            >
              <Link
                href={link.href}
                className="flex items-center justify-between py-2 font-display text-3xl text-slate-950 dark:text-slate-50"
                onClick={onToggleNav}
              >
                {link.title}
                <span className="text-sm font-sans font-semibold uppercase tracking-[0.2em] text-slate-400">
                  / go
                </span>
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </>
  )
}

export default MobileNav
