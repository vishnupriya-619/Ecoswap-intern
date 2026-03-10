import { useState } from "react"
import instance from "../../utils/apiclient"
import {useNavigate} from "react-router"
import "../../styles/userreg.css"
function Userreg(){
    const navigate=useNavigate()
    const[data,setdata]=useState({userName:"",email:"",mobile:"",locality:"",district:"",state:"",password:""})
    const[file,setfile]=useState(null)
     function change(e){
            setdata({...data,[e.target.name]:e.target.value})

     }
     function uploadimage(e){
        setfile(e.target.files[0])
     }
     async function register(e){
        e.preventDefault()
        try{
            const formData=new FormData()
            formData.append("userName",data.userName)
            formData.append("email",data.email)
            formData.append("mobile",data.mobile)
            formData.append("locality",data.locality)
            formData.append("district",data.district)
            formData.append("state",data.state)
            formData.append("password",data.password)
            formData.append("Profile_pic",file)
            const reponse=await instance.post("/user/register",formData)
            alert("Registration successfull")
            navigate("/userlogin")

        }
        catch{
            alert("Failed")
        }

     }
    return(
        <>
        <div className="user-register-container">

      
        <form className="user-register-form">
            <h2>Registration Form</h2>
            <label htmlFor="userName">User Name:</label>
            <input type="text" name="userName" onChange={change} />

            <label htmlFor="email">Email:</label>
            <input type="email" name="email" onChange={change} />

            <label htmlFor="mobile">Contact Number:</label>
            <input type="tel" name="mobile" onChange={change} />

            <label htmlFor="locality">Locality:</label>
            <input type="text" name="locality" onChange={change} />

            <label htmlFor="district">District:</label>
            <input type="text" name="district" onChange={change} />

            <label htmlFor="state">State:</label>
            <input type="text" name="state" onChange={change} />

            <label htmlFor="password">Password:</label>
            <input type="password" name="password" onChange={change} />

            <label htmlFor="profilepic">Profile Picture:</label>
            <input type="file" name="profilepic" onChange={uploadimage}  />

            <button type="submit"  className="user-register-btn" onClick={register}>Register</button>

        </form>
          </div>
        </>
    )
}
export default Userreg