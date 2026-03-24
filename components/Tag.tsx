import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="mr-2 inline-flex rounded-full border border-slate-300/80 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-primary-500 transition-colors duration-200 hover:border-primary-500 hover:text-primary-700 dark:border-slate-700 dark:text-primary-400 dark:hover:border-primary-400 dark:hover:text-primary-300"
    >
      #{text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
