import { useState, useEffect } from "react"
import instance from "../../utils/apiclient"
import "../../styles/userviewitem.css"
import { Link } from "react-router"


function Userviewitem() {
    const[details, setdetails] = useState([])
    async function getitemdetails() {
        const response = await instance.get("/user/userproductview")
        setdetails(response.data.userproducts)


    }
    useEffect(() => {
        getitemdetails()
    }, [])

    return (
        <>
            <div className="user-view-wrapper">
                <div className="user-view-header">
                <Link to="/userhome"><button className="user-back-btn" >← Back</button></Link>
                <h1 className="user-view-title">User Items</h1>
                </div>

            <div className="user-view-container">
             {
            details.map((item) => {
                return (
                    <div className="user-view-card">
                        <img src={"http://localhost:8080/uploads/" + item.image} alt="item" />

                        <div className="user-card-content">
                            <h2>{item.productName}</h2>
                            <p><strong>Description:</strong> {item.description}</p>
                            <p><strong>Category:</strong> {item.category}</p>
                            <p><strong>Quantity:</strong></p>
                            <p><strong>Price:</strong> ₹{item.price}</p>
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

export default Userviewitem