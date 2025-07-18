import { useParams } from 'react-router'
import { usePen } from '@/hooks/usePen'

export default function Pen() {
  const { penId } = useParams()
  const { pen, isLoading, error } = usePen({ penId })

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>{error}</p>
  if (!pen) return <p>No pen</p>

  return (
    <div>
      <p>PenL {penId}</p>
      <p>PenL {pen.info}</p>
    </div>
  )
}
