import axios,{ AxiosError } from "axios";
import { useState } from "react"
import {useNavigate} from "react-router"
import instance from "../../utils/apiclient";
import "../../styles/organizationlogin.css"
import { Link } from "react-router"

function Organizationlogin(){
    const[data,setdata]=useState({email:"",password:""})
    const[error,seterror]=useState({})
    const navigate=useNavigate()
    function change(e){
        e.preventDefault()
        setdata({...data,[e.target.name]:e.target.value})
    }
    async function login(e){
        e.preventDefault()
        try{
             const err = {}
            if(data.email.trim()==""){
                err.email="field required"
            }
            if(data.password==""){
                err.password="field required"
            }
            seterror(err)
            if(Object.keys(err).length==0){
            const response=await axios.post("http://localhost:8080/organization/login",data)
            const token=response.data.token 
            localStorage.setItem("Token",token)
            alert("Login Successfully")
            navigate("/organizationhome")
           }
         }

        catch(err){
            console.log(err)
                        if(err instanceof AxiosError){
                            if(err.response?.data){
                                seterror({password:err.response.data.message})
                            }
                        }
                      
            alert("Login Failed")
        }
    }
    return(
    <>
    <div className="org-img">
        
        <div className="organization-form">
       
        <form className="organization-login-form">
             <h2>Organization Login Page</h2>
            <label htmlFor="email">Username:</label>
            <input type="email" name="email" onChange={change}/>
            <p>{error.email}</p>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" onChange={change} /> 
            <p>{error.password}</p>
             <button type="submit" onClick={login}>Login</button>
             <h3>Don't have an account?? <Link to="/organizationreg">Click here!!</Link></h3>
        </form>

    </div>
    </div>
    
    </>
    )
}
export default Organizationlogin



