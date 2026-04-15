import { useState, useEffect } from "react"
import instance from "../../utils/apiclient"
import "../../styles/userorder.css"
import { Link } from "react-router"

function UserOrder() {
    const[details, setdetails] = useState([])
    async function getitemdetails() {
        const response = await instance.get("/user/orders")
        setdetails(response.data.buyproducts)

    }
    useEffect(() => {
        getitemdetails()
    },[])

    return (
        
        <>
            <div className="user-orders-page">
               <Link to="/userhome"><button className="user-back-btn" >← Back</button></Link>
  <h2 className="orders-title">MY ORDERS</h2>

  <div className="user-order-container">
    {details.map((item) => (
      <div className="user-order-additem">
        <img src={"http://localhost:8080/uploads/" + item.productId.image} />

        <h1>{item.productId.productName}</h1>
        <p><strong>Description:</strong> {item.productId.description}</p>
        <p><strong>Category:</strong> {item.productId.category}</p>
        <p><strong>Quantity:</strong> {item.productId.quantity}</p>
        <p><strong>Price:</strong> ₹{item.productId.price}</p>
      </div>
    ))}
  </div>
</div>

        </>
    )
}

export default UserOrder