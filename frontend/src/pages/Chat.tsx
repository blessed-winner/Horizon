import { Users } from "lucide-react"

const Chat = () => {
  const users = [ "Mike","Sarah","Alex","Emma" ]
  return (
    <div className="flex-1 p-6 md:p-10">
       <div className="flex gap-8">
          <div className="bg-white rounded-xl p-5 max-w-60 w-60 space-y-4 shadow-2xl">
             <div className="flex justify-between items-center">
              <span className="flex gap-2 items-center">
                <Users className="text-blue-400 w-5 h-5"/>
                <p className="font-semibold text-sm text-gray-800">Online Now</p>
              </span>
              <p className="bg-gray-300 text-gray-800 text-sm w-7 h-5.5 flex items-center justify-center rounded-full font-light">4</p>
              </div>
              <div className="space-y-4">
            { users.map((user,idx)=>(
              <div key={idx} className="flex gap-3 hover:bg-gray-100/70 px-2 py-3 rounded-xl cursor-pointer">
                <div className="bg-blue-400 text-white w-10 h-10 flex items-center justify-center rounded-full">
                  <p className="font-semibold">{user.charAt(0)}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{user}</p>
                  <p className="text-xs text-gray-400">Online</p>
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