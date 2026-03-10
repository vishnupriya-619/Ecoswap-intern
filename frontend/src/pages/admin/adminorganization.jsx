import { useState, useEffect } from "react"
import instance from "../../utils/apiclient"
import "../../styles/adminorganization.css"
import { Link } from "react-router"


function Adminorganization() {
    const[details, setdetails] = useState([])
    const[refresh,setRefresh] = useState(false)
    async function getitemdetails() {
        const response = await instance.get("/admin/adminorganization")
        setdetails(response.data.orgview)


    }
    useEffect(() => {
        getitemdetails()
    }, [refresh])

    async function activate(organizationid){
        await instance.patch("/admin/activate",{organizationid})
        setRefresh(!refresh)
        alert("Organization activated successfully")
    }

    async function deactivate(organizationid){
        await instance.patch("/admin/deactivate",{organizationid})
        setRefresh(!refresh)
        alert("Organization deactivated successfully")
    }

    return (
        <>
            <div className="admin-view-wrapper">
                <div className="admin-view-header">
                <Link to="/adminhome"><button className="admin-back-btn" >← Back</button></Link>
                <h1 className="admin-view-title">Organizations</h1>
                </div>

            <div className="admin-view-container">
             {
            details.map((item) => {
                return (
                    <div className="admin-view-card">
                        <img src={"http://localhost:8080/uploads/" + item.profilepic} alt="item" />

                        <div className="admin-card-content">
                            <h2>{item.userName}</h2>
                            <p><strong>Email:</strong> {item.email}</p>
                            <p><strong>Mobile:</strong> {item.mobile}</p>
                            <p><strong>Locality:</strong>{item.mobile}</p>
                            <p><strong>District:</strong> {item.district}</p>
                            <p><strong>State:</strong> {item.state}</p>
                        
                        <p> 
                            {item.Activated === true ? (
                                <span className="status-badge activated">
                                    Activated
                                </span>
                            ) : (
                                <button onClick={()=>{activate(item._id) }} className='btn btn-outline-primary'>Activate</button>
                            )}
                
                            {item.Activated === false ? (
                                <span className="status-badge deactivated">
                                    Deactivated
                                </span>
                            ) : (
                                <button onClick={()=>{deactivate(item._id) }} className='btn btn-outline-secondary'>Deactivate</button>
                            )}
                        </p>   
                        
                            
                        </div>
                    </div>
                )
            })
        }
    </div>

</div>


        </>
    )

}

export default Adminorganization