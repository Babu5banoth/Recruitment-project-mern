import React from "react";
import "../Home/Home.css";
import { Link } from "react-router-dom";
import logo from "../../assets/Inkprog-logo.png";

const Home = () => {
  return (
    <div className="bg">

      <div className="Navbar">
        <div className="Heading1">
        <h1>INKPROG</h1>
        </div>
        <div  className="Center-Text">
          <h2> RECRUITMENT MANAGEMENT SOFTAWRE</h2>
        </div>
      </div>

      <div className="Container">
        <div className="keys">
          <Link to="/signup"><button>EMPLOYEE</button></Link>
          <Link to="/adminsignup"><button>EMPLOYER</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
