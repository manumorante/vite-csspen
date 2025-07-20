import { useEffect, useState } from 'react'
import type { Pen } from '@/types'
import { usePens } from './usePens'

export function usePen({ penId }: { penId?: string }) {
  const { pens, isLoading, error: errorPens } = usePens()
  const [pen, setPen] = useState<Pen>()
  const [error, setError] = useState('')

  useEffect(() => {
    if (errorPens) return
    if (!pens.length) return
    if (!penId) return

    const newPen = pens.find((item) => item.id === penId)

    if (newPen) {
      setPen(newPen)
    } else {
      setError(`Pen with id '${penId}' not found`)
    }
  }, [penId, pens, errorPens])

  return { pen, isLoading, error }
}
