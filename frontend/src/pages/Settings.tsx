import ProfileSettings from "./settings/ProfileSettings"
import NotificationsSettings from "./settings/NotificationsSettings"
import AppearanceSettings from "./settings/AppearanceSettings"

const Settings = () => {
  return (
    <div className="flex-1 p-6 md:p-10 dark:bg-slate-950">
      <div className="space-y-8">
        <div className="space-y-2">
          <h2 className="font-bold text-3xl text-gray-800 dark:text-white">Settings</h2>
          <p className="text-sm text-light text-gray-500">Manage your account and preferences</p>
        </div>

        <ProfileSettings />

        <NotificationsSettings />

        <AppearanceSettings />

      </div>
    </div>
  )
}

export default Settings