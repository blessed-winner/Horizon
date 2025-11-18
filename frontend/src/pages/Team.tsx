import { Mail, UserPlus } from "lucide-react"
import { userData } from "../assets/assets"

const Team = () => {
  return (
    <div className="flex-1 p-6 md:p-10">
       <div className="space-y-8">
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
       <div>
          { userData.map((data,idx)=>(
            <div key={idx}>
              <div>{data.firstName.charAt(0) + data.lastName.charAt(0)}</div>
              <div>
                <h4>{data.firstName + " "+ data.lastName}</h4>
                <span>{data.role}</span>
              </div>
              <button>
                <Mail/>
                <p>{data.email}</p>  
              </button>
            </div>
          )) }
       </div>
    </div>
  )
}

export default Team