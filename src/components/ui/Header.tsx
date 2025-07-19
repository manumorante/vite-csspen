import { useUIStore } from '@/stores/ui'
import { cn } from '@/utils/cn'
import PenInfo from '@/components/pen/PenInfo'

export default function Header() {
  const { codeFull } = useUIStore()

  return (
    <div
      className={cn(
        'Header',
        'relative overflow-hidden transition-all duration-300',
        'bg-gradient-to-b from-black/20',
        {
          'h-24': !codeFull,
          'h-0 opacity-0': codeFull,
        },
      )}>
      <div className="Progress xs:px-4 xs:pt-4 flex gap-1">
        {Array.from({ length: 5 }, (_, i) => (
          <div className="grow bg-white/30" title={`Step ${i + 1}`}>
            <div className="h-0.5 bg-white"></div>
          </div>
        ))}
      </div>

      <PenInfo />
    </div>
  )
}
