import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function SectionContainer({ children }: Props) {
  return (
    <section className="mx-auto max-w-3xl bg-[#f0f1f5] px-4 dark:bg-[#0c1220] sm:px-6 xl:max-w-5xl xl:px-0">
      {children}
    </section>
  )
}
