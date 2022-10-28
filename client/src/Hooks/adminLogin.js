import { useState } from "react";
import { useAuthContext } from "./EmployeeAuthContext";



export const Login = () => {
    
    const [error, setError] = useState(null)
    // const [isLoading , setLoading] = useState(null)
    const { dispatch } = useAuthContext()


    const login = async ( email, password) => {
        // setLoading(true)
        setError(null)

        const response = await fetch("/api/admin/login",{
            method:"POST",
            headers: {"Content-type":"application/json"},
            body: JSON.stringify({ email, password})
    

        },

      
        
        )
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
    return {login,error}

}


