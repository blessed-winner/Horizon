import { Save } from "lucide-react"
import { notificationSettings } from "../assets/assets"
import { useThemeStore } from "../Store/useThemeStore"

const Settings = () => {
  const {isDark,toggleDark} = useThemeStore() 
  return (
    <div className="flex-1 p-6 md:p-10">
      <div className="space-y-8">
        <div className="space-y-2">
        <h2 className="font-bold text-3xl text-gray-800">Settings</h2>
        <p className="text-sm text-light text-gray-500">Manage your account and preferences</p>
        </div>
        <div className="bg-white px-8 py-12 rounded-xl shadow-lg">
        <div className="space-y-3">
          <div className="space-y-1">
            <h3 className="font-semibold text-gray-800 text-2xl">Profile Settings</h3>
            <p className="text-xs text-gray-500">Update your personal information</p>
          </div>
          <div className="space-y-4">
            <div className="flex flex-col  gap-2">
            <label className="font-medium text-xs text-gray-800">Full Name</label>
            <input type="text" placeholder="Enter your name" className="w-full border border-gray-300 px-6 py-3 bg-gray-100/80 placeholder:text-xs rounded-xl outline-none text-xs"/>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-medium text-gray-800">Email</label>
            <input type="email" placeholder="your@email.com" className="w-full border border-gray-300 px-6 py-3 bg-gray-100/80 placeholder:text-xs rounded-xl outline-none text-xs" />
          </div>
          <button className="flex items-center text-white font-medium text-sm gap-2 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl cursor-pointer p-3">
            <Save className="w-4 h-4"/>
            <p>Save Changes</p>
          </button> 
          </div>
          </div>
        </div>
        <div className="space-y-3 bg-white px-8 py-12 rounded-xl shadow-lg">
          <div className="space-y-1">
            <h2 className="font-semibold text-gray-800 text-2xl">Notifications</h2>
            <p className="text-xs text-light text-gray-500">Configure how you receive notifications</p>
          </div>
          <div className="space-y-2">
            { notificationSettings.map((data,idx)=>(
              <div key={idx} className="flex justify-between py-2 border-b border-gray-300 last:border-b-0">
                <div className="space-y-1">
                <h5 className="font-semibold text-gray-700 text-sm">{data.title}</h5>
                <p className="text-xs text-gray-500">{data.desc}</p>
                </div>
                <div>
                  <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-300 peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:bg-blue-500 transition-all"></div>
                  <span
                   className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all 
                  peer-checked:translate-x-5"
                  ></span>
                  </label>
           </div>
              </div>
            )) }
          </div>
        </div>
        <div className="space-y-3 bg-white px-8 py-12 rounded-xl shadow-lg">
          <div className="space-y-1">
            <h2 className="font-semibold text-gray-800 text-2xl">Appearance</h2>
            <p className="text-xs text-gray-500">Customize how the app looks</p>
          </div>
          <div>
            <div className="flex justify-between">
              <div className="space-y-1">
                <h4 className="text-sm text-gray-700 font-semibold">Dark Mode</h4>
                <p className="text-gray-500 text-xs">Toggle dark/light theme</p>
              </div>
              <div>
                  <label className="relative inline-flex items-center cursor-pointer">
                  <input checked={isDark} onChange={toggleDark} type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-300 peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:bg-blue-500 transition-all"></div>
                  <span
                   className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all 
                  peer-checked:translate-x-5"
                  ></span>
              </label>
              </div>
            </div>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Settings