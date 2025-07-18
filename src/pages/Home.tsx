import Thumb from '@/components/Thumb'
import { usePens } from '@/hooks/usePens'
import Layout from '@/layout'
import { Link } from 'react-router'

export default function Home() {
  const { pens } = usePens()

  if (!pens) return null

  return (
    <Layout>
      <div className="h-full w-full overflow-y-scroll">
        {pens.map(({ id, name, bgcolor, textcolor }) => (
          <Link key={id} to={`/${id}`}>
            <Thumb id={id} name={name} bgcolor={bgcolor} textcolor={textcolor} />
          </Link>
        ))}
      </div>
    </Layout>
  )
}
