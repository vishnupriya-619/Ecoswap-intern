import { useState, useEffect } from "react"
import instance from "../../utils/apiclient"
import "../../styles/adminitems.css"
import { Link } from "react-router"


function Adminitems() {
    const[details, setdetails] = useState([])
    const[det,setDet]=useState([])
    async function getitemdetails() {
        const response = await instance.get("/admin/adminitems")
        setdetails(response.data.orgitemsview)
        setDet(response.data.useritemsview)

    }
    useEffect(() => {
        getitemdetails()
    }, [])

    return (
        <>
            <div className="admin-itemview-wrapper">
                <div className="admin-itemview-header">
                <Link to="/adminhome"><button className="admin-back-btn" >← Back</button></Link>
                <h1 className="admin-itemview-title">All Products</h1>
                </div>

            <div className="admin-itemview-container">
             {
            details.map((item) =>  (
                    <div className="admin-itemview-card">
                        <img src={"http://localhost:8080/uploads/" + item.image} alt="item" />

                        <div className="admin-itemcard-content">
                            <h2>{item.productName}</h2>
                            <p><strong>Description:</strong> {item.description}</p>
                            <p><strong>Category:</strong> {item.category}</p>
                            <p><strong>Quantity:</strong></p>
                            <p><strong>Price:</strong> ₹{item.price}</p>
                            
                            
                        </div>
                    </div>
                )
            
            )}
            {det.map((item)=>(
                    <div className="admin-itemview-card">
                        <img src={"http://localhost:8080/uploads/" + item.image} alt="item" />

                        <div className="admin-itemcard-content">
                            <h2>{item.productName}</h2>
                            <p><strong>Description:</strong> {item.description}</p>
                            <p><strong>Category:</strong> {item.category}</p>
                            <p><strong>Quantity:</strong>{item.quantity}</p>
                            <p><strong>Price:</strong> ₹{item.price}</p>
                            
                            
                        </div>
                    </div>
                )
            )}
        

    </div>

</div>


        </>
    )

}

export default Adminitems