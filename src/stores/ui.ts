import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

type UIState = {
  // Data
  codeHide: boolean
  codeMid: boolean
  codeFull: boolean
  isPlaying: boolean

  // Actions
  setCodeVisibility: (value: 'hide' | 'medium' | 'full') => void
  setIsPlaying: (value: boolean) => void
}

export const useUIStore = create<UIState>()(
  devtools((set) => ({
    // Data
    codeHide: true,
    codeMid: false,
    codeFull: false,
    isPlaying: false,

    // Actions
    setCodeVisibility: (value) =>
      set({
        codeHide: value === 'hide',
        codeMid: value === 'medium',
        codeFull: value === 'full',
      }),
    setIsPlaying: (value) => set({ isPlaying: value }),
  })),
)
