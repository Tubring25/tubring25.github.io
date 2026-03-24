import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, email, twitter, github } = content

  return (
    <section className="pb-8 pt-4">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,16.5rem)_minmax(0,1fr)] lg:items-start lg:gap-12">
        <div className="relative flex flex-col items-start gap-4">
          <div className="editorial-kicker">Tokyo / Frontend / Writing</div>
          <div className="relative w-full max-w-[16rem] overflow-hidden rounded-[1.2rem] border border-slate-300/80 bg-slate-200/45 p-2 shadow-[0_14px_32px_rgba(15,23,42,0.05)] dark:border-slate-800 dark:bg-slate-900/50">
            {avatar && (
              <Image
                src={avatar}
                alt={`${name} portrait`}
                width={560}
                height={700}
                priority
                className="aspect-[4/5] w-full rounded-[0.95rem] object-cover"
              />
            )}
          </div>
          <div className="flex flex-wrap gap-2.5 pt-0.5 text-slate-600 dark:text-slate-300">
            <SocialIcon kind="twitter" href={twitter} size={4.5} />
            <SocialIcon kind="github" href={github} size={4.5} />
            <SocialIcon kind="mail" href={`mailto:${email}`} size={4.5} />
          </div>
        </div>
        <div className="space-y-4 pt-1 lg:pt-3">
          <p className="editorial-kicker">About me</p>
          <h1 className="max-w-[34rem] font-display text-[clamp(1.65rem,3vw,2.45rem)] leading-[1.08] text-slate-950 dark:text-slate-50">
            Hi, I&apos;m {name}. I&apos;m a frontend engineer who enjoys building clear interfaces
            and writing about the details behind them.
          </h1>
          <div className="max-w-[34rem] space-y-3 text-[0.96rem] leading-8 text-slate-600 dark:text-slate-300">
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}
