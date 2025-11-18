import { Mail, UserPlus } from "lucide-react"
import { userData } from "../assets/assets"

const Team = () => {
  return (
    <div className="flex-1 p-6 md:p-10 space-y-6">
       <div>
            <div className="flex justify-between">
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold text-gray-800">Team Members</h1>
            <p className="text-gray-600 text-sm">Manage your team and invite new members</p>
          </div>
          <button className="flex items-center gap-2 text-white px-2 h-10 rounded-lg bg-blue-500 shadow-lg">
            <UserPlus className="w-4 h-4"/> 
            <span className="font-medium text-sm">Invite member</span>
          </button>
        </div>
       </div>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          { userData.map((data,idx)=>(
            <div key={idx} className="bg-white px-6 py-4 rounded-xl space-y-8 shadow-xl hover:shadow-blue-200/70 transition">
              <div className="flex gap-3">
                 <div className="bg-blue-500 w-10 h-10 flex items-center justify-center rounded-full text-white font-medium">{data.firstName.charAt(0) + data.lastName.charAt(0)}</div>
              <div className="space-y-1">
                <h4 className="text-gray-800 text-sm font-semibold">{data.firstName + " "+ data.lastName}</h4>
                <span className="text-xs bg-gray-200 px-2 py-0.5 rounded-full text-gray-600 font-medium">{data.role}</span>
              </div>
              </div>
              <button className="group flex items-center gap-2 text-xs font-medium text-gray-800 justify-center bg-gray-100/80 border border-gray-400 w-full py-2 rounded-xl hover:bg-blue-400 transition cursor-pointer hover:text-white hover:border-none">
                <Mail className="w-5 h-5 text-gray-800 group-hover:text-white"/>
                <p>{data.email}</p>  
              </button>
            </div>
          )) }
       </div>
    </div>
  )
}

export default Team