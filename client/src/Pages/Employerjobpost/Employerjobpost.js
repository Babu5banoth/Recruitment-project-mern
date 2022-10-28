import { useContext } from "react";
import axios from "axios";
import { Data } from "../../Context/Jobpostcontext";
import "./Employerjobpost.css"
const Employerjobpost = () => {

  const {
    recDetails,
    setRecDetails,
    form,
    setForm,
  } = useContext(Data)


  // POST/CREATE Form function
  const updateFormField = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  // const[selects, setSelects] = useState();

  const createRecDetails = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "https://recruitment-managementt.herokuapp.com/api/jobpost",
      form
    );
    // console.log(response)
    setRecDetails([...recDetails, response.data]);
    setForm({
      companyName: "",
      role: "",
      technologies: "",
      experience: "",
      location: "",
      graduate: "",
      english: "",
      noticePeriod: "",
    });
  };

  return (
    <>


      <form onSubmit={createRecDetails}>
        <div className='Last-Container'>
          <div className='Button-Container'>
            <div className="InnerField">


              <div className='Input-Container Addresss'>
                <label>Company :</label>
                <input
                  type="text"
                  name="companyName"
                  value={form.companyName}
                  onChange={updateFormField}
                // readOnly={read}
                /> <br />


                <label>Role :</label>
                <input
                  type="text"
                  name="role"
                  value={form.role}
                  onChange={updateFormField}
                />
              </div>




              <div className='Flex-Container'>

                <div className='flex'>
                  {/* <label>Technology</label> */}
                  <select name="technologies" value={form.technologies} onChange={updateFormField}>
                    <option> <h1>Technology</h1> </option>
                    <option>MERN</option>
                    <option>MEAN</option>
                    <option>Tester</option>
                    <option>Figma</option>
                  </select>
                </div>
                <div className="flex">
                  {/* <label>Experience</label> */}
                  <select name="experience" value={form.experience} onChange={updateFormField}>
                  <option> <h1>Experience</h1> </option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
                <div className="flex">
                  {/* <label>Location</label> */}
                  <select name="location" value={form.location} onChange={updateFormField}>
                    <option><h1>Location</h1></option>
                    <option>Hyderbad</option>
                    <option>Bengluru</option>
                    <option>Pune</option>
                  </select>
                </div>
                <div className="flex">
                  {/* <label>Education</label> */}
                  <select name="graduate" value={form.graduate} onChange={updateFormField}>
                    <option><h1>Education</h1></option>
                    <option>BCA</option>
                    <option>BSC</option>
                    <option>B.Tech</option>
                  </select>
                </div>
                <div className="flex">
                  {/* <label>English</label> */}
                  <select name="english" value={form.english} onChange={updateFormField}>
                    <option><h1>English</h1></option>
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Expert</option>
                  </select>
                </div>
                <div className="flex">
                  {/* <label>Notice</label> */}

                  <select name="noticePeriod" value={form.noticePeriod} onChange={updateFormField}>
                    <option><h1>Notice</h1></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
              </div>

            </div>
          </div>
          <div className='Last'>
            <button>Submit</button>
          </div>
        </div>
      </form>




    </>
  );
};

export default Employerjobpost;
