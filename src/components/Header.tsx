import { useUIStore } from '@/stores/ui'
import { cn } from '@/utils/cn'

export default function Header() {
  const { codeHide } = useUIStore()

  return (
    <div
      className={cn('Header', 'relative overflow-hidden', 'bg-gradient-to-b from-black/20', {
        'h-24': codeHide,
        'h-0': !codeHide,
      })}>
      <div className="Progress xs:px-4 xs:pt-4 flex gap-1">
        {Array.from({ length: 5 }, (_, i) => (
          <div className="grow bg-white/30" title={`Step ${i + 1}`}>
            <div className="h-0.5 bg-white"></div>
          </div>
        ))}
      </div>
    </div>
  )
}
