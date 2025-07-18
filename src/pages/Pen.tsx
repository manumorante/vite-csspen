import Header from '@/components/ui/Header'
import View from '@/components/View/View'
import Code from '@/components/Code/Code'
import { usePen } from '@/hooks/usePen'
import { useParams } from 'react-router'
import Layout from '@/layout'

export default function App() {
  const { penId } = useParams()
  const { pen } = usePen({ penId })

  if (!pen) return null

  return (
    <Layout>
      <Header />
      <View />
      <Code />
    </Layout>
  )
}
