import { useParams } from 'react-router'

export default function Pen() {
  const { penId } = useParams<{ penId: string }>()
  return (
    <div>
      <p>PenL {penId}</p>
    </div>
  )
}
