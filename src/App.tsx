import { useInitializePens } from '@/hooks/useInitializePens'
import Header from '@/components/ui/Header'
import View from './components/View/View'
import Code from './components/Code/Code'

export default function App() {
  const { hasData } = useInitializePens()

  if (!hasData) return <p>No Pens found</p>

  return (
    <div className="PenPage flex h-full w-full items-center justify-center">
      <div className="Pen transition-children flex h-full w-full flex-col justify-between overflow-hidden md:h-[88%] md:w-[600px] md:rounded-xl md:shadow-2xl">
        <Header />
        <View />
        <Code />
      </div>
    </div>
  )
}
