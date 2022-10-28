import React, {  useState,useEffect, useContext } from "react";
// import { useAuthContext } from '../../Hooks/EmployeeAuthContext'
import '../Additionalinfo/Additionalinfo.css'
import axios from "axios";


const Additionalinfo = () => {



    let gettinguser=JSON.parse(localStorage.getItem("user"))
    let userinfo=gettinguser.user._id;

    
   
    
  const [details, setDetails] = useState("");
  // get request
  const getdetails = async () => {
    const response = await axios.get(
      `https://recruitment-project-mern.herokuapp.com/api/user/${userinfo}`
    );
    setDetails(response.data);
  };
  useEffect(() => {
    getdetails();
  },[]);


   //update req
   const [basicdetail, setbasicdetail] = useState({
    _id: null,
    role: "",
    currentCompany: "",
    currentLocation: "",
    technology: "",
    experience: "",
    location: "",
    graduate: "",
    english: "",
    notice: ""

  });
  const collectdata = (e) => {
    const { name, value } = e.target;
    setbasicdetail(
      {
        ...basicdetail,
        [name]: value
      },

      // setbasicdetail(e.target.value)
    )
    // getdetails()
    console.log(basicdetail)
    setDetails(e.target.value);

  };

  const updatedetail = async (e) => {
    e.preventDefault();
    // const { _id } = details._id;
    // console.log(details)

    await axios
      .patch(`https://recruitment-project-mern.herokuapp.com/api/user/login/${userinfo}`,basicdetail)
      .then((res) => {
        console.log(res);
      });
      getdetails()

  };

  //edit change
  const [require, readonl] = useState(true);

  const change = () => {
    if (require == true) {
      readonl(false);
    } else {
      readonl(true);
    }



    }

    return (
        <div className="update-user-form" >



            <div >

              
                <form onSubmit={updatedetail}>

                  <div className="DetailsContainer">
                  <h2 >Other Required Details</h2>


                  <div className="field ">

                  <label>Role</label>
                  <p>:</p>
                  <input
                    type="text"
                    name="role"
                    onChange={collectdata}
                    value={details.role}
                    required
                    readOnly={require}
                    className="input"

                  />
                   
                </div>
                <div className="field ">

                <label>Current company</label>
                  <p>:</p>
                  <input
                    type="text"
                    name="currentCompany"
                    onChange={collectdata}
                    value={details.currentCompany}
                    required
                    readOnly={require}
                    className="input"
                  />
                

                </div>
                <div className="field add">
                <label>Location</label>
                  <p>:</p>
                  <input
                    type="text"
                    name="currentLocation"
                    onChange={collectdata}
                    value={details.currentLocation}
                    required
                    readOnly={require}
                    className="input"
                  />


                </div>


                  </div>


               
                 
                <div  className="SecondContainer">
           
                <div className="InnerField">

                  <div>
                  <select name='technology' placeholder="technology" onChange={collectdata} value={details.technology}   required
                      readOnly={require}>
                        <option>Technology</option>
                        <option>python</option>
                        <option>react</option>
                        <option>c++</option>
                    </select>

                  </div>

                  <div>
                  <select name='experience' placeholder="experience" onChange={collectdata} value={details.experience}   required
                      readOnly={require}>
                        <option>Experience</option>
                        <option>one year</option>
                        <option>two year</option>
                        <option>three year</option>
                    </select>

                  </div>

                  <div>

                  <select name='location' placeholder="location" onChange={collectdata} value={details.location}   required
                      readOnly={require}>
                        <option>Location</option>
                        <option>hyderabad</option>
                        <option>chennai</option>
                        <option>delhi</option>
                    </select>

                  </div>

                  <div>
                  <select name='graduate' placeholder="graduate" onChange={collectdata} value={details.graduate}   required
                      readOnly={require}>
                        <option>Year</option>
                        <option>2022</option>
                        <option>2021</option>
                        <option>2020</option>
                    </select>

                  </div>

                  <div>
                  <select name='english' placeholder="english" onChange={collectdata} value={details.english}   required
                      readOnly={require}>
                        <option>English</option>
                        <option>good</option>
                        <option>medium</option>
                        <option>low</option>
                    </select>

                  </div>

                  <div>
                  
                  <select name='notice' placeholder="notice" onChange={collectdata} value={details.notice}   required
                      readOnly={require}>
                        <option>Notice</option>
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                    </select>

                  </div>

               

                   

                    
                 
                   
                  
                  

                </div>

                  

                <div  className="Buttons">
                        <button type='submit'>SAVE</button>
                        <button onClick={change}>Edit</button>
                    </div>


                </div>


                  
                </form>
                {/* {error && <div className="extra-form--error">{error}</div>} */}

            </div>


        </div>
    )
};

export default Additionalinfo
