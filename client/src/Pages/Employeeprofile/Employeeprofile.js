import React, { useState, useEffect, useContext } from "react";
import "./Employeeprofile.css"
import { useAuthContext } from "../../Hooks/EmployeeAuthContext";
import Additionalinfo from "../../Components/Additionalinfo/Additionalinfo";
import Navbaremployee from "../../Components/Navbaremployee/Navbaremployee";
import JobsApplied from "../../Components/JobApplied/JobApplied";
import axios from "axios";


const Employeeprofile = () => {

  const { user } = useAuthContext()
  let gettinguser = JSON.parse(localStorage.getItem("user"))
  let userinfo = gettinguser.user;
  let userid = userinfo._id;
  console.log(userid)


  const [image, setimage] = useState("")

  const [fetchdata, setvalue] = useState({});

  const getuserdata = async () => {

    const response = await axios.get(

      `https://recruitment-project-mern.herokuapp.com/api/user/${userid}`

    );

    const userdetail = response.data;

    setvalue(userdetail);

  };



  useEffect(() => {

    getuserdata();

  }, []);

  const previewFile = (file) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setimage(
        { profile: reader.result })
    };
  };


  const uploadImage = (e) => {
    let selectedfile = e.target.files[0]
    previewFile(selectedfile)
  };




  const handlesubmit = async (e) => {
    e.preventDefault();
    await axios.patch(
      `https://recruitment-project-mern.herokuapp.com/api/user/imageupload/${userid}`, image
    );
    // getuserdata();
    console.log(getuserdata())
  };


  return (
    <div>
      <Navbaremployee />
      {/* <ProfilePic /> */}
      <div className="Container5">


        <div className="Left">


          <div className="Heading">
            <h1> Employee Personal Information</h1>
          </div>
          <div className="Content1">
            <div className="ImageContainer">
              <img src={fetchdata.profile} alt="" />

              <form onSubmit={handlesubmit} encType="">

                <input

                  type="file"

                  name="photo"

                  onChange={uploadImage}

                  className="profile-image-upload"

                ></input>

                <input type="submit" className="image-uploading-button"></input>

              </form>
            </div>

            <div className="DetailsContainer">

              <div className="field">
                <label>Name of the employee</label>
                <p>:</p>
                <p>
                  {userinfo.firstName}
                  {userinfo.lastName}
                </p>
              </div>

              {/* Email */}
              <div className="field">
                <label>Email</label>
                <p>:</p>
                <p>{userinfo.email} </p>
              </div>

              {/* Number */}
              <div className="field">
                <label>Contact Number</label>
                <p>:</p>
                <p>{userinfo.mobileNumber} </p>
              </div>

              <Additionalinfo />

            </div>

          </div>
        </div>




        <div>




        </div>


        <div>

          <div>
            <h1>Jobs Applied</h1>

            <JobsApplied />


          </div>



        </div>




      </div>
    </div>
  );
};

export default Employeeprofile;
