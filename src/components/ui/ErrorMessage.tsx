import { cn } from '@/utils/cn'
import { XMarkIcon } from '@heroicons/react/24/outline'

export default function ErrorMessage({
  text = 'Error desconocido',
  full = true,
}: {
  text?: string
  /** will occupy the full width and height in absolute */
  full?: boolean
}) {
  return (
    <div
      className={cn({
        'absolute flex h-full w-full items-center justify-center bg-black/50': full,
      })}>
      <div className="flex flex-col items-center gap-3">
        <XMarkIcon className="h-8 w-8 text-red-500" />
        {<div className="font-semibold">Error</div>}
        {text && <div className="text-white/50">{text}</div>}
      </div>
    </div>
  )
}
