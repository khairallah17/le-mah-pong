import Sidebar from './sidebar'
import Navbar from './navbar'
import { Outlet } from 'react-router-dom'
import { useSidebarContext } from '../hooks/useSidebar'

const Layout = () => {

  const { open } = useSidebarContext()

  return (
      <nav className={`root-grid bg-root-background bg-cover bg-no-repeat bg-center h-screen font-inter max-h-screen ${!open ? "grid-cols-[80px_1fr]" : "grid-cols-[200px_1fr]"}`}>
          <Navbar/>
          <Sidebar/>
          <main className="flex items-center justify-center h-screen flex-col text-white content-grid max-h-screen">
            <Outlet/>
          </main>
      </nav>
  )
}

export default Layout