import { usePen } from '@/hooks/usePen'
import { useUIStore } from '@/stores/ui'
import { cn } from '@/utils/cn'
import StepsNav from './StepsNav/StepsNav'
import Button from '../ui/Button'
import { ChevronUpIcon, CodeBracketIcon } from '@heroicons/react/20/solid'

export default function View() {
  const { pen } = usePen({ penId: 'heart' })
  const { codeHide, codeFull, setCodeVisibility } = useUIStore()

  if (!pen) return null

  const currentInfo = pen.steps[0].info

  return (
    <div
      className={cn('View relative overflow-hidden', {
        grow: !codeFull,
        'h-0': codeFull,
      })}>
      <div
        className={cn(
          'Info absolute right-16 left-16 z-20 text-center text-2xl',
          'bottom-1/4',
          'transition-opacity duration-500',
          {
            'opacity-100': codeHide,
            'opacity-0': !codeHide,
          },
        )}
        style={{ color: pen.textcolor }}>
        <div className="font-extralight">{currentInfo}</div>
      </div>

      <StepsNav />

      <Button
        onClick={() => setCodeVisibility('medium')}
        className={cn('absolute right-3 bottom-3', { hidden: !codeHide })}>
        <CodeBracketIcon />
      </Button>

      <Button
        onClick={() => setCodeVisibility('full')}
        className={cn('absolute right-3 bottom-3', { hidden: codeHide })}>
        <ChevronUpIcon />
      </Button>
    </div>
  )
}
