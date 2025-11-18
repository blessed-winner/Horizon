import { MessageSquare, Mic, Plus, Send, Users } from "lucide-react"

const Chat = () => {
  const users = [ "Mike","Sarah","Alex","Emma" ]
  return (
    <div className="flex-1 p-6 md:p-10">
       <div className="flex gap-6 flex-col lg:flex-row ">
          <div className="bg-white rounded-xl p-5 min-w-60 space-y-4 shadow-2xl">
             <div className="flex justify-between items-center">
              <span className="flex gap-2 items-center">
                <Users className="text-blue-400 w-5 h-5"/>
                <p className="font-semibold text-sm text-gray-800">Online Now</p>
              </span>
              <p className="bg-gray-300 text-gray-800 text-sm w-7 h-5.5 flex items-center justify-center rounded-full font-light">4</p>
              </div>
              <div className="space-y-4 overflow-y-auto max-h-[350px]">
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
          <div className="bg-white rounded-xl shadow-lg flex-1">
            <div className="border-b border-gray-300 p-6 flex justify-between items-center">
              <div className="flex items-center gap-3">
                 <MessageSquare className="w-5 h-5 text-blue-400"/>
                 <h4 className="font-semibold text-gray-800 text-md">Team Chat</h4>
              </div>
              <p className="px-3 py-1
              font-semibold text-xs rounded-full border text-gray-800 border-gray-500">General</p>
            </div>
            <div className="overflow-y-auto flex items-center justify-center max-h-60 h-58">
                 {/* Implementing realtime messaging */}
                 <MessageSquare className="animate-bounce text-blue-400"/>
            </div>
            <div className="border-t border-gray-300 flex items-center justify-center h-18 p-3 gap-2">
              <div  className="border relative border-gray-300 rounded-lg text-xs text-gray-800 w-[70%] px-4 h-10 flex items-center">
                  <input type="text" className="placeholder:text-xs outline-none w-[75%]" placeholder="Type a message..."/>
              </div>
               <div className="flex gap-2 absolute right-60">
                 <Plus className="w-5 h-5 text-gray-600"/>
                 <Mic className="w-5 h-5 text-gray-600"/>
               </div>
               <span className="bg-blue-500/80 w-10 h-10 flex items-center rounded-lg justify-center text-white cursor-pointer">
                 <Send className="w-5 h-5"/>
               </span>
            </div>
          </div>
          </div>
    </div>
  )
}

export default Chat