import Link from '@/components/Link'
import Image from '@/components/Image'
import siteMetadata from '@/data/siteMetadata'
import NextLink from 'next/link'
import { formatDate } from 'pliny/utils/formatDate'
import { coreContent } from 'pliny/utils/contentlayer'
import { allAuthors, Authors } from 'contentlayer/generated'

export default function Home({ posts }) {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const { avatar } = coreContent(author)
  const recentPosts = posts.slice(0, 6)

  return (
    <>
      <section className="pb-14 pt-10">
        <div className="grid items-center gap-8 sm:grid-cols-[auto_minmax(0,1fr)]">
          <div className="poi-frame h-[7rem] w-[7rem] shrink-0">
            {avatar && (
              <Image
                src={avatar}
                alt="avatar"
                width={120}
                height={120}
                priority
                className="h-full w-full rounded-sm object-cover"
              />
            )}
          </div>
          <div className="space-y-3">
            <p className="editorial-kicker">Tokyo / Frontend / Writing</p>
            <h1 className="max-w-[38rem] font-display text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.12] text-slate-950 dark:text-slate-50">
              Everyone is relevant to someone.
            </h1>
            <p className="max-w-[36rem] text-[0.92rem] leading-7 text-slate-600 dark:text-slate-300">
              I build interfaces and write about the small decisions behind them — the patterns
              worth preserving, the details others scroll past.
            </p>
          </div>
        </div>
      </section>

      <div className="editorial-rule" />
      <div className="py-5">
        <section id="recent-writing" className="space-y-2 bg-transparent pb-7">
          <div className="flex items-center justify-between gap-4 pb-3">
            <p className="editorial-kicker">Latest Posts</p>
            <NextLink
              href="/blog"
              className="editorial-kicker inline-flex items-center gap-2 no-underline transition-colors duration-200 hover:text-primary-500 dark:hover:text-primary-400"
            >
              All posts
              <span aria-hidden="true" className="text-base leading-none">
                ↗
              </span>
            </NextLink>
          </div>
          <div className="grid">
            {recentPosts.map((post, index) => (
              <article
                key={post.slug}
                className="group grid gap-2 border-b border-slate-300/80 bg-transparent py-4 transition-colors duration-200 md:grid-cols-[34px_minmax(0,1fr)_auto] md:items-start md:gap-4 dark:border-slate-800"
              >
                <div className="pt-0.5 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-slate-400 dark:text-slate-500">
                  0{index + 1}
                </div>
                <div className="min-w-0 space-y-1 md:min-h-[3.75rem]">
                  <h3 className="max-w-3xl text-[0.96rem] font-semibold leading-6 tracking-[-0.01em] sm:text-[1rem]">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="line-clamp-2 inline-block text-slate-900 transition duration-200 group-hover:text-primary-500 dark:text-slate-100 dark:group-hover:text-primary-400"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="hidden max-w-2xl text-[0.8rem] leading-6 text-slate-500 dark:text-slate-400 md:block">
                    {post.summary}
                  </p>
                </div>
                <time
                  dateTime={post.date}
                  className="pt-0.5 text-[0.64rem] font-semibold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400 md:pt-1 md:text-right"
                >
                  {formatDate(post.date, siteMetadata.locale)}
                </time>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
