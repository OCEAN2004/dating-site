import Landing from './pages/Landing'
import Login from './pages/login'
import SignUp from './pages/signup/SignUp'
import CollegeVerify from './pages/signup/college_verify'
import ProfileSetup from './pages/onBoarding/profileSetup'
import Questions from './pages/onBoarding/questions'
import Interests from './pages/onBoarding/interests'
import DashboardHome from './pages/dashboard/home'
import ProfilePage from './pages/dashboard/profilePage'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateAccount from './pages/signup/create_account'
import EditProfile from './pages/dashboard/editProfile'

function App() {

  return (
   <> 
   <BrowserRouter>
   <Routes>
    <Route path="/" element ={<Landing/>}/>
    <Route path="/login" element ={<Login/>}/>
    <Route path="/signup" element ={<SignUp/>}/>
    <Route path="/college_verification" element={<CollegeVerify/>}/>
    <Route path="/account_creation" element={<CreateAccount/>}/>
    <Route path="/profile_setup" element={<ProfileSetup/>}/>
    <Route path="/questions_for_you" element={<Questions/>}/>
    <Route path="/interests" element={<Interests/>}/>
    <Route path="/home" element={<DashboardHome/>}/>
    <Route path="/profile" element={<ProfilePage/>}/>
     <Route path="/editpf" element={<EditProfile/>}/>
    </Routes></BrowserRouter>
   </>
  )
}
export default App
