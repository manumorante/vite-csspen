import ErrorMessage from '@/components/ui/ErrorMessage'
import Loading from '@/components/ui/Loading'
import { usePens } from '@/hooks/usePens'
import Layout from '@/layout'
import { cn } from '@/utils/cn'
import { Link } from 'react-router'

export default function Home() {
  const { pens, isLoading, error } = usePens()

  if (isLoading) return <Loading />
  if (error || !pens) return <ErrorMessage text={error} />

  return (
    <Layout>
      <div className="flex flex-col">
        {pens.map(({ id, name, bgcolor, textcolor }) => (
          <Link
            key={id}
            to={`/${id}`}
            className={cn(
              'Thumb relative aspect-square w-full',
              'shrink-0 snap-center',
              'overflow-hidden',
              'md:cursor-pointer',
            )}
            style={{ backgroundColor: bgcolor }}>
            <img
              src={`/og/${id}.png`}
              className="h-full w-full object-cover"
              alt={name}
              width={390}
              height={390}
            />
            <div className="absolute bottom-10 w-full text-center" style={{ color: textcolor }}>
              {name}
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  )
}
