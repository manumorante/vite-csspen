import { client } from '@/api/client'
import type { Pen } from '@/types'
import type { PenResponse, PensResponse } from './types'

export async function getPens(): Promise<PensResponse> {
  try {
    const { data, error } = await client
      .from('pens')
      .select('*, steps (*)')
      .match({ visible: true })
      .order('order', { ascending: true })
      .order('num', { referencedTable: 'steps' })
    return { data, error: error ? error.details : '' }
  } catch (err) {
    const errorMessage = `getPens(): ${(err as Error)?.message ?? 'Unknown error'}`
    return { data: null, error: errorMessage }
  }
}

export async function getPen({ penId }: { penId: Pen['id'] }): Promise<PenResponse> {
  try {
    const { data, error } = await client
      .from('pens')
      .select('*, steps (*)')
      .order('num', { referencedTable: 'steps' })
      .match({ id: penId })
      .single()
    return { data, error: error ? error.details : '' }
  } catch (err) {
    const errorMessage = `getPen(): ${(err as Error)?.message ?? 'Unknown error'}`
    return { data: null, error: errorMessage }
  }
}
