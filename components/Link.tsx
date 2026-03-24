/* eslint-disable jsx-a11y/anchor-has-content */
import Link from 'next/link'
import type { LinkProps } from 'next/link'
import { AnchorHTMLAttributes } from 'react'

const defaultClassName =
  'text-slate-700 decoration-slate-400 underline-offset-4 hover:text-slate-950 dark:text-slate-300 dark:hover:text-slate-50'

const CustomLink = ({
  href,
  className,
  ...rest
}: LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')
  const resolvedClassName = className ?? defaultClassName

  if (isInternalLink) {
    return <Link className={resolvedClassName} href={href} {...rest} />
  }

  if (isAnchorLink) {
    return <a className={resolvedClassName} href={href} {...rest} />
  }

  return (
    <a
      className={resolvedClassName}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      {...rest}
    />
  )
}

export default CustomLink
