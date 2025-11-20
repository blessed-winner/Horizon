import {Route, Routes} from "react-router-dom"
import Auth from "./pages/Auth/Auth"
import Landing from "./pages/Landing"
import Layout from "./pages/Layout"
import Dashboard from "./pages/Dashboard"
import Chat from "./pages/Chat"
import Team from "./pages/Team"
import Settings from "./pages/Settings"
import Tasks from "./pages/Tasks"
import { useThemeStore } from "./Store/useThemeStore"
import { useEffect } from "react"

const App = () => {
     const isDark = useThemeStore((state)=>state.isDark)
     useEffect(()=>{
          document.documentElement.classList.toggle("dark",isDark)
     },[isDark])
  return (
      <Routes>
           <Route path="/" element = {<Landing/>}/>
           <Route path="/auth" element = { <Auth/> }/>
           <Route path="/admin" element = {<Layout/>}>
                <Route index element = { <Dashboard/> }/>
                <Route path="chat" element = { <Chat/> }/>
                <Route path="team" element = { <Team/> }/>
                <Route path="settings" element = { <Settings/> }/>
                <Route path="tasks" element = { <Tasks/> }/>
           </Route>
      </Routes>
      
    
  )
}

export default App
