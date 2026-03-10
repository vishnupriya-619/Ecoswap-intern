import { useState, useEffect } from "react"
import instance from "../../utils/apiclient"
import "../../styles/orgvieworder.css"

function OrgviewOrder() {
    const[details, setdetails] = useState([])
    async function getitemdetails() {
        const response = await instance.get("/organization/orgvieworder")
        setdetails(response.data.buyproducts)

    }
    useEffect(() => {
        getitemdetails()
    },[])

    return (
        
        <>
            <div className="org-orders-page">
  <h2 className="view-orders-title">MY ORDERS</h2>

  <div className="org-order-container">
    {details.map((item) => (
      <div className="org-order-additem">
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

export default OrgviewOrder