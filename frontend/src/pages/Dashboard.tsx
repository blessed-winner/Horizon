import { CheckCircle, Clock, MessageSquare, Users, type LucideIcon } from "lucide-react"
import { dashboardData } from "../assets/assets"

const Dashboard = () => {
  const iconsMap:Record<string,LucideIcon> = {
    CheckCircle:CheckCircle,
    Users:Users,
    MessageSquare:MessageSquare,
    Clock:Clock
  }
  return (
    <div className="flex-1 p-6 md:p-10">
      <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
             {dashboardData.map((data,idx)=>{
                 const IconComponent = iconsMap[data.icon];
               return(
                    <div key={idx} className="p-4 rounded-xl bg-white space-y-3 shadow-lg">
                        <div className="flex justify-between">
                           <p className="font-medium text-sm">{data.title}</p>
                           <IconComponent className="w-4 h-4 text-blue-300"/>
                        </div>
                        <div className="space-y-2">
                        <h4 className="text-2xl font-semibold text-gray-900">{data.numbers}</h4>
                        <p className="text-xs text-gray-400 font-light">{data.statistics}</p>
                        </div>
                      </div>
               )
             })}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
             <div className="bg-white rounded-2xl p-3 shadow-xl">
                 
             </div>
             <div className="bg-white rounded-2xl p-3 shadow-xl">

             </div>
          </div>
      </div>
    </div>
  )
}

export default Dashboard