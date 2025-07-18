import { usePen } from '@/hooks/usePen'
import { useUIStore } from '@/stores/ui'
import { cn } from '@/utils/cn'
import StepsNav from './StepsNav/StepsNav'
import Button from '../ui/Button'
import { ChevronUpIcon, CodeBracketIcon } from '@heroicons/react/20/solid'
import { useParams } from 'react-router'
import StepInfo from './StepInfo'

export default function View() {
  const { penId } = useParams()
  const { pen } = usePen({ penId })
  const { codeHide, codeFull, setCodeVisibility } = useUIStore()

  if (!pen) return null

  const currentStep = 0
  const currentInfo = pen.steps[currentStep].info

  return (
    <div
      className={cn('View relative overflow-hidden transition-all duration-300', {
        grow: !codeFull,
        'h-0': codeFull,
      })}>
      <StepInfo textcolor={pen.textcolor} currentInfo={currentInfo} />

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
