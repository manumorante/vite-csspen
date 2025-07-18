import { usePens } from './hooks/usePens'

export default function App() {
  const { pens, isLoading, error } = usePens()

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error</p>
  if (!pens) return <p>No pens</p>

  return (
    <ul>
      {pens.map((pen) => (
        <li key={pen.id}>{pen.name}</li>
      ))}
    </ul>
  )
}
