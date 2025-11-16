import { LayoutDashboard, MessageSquare, Settings, SquareCheckBig, Users} from "lucide-react"
import { NavLink } from "react-router-dom"
const Sidebar = () => {
  return (
    <div className="flex flex-col min-h-screen w-20 lg:w-60 border-r border-gray-300">
        <div className="space-y-3 p-1 mx-auto lg:p-4">
            <h2 className="text-xl lg:text-3xl text-blue-400" style={{fontFamily:'Parisienne'}}>Horizon</h2>
            <p className="text-gray-500  text-xs">Productivity Central</p>
        </div>
        <div className="space-y-2 mt-4 border-t border-gray-300 p-1 lg:p-4">
           <NavLink end={true} to='/admin' className={({isActive})=>`flex py-3.5 px-3 md:px-9 items-center justify-center lg:justify-start rounded-xl text-sm gap-3 min-w-0 ${isActive && " bg-blue-500 text-white font-medium"}`} >
            <LayoutDashboard className='min-w-4 w-5' />
            <p className='hidden md:inline-block'>Dashboard</p>
        </NavLink>
             <NavLink to='/admin/chat' className={({isActive})=>`flex py-3.5 px-3 md:px-9 items-center justify-center lg:justify-start rounded-xl text-sm gap-3 min-w-0 ${isActive && " bg-blue-500 text-white font-medium"}`} >
            <MessageSquare className='min-w-4 w-5' />
            <p className='hidden md:inline-block'>Chat</p>
        </NavLink>

             <NavLink to='/admin/tasks' className={({isActive})=>`flex py-3.5 px-3 md:px-9 items-center justify-center lg:justify-start rounded-xl text-sm gap-3 min-w-0 ${isActive && " bg-blue-500 text-white font-medium"}`} >
            <SquareCheckBig className='min-w-4 w-5' />
            <p className='hidden md:inline-block'>Tasks</p>
        </NavLink>
         
              <NavLink to='/admin/team' className={({isActive})=>`flex py-3.5 px-3 md:px-9 items-center justify-center lg:justify-start rounded-xl text-sm gap-3 min-w-0 ${isActive && " bg-blue-500 text-white font-medium"}`} >
            <Users className='min-w-4 w-5' />
            <p className='hidden md:inline-block'>Team</p>
        </NavLink>

             <NavLink to='/admin/settings' className={({isActive})=>`flex py-3.5 px-3 md:px-9 items-center justify-center lg:justify-start rounded-xl text-sm gap-3 min-w-0 ${isActive && " bg-blue-500 text-white font-medium"}`} >
            <Settings className='min-w-4 w-5' />
            <p className='hidden md:inline-block'>Settings</p>
        </NavLink>
        </div>
    </div>
  )
}

export default Sidebar