import { client } from '@/api/client'
import type { Pen } from '@/types'

type Props = {
  data: Pen[] | null
  error: string | null | undefined
}
export async function getPens(): Promise<Props> {
  try {
    const { data, error } = await client.from('pens').select()
    return { data, error: error?.message }
  } catch (err) {
    const errorMessage = (err as Error)?.message ?? 'getPens() - Unknown error'
    return { data: null, error: errorMessage }
  }
}
