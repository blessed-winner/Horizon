import { AlertCircle, CheckCircle, CircleAlert, Clock, PlusIcon } from "lucide-react"
import { tasks } from "../assets/assets"

const Tasks = () => {
  return (
    <div className="flex-1 p-6 md:p-10">
      <div className="space-y-4">
        <div className="flex justify-between">
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold text-gray-800">Tasks</h1>
            <p className="text-gray-600 text-sm">Manage and track your team's tasks</p>
          </div>
          <button className="flex items-center text-white px-2 h-12 rounded-lg bg-blue-500 shadow-lg">
            <PlusIcon/> 
            <span className="font-medium text-sm">New Task</span>
          </button>
        </div>
        <div className="space-y-4">
          { tasks.map((task,idx)=>(
              <div key={idx} className="bg-white px-8 py-4 rounded-2xl flex justify-between">
                <div className="flex gap-3">
                  { task.status === 'Pending' && <AlertCircle className="w-4 h-4 text-gray-800"/> }
                  { task.status === 'In Progress' && <Clock className="w-4 h-4 text-blue-400"/> }
                  { task.status === 'Completed' && <CheckCircle className="w-4 h-4 text-green-500"/> }
                  <div className="space-y-1">
                    <h3 className="font-semibold text-gray-800">{task.title}</h3>
                    <p className="text-gray-500 font-light text-sm">Due: {task.dueDate}</p>
                  </div>
                </div>
                <span className={`text-xs px-3 h-6 rounded-full flex items-center text-white font-medium ${ task.priority === 'high' && 'bg-red-600' } ${task.priority === 'medium' && 'bg-blue-700'} ${task.priority === 'low' && 'bg-purple-600'}`}>
                  {task.priority}
                </span>
              </div>
          )) }
        </div>
      </div>
    </div>
  )
}

export default Tasks