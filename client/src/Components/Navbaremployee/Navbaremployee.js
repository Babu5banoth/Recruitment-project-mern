import React from 'react'
import { Link } from "react-router-dom";
import logo from "../../assets/Inkprog-logo.png";
import { useLogout } from "../../Hooks/userLogout";
import "../Navbaremployee/Navbaremployee.css"
import { useAuthContext } from "../../Hooks/EmployeeAuthContext";

const Navbaremployee = () => {
    const { user } = useAuthContext()
    const { logout } = useLogout();
    const handleClick = () => {
        logout();
      };

      let gettinguser=JSON.parse(localStorage.getItem("user"))
      let userinfo=gettinguser.user;
      
    

  return (

    <div className="Navbar">

        <div  className="left">
        <Link to="/employeedetails">Inkprog</Link>
        </div>
        <div className="right">
          
        <div className="LinkContainer">
           <Link to="/employeedetails">Home</Link>
           <Link to="/employeejobapply">Job</Link>
           <div className='id'>
            <span>{ userinfo.email}</span>
            <button onClick={handleClick}>log out</button>
          </div>
           
        </div>

        </div>



      
          



    </div>
   
  )
}

export default Navbaremployee
