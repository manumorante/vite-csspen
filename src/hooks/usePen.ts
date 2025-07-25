import { useEffect, useState } from 'react'
import type { Pen } from '@/types'
import { usePens } from './usePens'
import { usePensStore } from '@/stores/pens'

export function usePen({ penId }: { penId?: string }) {
  const { pens, isLoading, error: errorPens } = usePens()
  const [pen, setPen] = useState<Pen>()
  const [error, setError] = useState('')
  const setActiveId = usePensStore((state) => state.setActiveId)

  useEffect(() => {
    if (errorPens) return
    if (!pens.length) return
    if (!penId) return

    const newPen = pens.find((item) => item.id === penId)

    if (newPen) {
      setPen(newPen)
      setActiveId(newPen.id)
    } else {
      setError(`Pen with id '${penId}' not found`)
    }
  }, [penId, pens, errorPens, setActiveId])

  return { pen, isLoading, error }
}
