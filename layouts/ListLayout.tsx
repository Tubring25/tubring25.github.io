'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'

interface PaginationProps {
  totalPages: number
  currentPage: number
}
interface ListLayoutProps {
  posts: CoreContent<Blog>[]
  title: string
  initialDisplayPosts?: CoreContent<Blog>[]
  pagination?: PaginationProps
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname()
  const basePath = pathname.split('/')[1]
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className="space-y-2 pb-8 pt-6 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!prevPage}>
            Previous
          </button>
        )}
        {prevPage && (
          <Link
            href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`}
            rel="prev"
            className="text-slate-700 transition-colors duration-200 hover:text-primary-500 dark:text-slate-300 dark:hover:text-primary-400"
          >
            Previous
          </Link>
        )}
        <span>
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
            Next
          </button>
        )}
        {nextPage && (
          <Link
            href={`/${basePath}/page/${currentPage + 1}`}
            rel="next"
            className="text-slate-700 transition-colors duration-200 hover:text-primary-500 dark:text-slate-300 dark:hover:text-primary-400"
          >
            Next
          </Link>
        )}
      </nav>
    </div>
  )
}

export default function ListLayout({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}: ListLayoutProps) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((post) => {
    const searchContent = post.title + post.summary + post.tags?.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  return (
    <>
      <div className="space-y-10 border-b border-slate-300/80 pb-12 dark:border-slate-800">
        <div className="space-y-4 pb-4 pt-6 md:space-y-5">
          <p className="editorial-kicker">Archive</p>
          <h1 className="text-4xl leading-tight sm:text-5xl md:text-6xl">{title}</h1>
          <p className="max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
            A running index of frontend notes, routing experiments, TypeScript exercises, and
            workflow essays.
          </p>
          <div className="relative max-w-xl">
            <input
              aria-label="Search articles"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search articles"
              className="block w-full rounded-full border border-slate-300/80 bg-white/50 px-5 py-3 text-sm uppercase tracking-[0.14em] text-slate-700 shadow-[0_10px_35px_rgba(15,23,42,0.05)] focus:border-primary-500 focus:ring-primary-400 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100 dark:focus:border-primary-400 dark:focus:ring-primary-500"
            />
            <svg
              className="absolute right-4 top-3.5 h-5 w-5 text-slate-400 dark:text-slate-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <div className="grid py-2">
          {!filteredBlogPosts.length && 'No posts found.'}
          {displayPosts.map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <article
                key={slug}
                className="group grid gap-2 border-b border-slate-300/80 bg-transparent py-5 transition-colors duration-200 md:grid-cols-[minmax(0,1fr)_auto] md:items-start md:gap-4 dark:border-slate-800"
              >
                <div className="space-y-2">
                  <h2 className="text-[1.1rem] font-semibold leading-7 tracking-[-0.01em] sm:text-[1.2rem]">
                    <Link
                      href={`/blog/${slug}`}
                      className="text-slate-900 transition duration-200 group-hover:text-primary-500 dark:text-slate-100 dark:group-hover:text-primary-400"
                    >
                      {title}
                    </Link>
                  </h2>
                  <p className="max-w-3xl text-[0.85rem] leading-7 text-slate-600 dark:text-slate-300">
                    {summary}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {tags.map((tag) => (
                      <Tag key={tag} text={tag} />
                    ))}
                  </div>
                </div>
                <div className="md:min-w-[140px] md:text-right">
                  <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
                      <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                    </dd>
                  </dl>
                </div>
              </article>
            )
          })}
        </div>
      </div>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}
