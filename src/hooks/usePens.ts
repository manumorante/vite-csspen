import { useEffect, useState } from 'react'
import { usePensStore } from '@/stores/pens'
import { getPens } from '@/api/pens'

export const usePens = () => {
  const pens = usePensStore((state) => state.pens)
  const setPens = usePensStore((state) => state.setPens)
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (pens.length === 0 && !isLoading) {
      const fetchData = async () => {
        setLoading(true)
        try {
          const { data } = await getPens()
          setPens(data ?? [])
        } catch (err) {
          setError(`getPens(): ${err}`)
        } finally {
          setLoading(false)
        }
      }

      fetchData()
    }
  }, [pens, isLoading, setPens])

  return { pens, isLoading, error }
}
