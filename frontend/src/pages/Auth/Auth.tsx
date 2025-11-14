import { LogIn } from "lucide-react"

const Auth = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <form className="bg-white rounded-2xl px-6 py-8 min-w-md">
        <div className="text-center">
          <h4 style={{fontFamily:"Parisienne"}} className="font-semibold text-3xl text-blue-500">Horizon</h4>
          <p className="text-gray-500 text-xs mt-2">Sign in or create an account to get started</p>
        </div>
         <div className="bg-gray-100 relative mt-4 rounded-xl px-4 py-2.5 mb-4">
          <div className="font-medium text-sm flex justify-between gap-2 text-gray-500">
           <span className="z-1 w-[50%] cursor-pointer flex justify-center">Sign In</span>
           <span className="z-1 w-[50%] cursor-pointer flex justify-center">Sign Up</span>
          </div>
           <div className="bg-white rounded-xl absolute top-1 left-1 w-[50%] h-8"></div>
        </div>
        <div className="space-y-3">
           <div className="flex flex-col text-sm space-y-2">
           <label className="text-xs font-semibold">Email</label>
           <input type="email" placeholder="you@example.com" className="border px-4 py-2.5 rounded-xl text-xs border-gray-300 outline-none" />
        </div>
          <div className="flex flex-col text-sm space-y-2">
          <label className="text-xs font-semibold">Password</label>
          <input type="password" placeholder="........" className="border flex px-4 py-2.5 rounded-xl text-xs border-gray-300 outline-none placeholder:text-2xl placeholder:tracking-wide"/>
        </div>
        </div>
         <button className="mt-4 text-xs bg-gradient-to-r from-blue-600 to-blue-400 text-white w-full px-4 py-3 rounded-xl cursor-pointer flex items-center justify-center gap-3 font-medium">
          <LogIn className="w-4 h-4"/>
          Sign In
          </button>
      </form>
  </div>
  )
}

export default Auth