import { LayoutDashboard, LogOut, MessageSquare, Settings, SquareCheckBig, Users} from "lucide-react"
import { NavLink } from "react-router-dom"
const Sidebar = () => {
  return (
    <div className="flex flex-col h-full w-20 lg:w-60 border-r border-gray-300 bg-white z-30">
        <div className="space-y-3 p-1 mx-auto lg:p-4">
            <h2 className="text-xl lg:text-3xl text-blue-400" style={{fontFamily:'Parisienne'}}>Horizon</h2>
            <p className="text-gray-500  text-xs">Productivity Central</p>
        </div>
        <div className="space-y-2 mt-4 border-t border-gray-300 p-1 lg:p-4">
           <NavLink end={true} to='/admin' className={({isActive})=>`flex py-3.5 px-3 md:px-9 items-center justify-center lg:justify-start rounded-xl text-sm gap-3 min-w-0 font-medium ${isActive ? " bg-blue-500 text-white" : "hover:bg-gray-100/70"}`} >
            <LayoutDashboard className='min-w-4 w-5' />
            <p className='hidden lg:inline-block'>Dashboard</p>
        </NavLink>
             <NavLink to='/admin/chat' className={({isActive})=>`flex py-3.5 px-3 md:px-9 items-center justify-center lg:justify-start rounded-xl text-sm gap-3 min-w-0 font-medium ${isActive ? " bg-blue-500 text-white" : "hover:bg-gray-100/70"}`} >
            <MessageSquare className='min-w-4 w-5' />
            <p className='hidden lg:inline-block'>Chat</p>
        </NavLink>

             <NavLink to='/admin/tasks' className={({isActive})=>`flex py-3.5 px-3 md:px-9 items-center justify-center lg:justify-start rounded-xl text-sm gap-3 min-w-0 font-medium ${isActive ? " bg-blue-500 text-white" : "hover:bg-gray-100/70"}`} >
            <SquareCheckBig className='min-w-4 w-5' />
            <p className='hidden lg:inline-block'>Tasks</p>
        </NavLink>
         
              <NavLink to='/admin/team' className={({isActive})=>`flex py-3.5 px-3 md:px-9 items-center justify-center lg:justify-start rounded-xl text-sm gap-3 min-w-0 font-medium ${isActive ? " bg-blue-500 text-white" : "hover:bg-gray-100/70"}`} >
            <Users className='min-w-4 w-5' />
            <p className='hidden lg:inline-block'>Team</p>
        </NavLink>

             <NavLink to='/admin/settings' className={({isActive})=>`flex py-3.5 px-3 md:px-9 items-center justify-center lg:justify-start rounded-xl text-sm gap-3 min-w-0 font-medium ${isActive ? " bg-blue-500 text-white" : "hover:bg-gray-100/70"}`} >
            <Settings className='min-w-4 w-5' />
            <p className='hidden lg:inline-block'>Settings</p>
        </NavLink>
        </div>
        <div className="space-y-2 p-4 border-t border-gray-300">
           <div className="flex flex-col lg:flex-row items-center gap-2 bg-gray-200 py-3 px-1 rounded-xl">
            <span className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center">B</span>
              <div>
              <p className="hidden lg:inline-block font-medium text-sm text-gray-800">blessedwinner66@g...</p>
              <p className="text-xs text-gray-400">Online</p>
              </div>
              </div>
           <button className="flex gap-4 items-center justify-center w-full border py-2 bg-gray-100 border-gray-300 rounded-xl cursor-pointer">
             <LogOut className="w-5"/>
             <p className="hidden lg:inline-block text-sm font-medium">Sign Out</p>
           </button>
        </div>
    </div>
  )
}

export default Sidebar