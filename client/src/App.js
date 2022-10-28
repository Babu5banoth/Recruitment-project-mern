import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./Hooks/EmployeeAuthContext"
import Signup from "../src/Pages/Employeesignup/Employeesignup"
import Login from "../src/Pages/Employeelogin/Employeelogin"
import Adminsignup from "../src/Pages/Employersignup/Employersignup"
import Adminlogin from "../src/Pages/Employerlogin/Employerlogin"
import Home from "../src/Pages/Home/Home"
import Employeedetails from "../src/Pages/Employeeprofile/Employeeprofile"
import Employerprofile from "./Pages/Employerprofile/Employerprofile"
import Employeejobapply from "./Pages/EmployeeJobApply/Employeejobapply"
import JobPost from "./Pages/JobPost/JobPost";
import Application from "./Pages/Application/Application";




function App() {
  const { user } = useAuthContext();
  console.log(user)

  return (
    <div className="app">
      <Router>
        {/* <Navbar /> */}

        <Routes>

          <Route path="/" element={<Home/>} /> 
          <Route path="/signup" element={!user ? <Signup /> : <Navigate to='/login' />} />
          {/* <Route path="/login" element={!user ? <Login /> : <Navigate to='/employep' />} /> */}
          <Route path="/login" element={!user ? <Login /> : <Navigate to='/employeedetails' />} />
          <Route path="/employeedetails" element={user ? <Employeedetails /> : <Navigate to='/login' />} />
          <Route path="/employeejobapply" element={user ? <Employeejobapply/> : <Navigate to='/employeedetails' />} />



          <Route path="/adminsignup" element={!user ? <Adminsignup /> : <Navigate to='/adminlogin' />} />
          <Route path="/adminlogin" element={!user ? <Adminlogin /> : <Navigate to='/employerdetails' />} />
          <Route path="/employerdetails" element={user ? <Employerprofile /> : <Navigate to='/adminlogin' />} />
          <Route path="/jobpost" element={user ? <JobPost/> : <Navigate to='/employerdetails' />} />
          <Route path="/application" element={user ? <Application/> : <Navigate to='/employerdetails' />} />

  
        </Routes>
      </Router>
    </div>

  );
}

export default App;
