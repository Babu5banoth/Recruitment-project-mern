import { useEffect, useState, useContext } from "react";
import { Data } from "../../Context/Jobpostcontext";
import axios from "axios";
import Navbaremployee from "../../Components/Navbaremployee/Navbaremployee";
import "./Employeejobapply.css"


const Employeejobapply = () => {
  const { recDetails, getRecDetails } = useContext(Data);

  useEffect(() => {
    getRecDetails();
  }, []);

  // POST JOB HISTORY
  const [jobHistory, setJobHistory] = useState({
    companyName: "",
    role: "",
    technologies: "",
    experience: "",
    location: "",
    graduate: "",
    english: "",
    noticePeriod: "",
  });


  const createJobHistory = (index) => {
    setJobHistory({
      companyName: recDetails[index].companyName,
      role: recDetails[index].role,
      technologies: recDetails[index].technologies,
      experience: recDetails[index].experience,
      location: recDetails[index].location,
      graduate: recDetails[index].graduate,
      english: recDetails[index].english,
      noticePeriod: recDetails[index].noticePeriod,
    });
  };
  useEffect(() => {
    console.log(jobHistory);
    axios.post("https://recruitment-managementt.herokuapp.com/api/jobhistory", jobHistory);
  }, [jobHistory]);





  return (
    <div>

      <Navbaremployee />
      <h2>JobApply</h2>

      {/* <h1>Employee Name</h1> */}

        
        {recDetails &&
          recDetails.map((item, index) => {
            return (

              <div className="Div-Container">
               
                <div className="First-Box">

                  <div className="Buttons-Container">
                    <div className="Boxes">
                      <div className="Buttons" key={item._id}>
                        <button>
                          {item.companyName}
                        </button>
                        <button>
                          {item.role}
                        </button>
                        <button>
                          {item.technologies}
                        </button>
                        <button>
                          {item.experience} -years
                        </button>
                        <button>
                          {item.location}
                        </button>
                        <button>
                          {item.graduate}
                        </button>
                        <button>
                        {item.english}
                        </button>
                        <button>
                        {item.noticePeriod} -months
                        </button>
                      </div>
                    </div>
                    <div className="Apply">
                      <button
                        style={{ marginTop: "10px" }}
                        onClick={() => {
                          createJobHistory(index);
                        }}
                      >Apply</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}


      </div>
    
  );
};

export default Employeejobapply;
