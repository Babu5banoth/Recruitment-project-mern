import { createContext, useState } from "react";
import axios from "axios";

export const Data = createContext();

const Jobpostcontext = ({ children }) => {
  // GET Details Request State
  const [recDetails, setRecDetails] = useState(null);

  // Getting Details
  const getRecDetails = async () => {
    const response = await axios.get("/api/jobpost");
    const data = response.data;
    // console.log(data);
    setRecDetails(data);
  };

  //POST Details Request State
  const [form, setForm] = useState({
    companyName: "",
    role: "",
    technologies: "",
    experience: "",
    location: "",
    graduate: "",
    english: "",
    noticePeriod: "",
  });

  // DELETE Request State
  const deleteRecDetails = async (_id) => {
    const response = await axios.delete(
      `/api/jobpost/${_id}`
    );
    // console.log(response);
    getRecDetails();
  };

  // GET Jobs History Request State
  const [jobHistory, setJobHistory] = useState(null);

  // Getting History
  const getJobHistory = async () => {
    const response = await axios.get("/api/jobhistory");
    const data = response.data;
    // console.log(data);
    setJobHistory(data);
  };


  return (
    <>
      <Data.Provider
        value={{
          recDetails,
          setRecDetails,
          getRecDetails,
          form,
          setForm,
          deleteRecDetails,
          jobHistory,
          getJobHistory
        }}
      >
        {children}
      </Data.Provider>
    </>
  );
};

export default Jobpostcontext;
