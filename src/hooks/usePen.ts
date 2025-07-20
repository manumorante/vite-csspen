import { useEffect, useState } from 'react'
import { getPen } from '@/api/pens'
import type { Pen } from '@/types'

export function usePen({ penId }: { penId: string | undefined }) {
  const [pen, setPen] = useState<Pen | null>(null)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!penId) {
      setError('usePen() - No valid ID received')
      setIsLoading(false)
      return
    }

    getPen({ penId }).then(({ data, error }) => {
      if (error || !data?.steps?.length) {
        setPen(null)
        setError(`usePen(${penId}) - ${error || 'Invalid pen data'}`)
        setIsLoading(false)
        return
      }

      setPen(data)
      setError('')
      setIsLoading(false)
    })
  }, [penId])

  return { pen, error, isLoading, hasData: !!pen }
}
