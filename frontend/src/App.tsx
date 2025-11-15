import {Route, Routes} from "react-router-dom"
import Auth from "./pages/Auth/Auth"
import Landing from "./pages/Landing"
import Layout from "./pages/Layout"
import Dashboard from "./pages/Dashboard"
import Chat from "./pages/Chat"
import Team from "./pages/Team"
import Settings from "./pages/Settings"
import Tasks from "./pages/Tasks"

const App = () => {
  return (
      <Routes>
           <Route path="/" element = {<Landing/>}/>
           <Route path="/auth" element = { <Auth/> }/>
           <Route path="/admin" element = {<Layout/>}>
                <Route index element = { <Dashboard/> }/>
                <Route path="chat" element = { <Chat/> }/>
                <Route path="team" element = { <Team/> }/>
                <Route path="Settings" element = { <Settings/> }/>
                <Route path="tasks" element = { <Tasks/> }/>
           </Route>
      </Routes>
      
    
  )
}

export default App
