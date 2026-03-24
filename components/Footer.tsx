'use client'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { useEffect, useState } from 'react'
import React from 'react'

export default function Footer() {
  return (
    <footer className="py-8">
      <div className="mt-16 grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-end">
        <div className="space-y-3">
          <p className="editorial-kicker">From Tokyo</p>
          <p className="max-w-xl font-display text-[1.1rem] italic leading-8 text-slate-600 dark:text-slate-300">
            Human life is ephemeral, which makes it precious.
          </p>
        </div>
        <div className="flex flex-col gap-5 md:items-end">
          <div className="flex space-x-4">
            <SocialIcon kind="twitter" href={siteMetadata.twitter} />
            <SocialIcon kind="github" href={siteMetadata.github} />
            <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
          </div>
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
            Tokyo
            <span className="text-slate-300 dark:text-slate-700">/</span>
            at
            <MemoTimeDisplay />
          </div>
        </div>
      </div>
    </footer>
  )
}

const TimeDisplay = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <span suppressHydrationWarning className="text-slate-700 dark:text-slate-200">
      {time.toLocaleTimeString('ja-JP', {
        timeZone: 'Asia/Tokyo',
        hour: '2-digit',
        minute: '2-digit',
      })}
    </span>
  )
}
const MemoTimeDisplay = React.memo(TimeDisplay)
