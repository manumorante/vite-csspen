import { cn } from '@/utils/cn'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

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
  return (
    <>
      <StepNav left />
      <StepNav right />
    </>
  )
}
