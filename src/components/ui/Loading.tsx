import { cn } from '@/utils/cn'
import { ArrowPathRoundedSquareIcon } from '@heroicons/react/24/outline'
export default function Loading({
  text = '',
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
      <div className="flex gap-3">
        <ArrowPathRoundedSquareIcon className="h-7 w-7 animate-spin duration-500" /> {text}
      </div>
    </div>
  )
}
