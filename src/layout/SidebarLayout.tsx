import type { ReactNode } from 'react'
import Sidebar from '../components/navigation/Sidebar'

type Props = {
  children: ReactNode
}

const SidebarLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <main className="lg:ml-[330px]">{children}</main>
    </div>
  )
}

export default SidebarLayout
