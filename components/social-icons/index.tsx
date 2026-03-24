import { Mail, Github, Twitter } from './icons'

const components = {
  mail: Mail,
  github: Github,
  twitter: Twitter,
}

type SocialIconProps = {
  kind: keyof typeof components
  href: string | undefined
  size?: number
}

const SocialIcon = ({ kind, href, size = 5 }: SocialIconProps) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null

  const SocialSvg = components[kind]

  return (
    <a
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300/70 bg-white/65 text-slate-500 shadow-[0_8px_18px_rgba(15,23,42,0.035)] transition duration-200 hover:border-slate-500 hover:bg-white hover:text-slate-950 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-400 dark:hover:border-slate-500 dark:hover:bg-slate-900 dark:hover:text-slate-50"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className="fill-current"
        style={{ width: `${size * 0.25}rem`, height: `${size * 0.25}rem` }}
      />
    </a>
  )
}

export default SocialIcon
