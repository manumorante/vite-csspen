import { useUIStore } from '@/stores/ui'
import { cn } from '@/utils/cn'
import type { ReactNode } from 'react'

export default function View({ children }: { children: ReactNode }) {
  const { codeFull } = useUIStore()
  return (
    <div
      className={cn('View relative overflow-hidden', {
        grow: !codeFull,
        'h-0': codeFull,
      })}>
      {children}
    </div>
  )
}
