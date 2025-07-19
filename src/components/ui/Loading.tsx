import { cn } from '@/utils/cn'
import { CubeTransparentIcon } from '@heroicons/react/24/outline'

export default function Loading({
  label = '',
  full = true,
}: {
  label?: string
  /** will occupy the full width and height in absolute */
  full?: boolean
}) {
  return (
    <div className={cn({ 'absolute flex h-full w-full items-center justify-center': full })}>
      <div className="flex gap-3">
        <CubeTransparentIcon className="h-7 w-7 animate-spin" /> {label}
      </div>
    </div>
  )
}
