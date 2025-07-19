import { useUIStore } from '@/stores/ui'
import { cn } from '@/utils/cn'
import Button from '@/components/ui/Button'
import { ChevronDownIcon, XMarkIcon } from '@heroicons/react/20/solid'
import { lazy, Suspense } from 'react'
import Loading from '@/components/ui/Loading'
const Editor = lazy(() => import('./Editor'))

// @TODO: prettier para imports
export default function CodeView() {
  const { codeHide, codeMid, codeFull, setCodeVisibility } = useUIStore()

  return (
    <div
      className={cn(
        'Code',
        'relative overflow-hidden transition-[height] duration-300',
        'bg-black/40',
        {
          'h-0': codeHide,
          'h-1/2': codeMid,
          'h-full': codeFull,
        },
      )}>
      <Suspense fallback={<Loading />}>{!codeHide && <Editor />}</Suspense>

      {codeFull && (
        <Button onClick={() => setCodeVisibility('medium')} className="absolute top-3 right-3">
          <ChevronDownIcon />
        </Button>
      )}

      {codeMid && (
        <Button onClick={() => setCodeVisibility('hide')} className="absolute top-3 right-3">
          <XMarkIcon />
        </Button>
      )}
    </div>
  )
}
