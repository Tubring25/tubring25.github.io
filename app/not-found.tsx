import Link from '@/components/Link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-start pb-12 pt-12 md:pt-24">
      <p className="editorial-kicker">404</p>
      <h1 className="mt-3 font-display text-4xl leading-tight text-slate-950 dark:text-slate-50 sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-[0.95rem] leading-7 text-slate-600 dark:text-slate-300">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-primary-500 transition-colors duration-200 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
      >
        &larr; Back to homepage
      </Link>
    </div>
  )
}
