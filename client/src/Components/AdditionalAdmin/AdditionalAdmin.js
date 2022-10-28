import React, { useState, useEffect, useContext } from "react";
// import { useAuthContext } from '../../Hooks/EmployeeAuthContext'
import "../AdditionalAdmin/AdditionalAdmin.css"
import axios from "axios";

const AdditionalAdmin = () => {


    let gettinguser = JSON.parse(localStorage.getItem("user"))
    let admininfo = gettinguser.user._id;

    const [details, setDetails] = useState("");
    // get request
    const getdetails = async () => {
        const response = await axios.get(
            `https://recruitment-managementt.herokuapp.com/api/admin/${admininfo}`
        );
        setDetails(response.data);
    };
    useEffect(() => {
        getdetails();
    }, []);


    //update req
    const [basicdetail, setbasicdetail] = useState({
        _id: null,
        address: "",
        noOfEmployees: "",
        headQuarters: "",
        about: ""


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
            .patch(`https://recruitment-managementt.herokuapp.com/api/admin/login/${admininfo}`, basicdetail)
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
        <div className="Container1">
            <div className="Address-Box" >
                <form onSubmit={updatedetail}>
                    <div className="Address">
                        <label htmlFor="">Address :</label>
                        <input type="text" name='address' onChange={collectdata} value={details.address} required
                            readOnly={require} />

                    </div>
                    <div className="Address">
                        <label htmlFor="">About:</label>
                        <input type="text" name='about' onChange={collectdata} value={details.about} required
                            readOnly={require} />

                    </div>
                    <div className="btn-cont" >
                        {/* <label htmlFor="">NO Of Employees :</label> */}
                        <input type="number" name=' noOfEmployees' onChange={collectdata} value={details.noOfEmployees} required
                            readOnly={require} placeholder="No Of Employee" />




                        {/* <label htmlFor="">headQuater:</label> */}
                        <input type="text" name='headQuarters' onChange={collectdata} value={details.headQuarters} required
                            readOnly={require} placeholder="HeadQuarter" />
                    </div>
                    <div className="Update-Box">
                        <button type='submit'>SAVE</button>
                        <button onClick={change}>Edit</button>
                    </div>

                </form>
            </div>



        </div>
    )
}


export default AdditionalAdmin
