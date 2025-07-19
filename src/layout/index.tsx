import { cn } from '@/utils/cn'
import type { ReactNode } from 'react'
import { Link } from 'react-router'

export default function Layout({
  children,
  bgcolor = 'inherit',
  className,
}: {
  children: ReactNode
  bgcolor?: string
  className?: string
}) {
  return (
    <>
      <Link className="absolute top-4 left-4" to="/">
        csspen
      </Link>
      <div
        className={cn('Layout flex h-full w-full items-center justify-center', className)}
        style={{ backgroundColor: bgcolor }}>
        <div className="flex h-full w-full flex-col justify-between overflow-hidden md:h-[88%] md:w-[600px] md:rounded-xl md:shadow-2xl">
          {children}
        </div>
      </div>
    </>
  )
}
