import { CheckCircle, CircleAlert, Clock, PlusIcon } from "lucide-react"
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
          <button className="flex items-center text-white px-2 rounded-lg bg-blue-400">
            <PlusIcon/> 
            <span className="font-medium text-sm">New Task</span>
          </button>
        </div>
        <div>
          { tasks.map((task,idx)=>(
              <div key={idx}>
                <div>
                  { task.status === 'Pending' && <Clock/> }
                  { task.status === 'In Progress' && <CircleAlert/> }
                  { task.status === 'Completed' && <CheckCircle/> }
                  <div>
                    <h3>{task.title}</h3>
                    <p>Due: {task.dueDate}</p>
                  </div>
                </div>
                <span>
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