import { Navigate, Route, Routes } from "react-router-dom"
import { Toaster } from "react-hot-toast";
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Signup from "./pages/signup/Signup"
import { useAuthContext } from "./context/authContext";

function App() {

 const {authUser} = useAuthContext()

  return (
    <>
 <div className="p-4 h-screen flex items-center justify-center">

<Routes>
  <Route path="/" element={authUser?<Home/>:<Navigate to={"/login"}/>}/>
  <Route path="/login" element={!authUser?<Login/>:<Navigate to={"/"}/>}/>
  <Route path="/signup" element={!authUser?<Signup/>:<Navigate to={"/"}/>}/>
</Routes>
<Toaster/>

 </div>
    </>
  )
}

export default App
