import type { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="Layout flex h-screen w-screen items-center justify-center">
      <div className="h-full w-full overflow-hidden md:h-[88%] md:w-[600px] md:rounded-xl md:shadow-2xl">
        {children}
      </div>
    </div>
  )
}
