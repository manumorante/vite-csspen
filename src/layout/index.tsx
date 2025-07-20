import { cn } from '@/utils/cn'
import type { ReactNode } from 'react'

export default function Layout({
  children,
  bgcolor = 'inherit',
}: {
  children: ReactNode
  bgcolor?: string
}) {
  return (
    <div className={cn('Layout', 'h-full w-full')} style={{ backgroundColor: bgcolor }}>
      {children}
    </div>
  )
}
