import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import type { Pen } from '@/types'

type PensState = {
  // Data
  pens: Pen[]
  activeId: string
  isLoading: boolean
  error: string

  // Actions
  setPens: (pens: Pen[]) => void
  setActiveId: (penId: Pen['id']) => void
  setLoading: (value: boolean) => void
  setError: (value: string) => void
  getCurrentPen: () => Pen | null
  getNextPen: () => Pen | null
  getPreviousPen: () => Pen | null
}

export const usePensStore = create<PensState>()(
  devtools((set, get) => ({
    // Data
    pens: [],
    activeId: '',
    isLoading: true,
    error: '',

    // Actions
    setPens: (pens) => set({ pens }),
    setActiveId: (penId) => set({ activeId: penId }),
    setLoading: (value) => set({ isLoading: value }),
    setError: (value) => set({ error: value }),
    getCurrentPen: () => {
      const { pens, activeId } = get()
      return pens.find((pen) => pen.id === activeId) || null
    },
    getNextPen: () => {
      const { pens, activeId } = get()
      if (pens.length === 0) return null

      const currentIndex = pens.findIndex((pen) => pen.id === activeId)
      if (currentIndex === -1) return pens[0] // If current not found, return first

      // Calculate next index with circular logic
      const nextIndex = (currentIndex + 1) % pens.length
      return pens[nextIndex]
    },

    getPreviousPen: () => {
      const { pens, activeId } = get()
      if (pens.length === 0) return null

      const currentIndex = pens.findIndex((pen) => pen.id === activeId)
      if (currentIndex === -1) return pens[0] // If current not found, return first

      // Calculate previous index with circular logic
      const previousIndex = (currentIndex - 1 + pens.length) % pens.length
      return pens[previousIndex]
    },
  })),
)
