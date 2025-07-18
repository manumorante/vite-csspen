import { usePen } from '@/hooks/usePen'
import { cn } from '@/utils/cn'
import { useParams } from 'react-router'

export default function PenInfo() {
  const { penId } = useParams()
  const { pen } = usePen({ penId })

  if (!pen) return null

  const { name, info, bgcolor, textcolor } = pen

  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')

  return (
    <div className="PenInfo xs:gap-3 xs:p-4 flex items-center gap-2 p-2">
      <div
        className={cn(
          'Avatar xs:w-10 xs:h-10 h-6 w-6',
          'flex items-center justify-center',
          'xs:text-xl text-lg leading-0 font-extrabold text-white',
          'rounded-full',
        )}
        style={{ color: textcolor, backgroundColor: bgcolor }}>
        {initials}
      </div>
      <div className="xs:block xs:text-lg xs:leading-6 flex gap-2 text-sm">
        <div className="font-semibold text-white">{name}</div>
        <div className="text-ellipsis whitespace-nowrap text-white/60">{info}</div>
      </div>
    </div>
  )
}
