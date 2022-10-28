import React from 'react'
import { Link } from "react-router-dom";
import logo from "../../assets/Inkprog-logo.png";
import { useLogout } from "../../Hooks/userLogout";
import "../Navbaremployer/Navbaremployer.css"
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

    <div className="Navbar2">

        <div  className="left">
        <Link to="/employerdetails">Inkprog</Link>
        </div>

        <div className="right">
        <div className="LinkContainer">
           <Link to="/employerdetails">Home</Link>
           <Link to="/application">Application</Link>
           <Link className="Job" to="/jobpost">Post job</Link>

           <div className="id">
            <span>{userinfo.email}</span>
            <button onClick={handleClick}>log out</button>
          </div>

        </div>

        </div>

        


      
          



    </div>
   
  )
}

export default Navbaremployee
