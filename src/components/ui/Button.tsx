import { cn } from '@/utils/cn'

type Props = {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export default function Button({ children, className, onClick }: Props) {
  const handleOnClick = () => {
    if (onClick) onClick()
  }

  return (
    <button
      onClick={handleOnClick}
      className={cn(
        'Button',
        'inline-flex items-center gap-2 p-2',
        'text-lg leading-5',
        'rounded-md',
        'md:cursor-pointer',
        'bg-black/30 text-white/80',
        '[&>svg]:w-5',
        className,
      )}>
      {children}
    </button>
  )
}
