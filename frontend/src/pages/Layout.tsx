import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"

const Layout = () => {
  return (
    <div>
        <div className="flex lg:h-[100vh]">
           <Sidebar/>
           <Outlet/>
        </div>
    </div>
  )
}

export default Layout