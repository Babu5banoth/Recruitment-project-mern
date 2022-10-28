import React, { useState } from "react";
import "../Employeesignup/Employeesignup.css";
import { Signup } from "../../Hooks/userSignup"
import { Link } from "react-router-dom"



const Employeesignup = () => {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [mobileNumber, setMobileNumber] = useState("")
  const [password, setPassword] = useState("")

  const { signup, error } = Signup()

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(firstName, lastName, email, mobileNumber, password)



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
          <h2>Employee Recruitment Software</h2>
        </div>

      </div>
      {/* <div className="auth">
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Login</Link>
      </div> */}

      <div className="Container">

        <div className="keys">
          <Link to="/signup">
            <button>Employee Registration</button>
          </Link>

          <Link to="/login">
            <button>Employee Login</button>
          </Link>

        </div>


        <div className="form-Container">
          <form onSubmit={handleSubmit} >
            <h3>Employee Registration</h3>

            <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} placeholder="First Name " />

            <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} placeholder="Last Name" />

            <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email" />

            <input type="number" onChange={(e) => setMobileNumber(e.target.value)} value={mobileNumber} placeholder="Mobile number" />

            <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" />


            <button>submit</button>
            {error && <p>{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Employeesignup;
