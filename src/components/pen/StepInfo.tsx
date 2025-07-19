import { useUIStore } from '@/stores/ui'
import { cn } from '@/utils/cn'

export default function StepInfo({
  textcolor,
  currentInfo,
}: {
  textcolor: string
  currentInfo: string
}) {
  const { codeHide } = useUIStore()

  return (
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
      style={{ color: textcolor }}>
      <div className="font-extralight">{currentInfo}</div>
    </div>
  )
}
