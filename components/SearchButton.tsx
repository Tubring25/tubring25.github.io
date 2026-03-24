import { AlgoliaButton } from 'pliny/search/AlgoliaButton'
import { KBarButton } from 'pliny/search/KBarButton'
import siteMetadata from '@/data/siteMetadata'

const SearchButton = () => {
  if (
    siteMetadata.search &&
    (siteMetadata.search.provider === 'algolia' || siteMetadata.search.provider === 'kbar')
  ) {
    const SearchButtonWrapper =
      siteMetadata.search.provider === 'algolia' ? AlgoliaButton : KBarButton

    return (
      <SearchButtonWrapper aria-label="Search">
        <div className="group hidden items-center rounded-full border border-slate-300/70 bg-white/60 px-2.5 py-1 shadow-[0_6px_18px_rgba(15,23,42,0.03)] backdrop-blur transition-colors duration-200 hover:border-slate-500 hover:bg-white md:flex dark:border-slate-700 dark:bg-slate-900/70 dark:hover:border-slate-500 dark:hover:bg-slate-900">
          <svg
            className="mr-2 h-3.5 w-3.5 text-slate-400 transition-colors duration-200 group-hover:text-slate-700 dark:group-hover:text-slate-100"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="w-24 flex-none border-none bg-transparent text-[0.82rem] text-slate-600 outline-none placeholder:text-slate-400 dark:text-slate-200"
          />
          <div className="flex space-x-1">
            <kbd className="rounded-md border border-slate-200 bg-slate-50 px-1.5 py-0.5 text-[0.62rem] font-semibold text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
              ⌘
            </kbd>
            <kbd className="rounded-md border border-slate-200 bg-slate-50 px-1.5 py-0.5 text-[0.62rem] font-semibold text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
              K
            </kbd>
          </div>
        </div>
      </SearchButtonWrapper>
    )
  }
}

export default SearchButton
