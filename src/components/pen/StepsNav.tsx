import { usePensStore } from '@/stores/pens'
import { cn } from '@/utils/cn'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { useNavigate } from 'react-router'

type Props = {
  left?: boolean
  right?: boolean
  onClick?: () => void
}

function StepNav({ left, right, onClick }: Props) {
  return (
    <div
      className={cn(
        'StepNav absolute top-16 z-10',
        'bottom-16 flex w-5/12 items-center justify-center',
        'active:bg-white/5',
        'touch-manipulation',
        { 'left-0': left, 'right-0': right },
      )}
      onClick={onClick}>
      <div
        className={cn('NavStepIcon h-16 w-16 text-white/60', {
          'mr-24': left,
          'ml-24': right,
        })}>
        {left && <ChevronLeftIcon />}
        {right && <ChevronRightIcon />}
      </div>
    </div>
  )
}

export default function StepsNav() {
  const navigate = useNavigate()
  const { getNextPen, getPreviousPen } = usePensStore()

  const handleLeft = () => {
    const newId = getPreviousPen()?.id
    if (newId) navigate(`/${newId}`)
  }

  const handleRight = () => {
    const newId = getNextPen()?.id
    if (newId) navigate(`/${newId}`)
  }

  return (
    <>
      <StepNav left onClick={handleLeft} />
      <StepNav right onClick={handleRight} />
    </>
  )
}
