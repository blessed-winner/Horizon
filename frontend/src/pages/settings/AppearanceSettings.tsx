import { useThemeStore } from "../../Store/useThemeStore"

const AppearanceSettings = () => {
  const isDark = useThemeStore((state) => state.isDark)
  const toggleDark = useThemeStore((state) => state.toggleDark)

  return (
    <div className="space-y-3 bg-white px-8 py-12 rounded-xl shadow-lg dark:bg-slate-900">
      <div className="space-y-1">
        <h2 className="font-semibold text-gray-800 text-2xl dark:text-white">Appearance</h2>
        <p className="text-xs text-gray-500">Customize how the app looks</p>
      </div>
      <div>
        <div className="flex justify-between">
          <div className="space-y-1">
            <h4 className="text-sm text-gray-700 font-semibold dark:text-white">Dark Mode</h4>
            <p className="text-gray-500 text-xs">Toggle dark/light theme</p>
          </div>
          <div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input checked={isDark} onChange={toggleDark} type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-300 peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:bg-blue-500 transition-all"></div>
              <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all peer-checked:translate-x-5"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppearanceSettings
