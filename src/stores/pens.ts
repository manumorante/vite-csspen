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
}

export const usePensStore = create<PensState>()(
  devtools((set) => ({
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
  })),
)
