import { Users } from "lucide-react"

const Chat = () => {
  const users = [ "Mike","Sarah","Alex","Emma" ]
  return (
    <div className="flex-1 p-6 md:p-10">
       <div className="flex gap-8">
          <div className="bg-white rounded-xl p-5 max-w-60 w-60 space-y-4">
             <div className="flex justify-between items-center">
              <span className="flex gap-2 items-center">
                <Users className="text-blue-400 w-4 h-4"/>
                <p className="font-semibold text-sm text-gray-800">Online Now</p>
              </span>
              <p className="bg-gray-400 text-sm w-3 h-2 rounded-full">4</p>
              </div>
              <div className="space-y-6">
            { users.map((user,idx)=>(
              <div key={idx}>
                <div>
                  <p>{user.charAt(0)}</p>
                </div>
                <div>
                  <p>{user}</p>
                  <p>Online</p>
                </div>
              </div>
            )) }
          </div>
          </div>
          </div>
    </div>
  )
}

export default Chat