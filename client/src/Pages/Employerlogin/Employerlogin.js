import React, { useState } from "react";
import "../Employerlogin/Employerlogin.css"
import { Link } from "react-router-dom"
import { Login } from "../../Hooks/adminLogin";



const Employerlogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, error } = Login();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
    setEmail("");
    setPassword("");
  };


  return (
    <div>

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

          <form onSubmit={handleSubmit}>
            <h3>Employer Login</h3>

            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Email "
            />

            <input
              type="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Password"
            />


            <button className="submit">submit</button>
            {error && <p>{error}</p>}
          </form>

        </div>




      </div>

    </div>
  );
};



export default Employerlogin