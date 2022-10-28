import { useState } from "react";
import { useAuthContext } from "./jobPostAuth";


export const Jobpost = () => {
    const [error, setError] = useState(null)
    // const [isLoading , setLoading] = useState(null)
    const { dispatch } = useAuthContext()


    const jobpost = async (firstName, lastName, email, mobileNumber, password) => {
        // setLoading(true)
        setError(null)

        const response = await fetch("/api/user/signup",{
            method:"POST",
            headers: {"Content-type":"application/json"},
            body: JSON.stringify({firstName, lastName, email, mobileNumber, password})
    

        })
        const data = await response.json()

        if(!response.ok){
            setError(data.error)
        }
        if(response.ok){
            //save user data in local storage
            localStorage.setItem("user",JSON.stringify(data))

            // dispatch update user context

            dispatch({type:"LOGIN", payload:data})


        }
    }
    return {signup,error}

}


