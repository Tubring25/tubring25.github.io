import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

const Header = () => {
  return (
    <header className="sticky top-0 z-30 mb-8 border-b border-slate-300/70 bg-[#f0f1f5]/92 py-4 backdrop-blur dark:border-slate-800 dark:bg-[#0c1220]/90">
      <div className="flex items-center justify-between gap-5">
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <span className="font-display text-[1.65rem] font-semibold text-slate-950 dark:text-slate-50">
            {siteMetadata.headerTitle}
          </span>
        </Link>
        <div className="flex items-center gap-2.5 leading-5 sm:gap-3">
          <nav className="hidden items-center gap-0.5 md:flex">
            {headerNavLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="rounded-full px-2.5 py-2 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-slate-500 transition duration-200 hover:text-slate-950 dark:text-slate-400 dark:hover:text-slate-50"
              >
                {link.title}
              </Link>
            ))}
          </nav>
          <SearchButton />
          <ThemeSwitch />
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header
