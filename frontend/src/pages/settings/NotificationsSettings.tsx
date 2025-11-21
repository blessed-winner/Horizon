import { notificationSettings } from "../../assets/assets"

const NotificationsSettings = () => {
  return (
    <div className="space-y-3 bg-white px-8 py-12 rounded-xl shadow-lg dark:bg-slate-900">
      <div className="space-y-1">
        <h2 className="font-semibold text-gray-800 text-2xl dark:text-white">Notifications</h2>
        <p className="text-xs text-light text-gray-500">Configure how you receive notifications</p>
      </div>
      <div className="space-y-2">
        {notificationSettings.map((data, idx) => (
          <div key={idx} className="flex justify-between py-2 border-b border-gray-300 last:border-b-0">
            <div className="space-y-1">
              <h5 className="font-semibold text-gray-700 text-sm dark:text-white">{data.title}</h5>
              <p className="text-xs text-gray-500">{data.desc}</p>
            </div>
            <div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-300 peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:bg-blue-500 transition-all" />
                <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all peer-checked:translate-x-5" />
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NotificationsSettings
