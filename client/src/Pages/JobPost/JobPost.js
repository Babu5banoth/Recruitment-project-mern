import JobRecords from "../../Components/JobRecord/JobRecords"
import Navbaremployee from "../../Components/Navbaremployer/Navbaremployer"



const JobPost = () => {
  return (
    <>
    <Navbaremployee/>
    <div className="post">
    <h2>Post a Job</h2>
    
    <JobRecords/>
    
    </div>
    </>
  )
}

export default JobPost