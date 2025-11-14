import {Route, Routes} from "react-router-dom"
import Auth from "./pages/Auth/Auth"
import Landing from "./pages/Landing"

const App = () => {
  return (
      <Routes>
           <Route path="/" element = {<Landing/>}/>
           <Route path="/auth" element = { <Auth/> }/>
      </Routes>
      
    
  )
}

export default App
