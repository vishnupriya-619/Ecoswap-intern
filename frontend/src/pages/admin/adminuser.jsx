import { useState, useEffect } from "react"
import instance from "../../utils/apiclient"
import "../../styles/adminuser.css"
import { Link } from "react-router"


function Adminuser() {
    const[details, setdetails] = useState([])
    async function getitemdetails() {
        const response = await instance.get("/admin/adminuser")
        setdetails(response.data.userview)


    }
    useEffect(() => {
        getitemdetails()
    }, [])

    return (
        <>
            <div className="admin-view-wrapper">
                <div className="admin-view-header">
                <Link to="/adminhome"><button className="admin-back-btn" >← Back</button></Link>
                <h1 className="admin-view-title">Users</h1>
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

export default Adminuser