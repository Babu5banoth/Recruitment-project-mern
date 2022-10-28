import { useEffect, useContext } from "react";
import "../JobApplied/JobApplied.css"

import { Data } from "../../Context/Jobpostcontext";

const JobsApplied = () => {

  const { jobHistory, getJobHistory } = useContext(Data);

  useEffect(() => {
    getJobHistory();
  }, []);

  return (
    <div>
      

      {jobHistory &&
        jobHistory.map((item) => {
          return (
            <div className="Right">
            <div className="history">
              <div className="heading2">
                <h2 >Jobs Applied</h2>
              </div>
            <div className="Inner-Data" key={item._id}>
              <p className="Para">{item.companyName}</p>
              <p>{item.role}</p>
              <p>{item.date}</p>
            </div>
            </div>
            </div>
          );
        })}
    </div>
  );
};

export default JobsApplied;
