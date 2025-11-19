import { Save } from "lucide-react"
import { notificationSettings } from "../assets/assets"

const Settings = () => {
  return (
    <div className="flex-1 p-6 md:p-10">
      <div>
        <div>
           <div>
        <h2>Settings</h2>
        <p>Manage your account and preferences</p>
        </div>
        <div>
          <div>
            <h3>Profile Settings</h3>
            <p>Update your personal information</p>
          </div>
          <div>
            <label>Full Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" placeholder="your@email.com" />
          </div>
          <button>
            <Save/>
            <p>Save Changes</p>
          </button>
        </div>
        </div>
        <div>
          <div>
            <h2>Notifications</h2>
            <p>Configure how you receive notifications</p>
          </div>
          <div>
            { notificationSettings.map((data,idx)=>(
              <div key={idx}>
                <div>
                <h5>{data.title}</h5>
                <p>{data.desc}</p>
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
        <div>
          <div>
            <h2>Appearance</h2>
            <p>Customize how the app looks</p>
          </div>
          <div>
            <div>
              <div>
                <h4>Dark Mode</h4>
                <p>Toggle dark/light theme</p>
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
          </div>
        </div>
       </div>
    </div>
  )
}

export default Settings