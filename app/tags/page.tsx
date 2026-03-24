import Link from '@/components/Link'
import Tag from '@/components/Tag'
import { slug } from 'github-slugger'
import tagData from 'app/tag-data.json'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Tags', description: 'Things I blog about' })

export default async function Page() {
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])
  return (
    <div className="space-y-10 pb-12">
      <div className="space-y-4 pt-6">
        <p className="editorial-kicker">Index</p>
        <h1 className="text-4xl leading-tight sm:text-5xl md:text-6xl">Tags</h1>
        <p className="max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
          Browse posts by topic.
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        {tagKeys.length === 0 && 'No tags found.'}
        {sortedTags.map((t) => (
          <Link
            key={t}
            href={`/tags/${slug(t)}`}
            className="inline-flex items-center gap-2 rounded-full border border-slate-300/80 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-primary-500 transition-colors duration-200 hover:border-primary-500 hover:text-primary-700 dark:border-slate-700 dark:text-primary-400 dark:hover:border-primary-400 dark:hover:text-primary-300"
            aria-label={`View posts tagged ${t}`}
          >
            #{t.split(' ').join('-')}
            <span className="text-slate-400 dark:text-slate-500">{tagCounts[t]}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
