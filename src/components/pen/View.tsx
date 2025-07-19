import { usePen } from '@/hooks/usePen'
import { useUIStore } from '@/stores/ui'
import { cn } from '@/utils/cn'
import StepsNav from '@/components/pen/StepsNav'
import Button from '@/components/ui/Button'
import { ChevronUpIcon, CodeBracketIcon } from '@heroicons/react/20/solid'
import { useParams } from 'react-router'
import StepInfo from '@/components/pen/StepInfo'
import Html from '@/components/Html'
import Style from '@/components/Style'

export default function View() {
  const { penId } = useParams()
  const { pen } = usePen({ penId })
  const { codeHide, codeFull, setCodeVisibility } = useUIStore()

  if (!pen) return null

  const currentStep = pen.steps.length - 1
  const currentInfo = pen.steps[currentStep].info
  const currentCSS = pen.steps[currentStep].css

  return (
    <div
      className={cn('PenView relative overflow-hidden transition-all duration-300', {
        grow: !codeFull,
        'h-0': codeFull,
      })}>
      <StepInfo textcolor={pen.textcolor} currentInfo={currentInfo} />

      <Html html={pen.html} />
      <Style css={currentCSS} />

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
