import React, { useState } from "react";
import "./Employeelogin.css"
import { Link } from "react-router-dom"
import { Login } from "../../Hooks/userLogin";



const Employeelogin = () => {
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
          <form onSubmit={handleSubmit}>
            <h3>Employee Login</h3>

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



export default Employeelogin