import PenHeader from '@/components/pen/PenHeader'
import PenView from '@/components/pen/PenView'
import CodeView from '@/components/codeView/CodeView'
import { usePen } from '@/hooks/usePen'
import { useParams } from 'react-router'
import Layout from '@/layout'
import { cn } from '@/utils/cn'
import ErrorMessage from '@/components/ui/ErrorMessage'
import Loading from '@/components/ui/Loading'

export default function PenPage() {
  const { penId } = useParams()
  const { pen, isLoading, error } = usePen({ penId })

  if (isLoading) return <Loading />
  if (error || !pen) return <ErrorMessage />

  return (
    <Layout bgcolor={pen.bgcolor}>
      <div className={cn('Pen', 'flex h-full w-full flex-col overflow-hidden')}>
        <PenHeader />
        <PenView />
        <CodeView />
      </div>
    </Layout>
  )
}
