import { LayoutDashboard} from "lucide-react"
import { NavLink } from "react-router-dom"
const Sidebar = () => {
  return (
    <div className="flex flex-col min-h-screen md:p-6 border-r border-gray-300">
        <div className="space-y-3 mb-4">
            <h2 className="text-xl" style={{fontFamily:'Parisienne'}}>Horizon</h2>
            <p className="text-gray-500 text-xs">Productivity Central</p>
        </div>
        <div className="space-y-2">
            <NavLink end={true} to='/admin' className={({isActive}) =>`flex gap-2 text-sm items-center font-medium px-2 py-3 rounded-lg ${isActive && 'bg-blue-500 text-white'}`}>
                <LayoutDashboard className="w-5 h-5"/>
                <p>Dashboard</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar