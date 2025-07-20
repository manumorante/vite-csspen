import { useEffect, useState } from 'react'
import type { Pen } from '@/types'
import { usePens } from './usePens'
import { usePensStore } from '@/stores/pens'

export function useCurrentPen() {
  const { pens, isLoading, error: errorPens } = usePens()
  const [pen, setPen] = useState<Pen>()
  const [error, setError] = useState('')
  const activeId = usePensStore((state) => state.activeId)

  useEffect(() => {
    if (!activeId) {
      setError('There are currently no active Pen')
      return
    }

    if (errorPens) {
      setError(errorPens)
      return
    }

    if (!pens.length) return

    const newPen = pens.find((item) => item.id === activeId)

    if (newPen) {
      setPen(newPen)
    } else {
      setError(`Pen with id '${activeId}' not found`)
    }
  }, [activeId, pens, errorPens])

  return { pen, isLoading, error }
}
