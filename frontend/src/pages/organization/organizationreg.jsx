import { useState } from "react"
import instance from "../../utils/apiclient"
import {useNavigate} from "react-router"
import "../../styles/organizationreg.css"
function Organizationreg(){
    const navigate=useNavigate()
    const[data,setdata]=useState({organizationName:"",email:"",mobile:"",locality:"",district:"",state:"",password:""})
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
            formData.append("organizationName",data.organizationName)
            formData.append("email",data.email)
            formData.append("mobile",data.mobile)
            formData.append("locality",data.locality)
            formData.append("district",data.district)
            formData.append("state",data.state)
            formData.append("password",data.password)
            formData.append("Profile_pic",file)
            const reponse=await instance.post("/organization/register",formData)
            alert("Registration successfull")
            navigate("/organizationlogin")

        }
        catch{
            alert("Failed")
        }

     }
    return(
        <>
        <div className="org-reg-img">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/002/850/230/small/shopping-with-reusable-bag-free-vector.jpg" alt="" />
    
        <div className="org-register-container">

      
        <form className="org-register-form">
            <h2>Registration Form</h2>
            <label htmlFor="organizationName">Organization Name:</label>
            <input type="text" name="organizationName" onChange={change} />

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

            <button type="submit"  className="org-register-btn" onClick={register}>Register</button>

        </form>
          </div>
              </div>
        </>
    )
}
export default Organizationreg