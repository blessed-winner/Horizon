import { Save } from "lucide-react"

const ProfileSettings = () => {
  return (
    <div className="bg-white px-8 py-12 rounded-xl shadow-lg">
      <div className="space-y-3">
        <div className="space-y-1">
          <h3 className="font-semibold text-gray-800 text-2xl">Profile Settings</h3>
          <p className="text-xs text-gray-500">Update your personal information</p>
        </div>
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
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
  )
}

export default ProfileSettings
