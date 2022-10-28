import { useEffect, useState, useContext } from "react";
import { Data } from "../../Context/Jobpostcontext";
import Employerjobpost from "../../Pages/Employerjobpost/Employerjobpost";
import Navbaremployee from "../Navbaremployer/Navbaremployer";
import "./JobRecords.css"


const JobRecords = () => {
  const { recDetails, getRecDetails, deleteRecDetails } = useContext(Data);



  useEffect(() => {
    getRecDetails();
  }, []);

 

  return (
    <div>
      
      
    
    <Employerjobpost/>
      {recDetails &&
        recDetails.map((item) => {
          return (
            <div className="records" key={item._id}>
            

            <div>
            <div className="job">
              <h4>{item.companyName}</h4>
              <p className="para">{item.role}</p>
              <p className="para">{item.technologies}</p>
              <p className="para">{item.experience} -years</p>

              </div>

              <div className="job">
              <p className="para">{item.location}</p>
              <p className="para">{item.graduate}</p>
              <p className="para">{item.english}</p>
              <p className="para">{item.noticePeriod} -months</p>

              </div>

            </div>
            <div className="button_job">
            <button>Edit</button>
              <button onClick={() => deleteRecDetails(item._id)}>Delete</button>
            </div>
              
            </div>
          );
        })}
    </div>
  );
};

export default JobRecords;
