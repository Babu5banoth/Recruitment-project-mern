import React, { useState } from "react";
import "./Employersignup.css";
import { Signup } from "../../Hooks/adminSignup"
import { Link } from "react-router-dom"
import logo from "../../assets/Inkprog-logo.png";


const Employersignup = () => {

  const [nameOfTheCompany, setnameOfTheCompany] = useState("")
  const [email, setEmail] = useState("")
  const [contactNumber, setcontactNumber] = useState("")
  const [CompanyType, setCompanyType] = useState("")
  const [password, setPassword] = useState("")


  const { signup, error } = Signup()

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(nameOfTheCompany, email, contactNumber, CompanyType, password)




  }


  return (
    <div >
       <div className="Navbar">
        <div className="Heading1">
        <Link to="/">
          Inkprog
        </Link>
        </div>
        <div className="Center-Text">
          <h2>Employer Recruitment Software</h2>
        </div>
      </div>


      <div className="Container">
      <div className="keys">
          <Link to="/adminsignup">
            <button>Employer Registration</button>
          </Link>

          <Link to="/adminlogin">
            <button>Employer Login</button>
          </Link>
            
        </div>
        <div className="form-Container">
        <form onSubmit={handleSubmit} >
         
          
            <input type="text" onChange={(e) => setnameOfTheCompany(e.target.value)} value={nameOfTheCompany}   placeholder="Name of The Company " />

            <input type="email" onChange={(e) => setEmail(e.target.value)} value={email}   placeholder="Official Email"/>

            <input type="text" onChange={(e) => setcontactNumber(e.target.value)} value={contactNumber}  placeholder="Contact Number" />
         
            <input type="text" onChange={(e) => setCompanyType(e.target.value)} value={CompanyType}  placeholder="Company Type" />

            <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" />
         

          <button>submit</button>
          {error && <p>{error}</p>}
        </form>
      </div>

      </div>

     
    
    </div>
  );
};

export default Employersignup;
