import "../../styles/organizationprofile.css"
import { Link } from "react-router"
import { useState, useEffect } from "react"
import instance from "../../utils/apiclient"
function Organizationprofile() {
    const [detailes, setdetailes] = useState()
    const[isediting,setisediting]=useState(false)
    function change(e){
        setdetailes({...detailes,[e.target.name]:e.target.value})
    }
    async function getprofile() {
        const response = await instance.get("/organization/profile")
        setdetailes(response.data.organization)

    }
    useEffect(() => {
        getprofile()
    }, [])
    return (
        <>
            <div className="organizationprofile">
                <div className="profiledetailes">
                    <div className="org-dash-link">
                        <Link to="/organizationhome"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" stroke="black" fill="none" ><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg></Link>
                    </div>
                    <img src={"http://localhost:8080/uploads/" + detailes?.profilepic}
                    alt="Organization Profile"
                    className="org-profile-img" />
                    <div className="org-info-card">
                       {isediting?<input value={detailes?.organizationName} onChange={change} name="organizationName"></input>:<p><strong>Name:</strong>{detailes?.organizationName}</p>} 
                   
                       {isediting?<input value={detailes?.email} onChange={change} name="email"></input>:<p><strong>Email:</strong> {detailes?.email}</p>}
                    
                       {isediting?<input value={detailes?.mobile} onChange={change} name="mobile"></input>: <p><strong>Phone:</strong> {detailes?.mobile}</p>}
                   
                       {isediting?<input value={detailes?.locality} onChange={change} name="locality"></input>: <p><strong>Locality:</strong> {detailes?.locality}</p>}
                   
                       {isediting?<input value={detailes?.district} onChange={change} name="district"></input>:<p><strong>District:</strong> {detailes?.district}</p>}
                   
                       {isediting?<input value={detailes?.state} onChange={change} name="state"></input>:<p><strong>State:</strong> {detailes?.state}</p>}
                    </div>
                    <button type="submit" onClick={
                        async()=>{
                            setisediting(!isediting)
                            if(isediting){
                                await instance.put("/organization/updated",detailes)
                            }
                        }
                    }>Edit</button>

                </div>
            </div>
        </>
    )
}
export default Organizationprofile