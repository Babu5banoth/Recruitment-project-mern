import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AuthContext from './Context/Employeeauth';
import Jobpostcontext from './Context/Jobpostcontext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <AuthContext>
    <Jobpostcontext>
      <App/>
    </Jobpostcontext>






  </AuthContext>

);



