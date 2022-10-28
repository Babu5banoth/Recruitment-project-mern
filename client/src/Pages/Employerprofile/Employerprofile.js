import React, { useState, useEffect, useContext } from "react";
import "./Employerprofile.css"
import { useAuthContext } from "../../Hooks/EmployeeAuthContext";
import AdditionalAdmin from "../../Components/AdditionalAdmin/AdditionalAdmin";
import Navbaremployer from "../../Components/Navbaremployer/Navbaremployer";
import axios from "axios";


const Employerprofile = () => {

  const { user } = useAuthContext()
  let gettinguser=JSON.parse(localStorage.getItem("user"))
  let userinfo=gettinguser.user;
  let userid = userinfo._id;
  console.log(userid)


  const [image, setimage] = useState("")

  const [fetchdata, setvalue] = useState({});

  const getuserdata = async () => {

    const response = await axios.get(

      `https://recruitment-managementt.herokuapp.com/api/admin/${userid}`

    );

    const userdetail = response.data;

    setvalue(userdetail);
    // console.log(userdetail.profile)

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
      `https://recruitment-managementt.herokuapp.com/api/admin/imageupload/${userid}`, image
    );
    // getuserdata();
    console.log(getuserdata())
  };






  return (
    <div>

      <Navbaremployer/>
      
    
      {/* <div className="upload_img">
        <img src="" alt="" />
      </div> */}
     
      <div className="Container1">
     
        <div className="first-Box1">
        
        <div className="ImageContainer">
              <img alt="" src={fetchdata.profile} />
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
         

        <div className="Text-Box">
        <div className="Text-Div">
        
          <p>Company Name : <span>{userinfo.nameOfTheCompany}</span></p>

        </div>
        <div className="Text-Div">
          <p>Email :<span>{userinfo.email}</span></p>

        </div>
        <div className="Text-Div">
          <p>Contact Number :<span>{userinfo.contactNumber}</span></p>

        </div>
        <div className="Text-Div">
          <p>Company type :<span>{userinfo.CompanyType}</span></p>

        </div>
        

        </div>
        <AdditionalAdmin/>

      </div>

      

      



      </div>
    </div>
  );
};

export default Employerprofile;
