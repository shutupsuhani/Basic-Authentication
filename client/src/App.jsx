import {BrowserRouter,Routes,Route} from "react-router-dom"
import Signup from "./components/Signup"
import Login from "./components/Login"
import Home from "./components/Home"
import Forgotpassword from "./components/Forgotpassword"
import ResetPassword from "./components/ResetPassword"

function App() {
 

  return (
    <>
     <BrowserRouter>
     <Routes>
       <Route path="/" element={<Login/>}></Route>
     </Routes>
     <Routes>
       <Route path="/signup" element={<Signup/>}></Route>
     </Routes>
     <Routes>
       <Route path="/home" element={<Home/>}></Route>
     </Routes>
     <Routes>
       <Route path="/forgot-password" element={<Forgotpassword/>}></Route>
     </Routes>
     <Routes>
       <Route path="/reset-password/:id/:token" element={<ResetPassword/>}></Route>
     </Routes>
     
     </BrowserRouter>
    </>
  )
}

export default App
