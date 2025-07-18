import { useEffect } from 'react'
import { usePensStore } from '@/stores/pens'
import { getPens } from '@/api/pens'

export const useInitializePens = () => {
  const { pens, setPens } = usePensStore()

  useEffect(() => {
    const loadData = async () => {
      const { data, error: apiError } = await getPens()

      if (!apiError) {
        setPens(data || [])
      }
    }

    loadData()
  }, [setPens])

  return {
    pens,
    hasData: pens.length > 0,
  }
}
