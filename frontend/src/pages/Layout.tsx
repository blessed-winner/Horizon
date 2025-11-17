import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"

const Layout = () => {
  return (
    <div className="flex h-screen w-screen">
      <Sidebar/>
      <div className="flex flex-col flex-1 overflow-hidden bg-blue-50/50">
        <Navbar/>
        <main className="flex-1 overflow-auto">
          <Outlet/>
        </main>
      </div>
    </div>
  )
}

export default Layout