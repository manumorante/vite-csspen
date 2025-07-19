import Header from '@/components/ui/Header'
import View from '@/components/pen/View'
import CodeView from '@/components/codeView/CodeView'
import { usePen } from '@/hooks/usePen'
import { useParams } from 'react-router'
import Layout from '@/layout'

export default function App() {
  const { penId } = useParams()
  const { pen } = usePen({ penId })

  if (!pen) return null

  return (
    <Layout bgcolor={pen.bgcolor}>
      <Header />
      <View />
      <CodeView />
    </Layout>
  )
}
