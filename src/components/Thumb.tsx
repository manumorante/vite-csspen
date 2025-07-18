import { cn } from '@/utils/cn'

export default function Thumb({
  id,
  name,
  bgcolor,
  textcolor,
}: {
  id: string
  name: string
  bgcolor: string
  textcolor: string
}) {
  return (
    <div
      className={cn(
        'Thumb aspect-square w-full',
        'shrink-0 snap-center',
        'grid place-items-center text-center',
        'overflow-hidden',
        'md:cursor-pointer',
      )}
      style={{ backgroundColor: bgcolor, color: textcolor }}>
      <img
        src={`/og/${id}.png`}
        className="h-full w-full object-cover"
        alt={name}
        width={96}
        height={96}
      />
      {name}
    </div>
  )
}
