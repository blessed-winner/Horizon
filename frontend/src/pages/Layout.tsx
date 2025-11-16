import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"

const Layout = () => {
  return (
    <div>
        
        <div className="flex lg:h-[100vh]">
           <Sidebar/>
           <div className="flex flex-col overflow-hidden">
              <Navbar/> 
              <Outlet/>
           </div>
            
           </div>
    </div>
  )
}

export default Layout