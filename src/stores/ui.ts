import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

type UIState = {
  // Data
  codeHide: boolean
  isPlaying: boolean

  // Actions
  setCodeVisibility: (value: 'hide' | 'medium' | 'full') => void
  setIsPlaying: (value: boolean) => void
}

export const useUIStore = create<UIState>()(
  devtools((set) => ({
    // Data
    codeHide: true,
    isPlaying: false,

    // Actions
    setCodeVisibility: (value) => set({ codeHide: value === 'hide' }),
    setIsPlaying: (value) => set({ isPlaying: value }),
  })),
)
