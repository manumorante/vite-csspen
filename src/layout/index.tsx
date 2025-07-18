import { cn } from '@/utils/cn'
import type { ReactNode } from 'react'

export default function Layout({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn('Layout flex h-full w-full items-center justify-center', className)}>
      <div className="flex h-full w-full flex-col justify-between overflow-hidden md:h-[88%] md:w-[600px] md:rounded-xl md:shadow-2xl">
        {children}
      </div>
    </div>
  )
}
