import { Bell, Moon, X } from "lucide-react"

const Navbar = () => {
  return (
    <div className="sticky top-0 flex justify-between items-center h-16 px-12 bg-white border-b border-gray-300 z-20">
      <span className="p-2 hover:bg-blue-400 hover:text-white transition rounded-xl cursor-pointer">
          <X className="cursor-pointer size-4"/>
      </span>
        <div className="flex gap-3">
          <span className="p-2 rounded-xl hover:bg-blue-400 hover:text-white transition cursor-pointer">
             <Bell className="relative size-4"/>
             <div className="absolute top-4 right-24 bg-blue-600 rounded-full text-white text-xs w-3 h-3 flex items-center justify-center">3</div>
          </span>
          <span className="p-2  rounded-xl hover:bg-blue-400 hover:text-white transiton cursor-pointer">
              <Moon className="size-4"/>  
          </span>
         
        </div>
    </div>
  )
}

export default Navbar