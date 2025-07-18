import { useEffect, useState } from 'react'
import { getPens } from '@/api/pens'
import type { Pen } from '@/types'

export function usePens() {
  const [pens, setPens] = useState<Pen[]>()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetcher() {
      const { data, error } = await getPens()
      const valid = !error && data && data.length > 0
      if (valid) setPens(data)
      setError(!valid)
      setIsLoading(false)
    }

    fetcher()
  }, [])

  return { pens, isLoading, error }
}
