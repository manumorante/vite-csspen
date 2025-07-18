import { useUIStore } from '@/stores/ui'
import { cn } from '@/utils/cn'
import Button from '@/components/ui/Button'
import { ChevronDownIcon, XMarkIcon } from '@heroicons/react/20/solid'
import Editor from './Editor'

export default function Code() {
  const { codeHide, codeMid, codeFull, setCodeVisibility } = useUIStore()
  return (
    <div
      className={cn('Code', 'relative overflow-hidden transition-all duration-300', 'bg-black/40', {
        'h-0': codeHide,
        'h-1/2': codeMid,
        'h-full': codeFull,
      })}>
      <Editor />

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
