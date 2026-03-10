import { useState, useEffect } from "react"
import instance from "../../utils/apiclient"
import "../../styles/useracceptrequest.css"
import { Link } from "react-router"


function Useracceptrequest() {
    const[details, setdetails] = useState([])
    async function getitemdetails() {
        const response = await instance.get("/user/acceptrequest")
        setdetails(response.data.accepthistory)


    }
    useEffect(() => {
        getitemdetails()
    }, [])

    return (
        <>
            <div className="user-accept-wrapper">
                <div className="user-accept-header">
                <Link to="/userhome"><button className="user-back-btn" >← Back</button></Link>
                <h1 className="user-accept-title">Accept Request History</h1>
                </div>

            <div className="user-accept-container">
             {
            details.map((item) => {
                return (
                    <div className="user-accept-card">
                        <img src={"http://localhost:8080/uploads/" + item.productId.image} alt="item" />

                        <div className="user-card-content">
                            <h2>{item.productId.productName}</h2>
                            <p> {item.productId.description}</p>
                            <p><strong>Category:</strong> {item.productId.category}</p>
                            <p><strong>Quantity:</strong>{item.productId.quantity}</p>
                            <p><strong>Price:</strong> ₹{item.productId.price}</p>

                            <p>Accept swap with your product</p>
                             <h2>{item.requestitem.productName}</h2>
                             <p><strong>Category:</strong> {item.requestitem.category}</p>
                            <p><strong>Quantity:</strong>{item.requestitem.quantity}</p>
                            <p><strong>Price:</strong> ₹{item.requestitem.price}</p>

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

export default Useracceptrequest