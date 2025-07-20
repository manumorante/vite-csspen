import { cn } from '@/utils/cn'
import { Link } from 'react-router'
import { HomeIcon } from '@heroicons/react/20/solid'

export default function Header() {
  return (
    <div className={cn('Header', 'h-10 w-full bg-black/80 px-3', 'flex items-center')}>
      <Link
        className={cn('font-semibold tracking-wide text-white/90', 'flex items-center gap-1')}
        to="/">
        <HomeIcon className="h-5 w-5" />
        csspen
      </Link>
    </div>
  )
}
