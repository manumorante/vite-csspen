import { useUIStore } from '@/stores/ui'
import { cn } from '@/utils/cn'
import type { ReactNode } from 'react'

export default function Code({ children }: { children: ReactNode }) {
  const { codeHide, codeMid, codeFull } = useUIStore()
  return (
    <div
      className={cn('Code', 'relative overflow-hidden', 'bg-black/40', {
        'h-0': codeHide,
        'h-1/2': codeMid,
        'h-full': codeFull,
      })}>
      {children}
    </div>
  )
}
