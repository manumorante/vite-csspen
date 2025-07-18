import type { Pen } from '@/types'

export type PensResponse = {
  data: Pen[] | null
  error: string
}

export type PenResponse = {
  data: Pen | null
  error: string
}
