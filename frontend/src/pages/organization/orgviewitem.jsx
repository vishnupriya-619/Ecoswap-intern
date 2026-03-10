import { useState, useEffect } from "react"
import instance from "../../utils/apiclient"
import "../../styles/orgviewitem.css"
import { Link } from "react-router"


function Orgviewitem() {
    const[details, setdetails] = useState([])
    async function getitemdetails() {
        const response = await instance.get("/product/view")
        setdetails(response.data.products)


    }
    useEffect(() => {
        getitemdetails()
    }, [])

    return (
        <>
            <div className="org-view-wrapper">
                <div className="org-view-header">
                <Link to="/organizationhome"><button className="org-back-btn" >← Back</button></Link>
                <h1 className="org-view-title">Organization Items</h1>
                </div>

            <div className="org-view-container">
             {
            details.map((item) => {
                return (
                    <div className="org-view-card">
                        <img src={"http://localhost:8080/uploads/" + item.image} alt="item" />

                        <div className="org-card-content">
                            <h2>{item.productName}</h2>
                            <p><strong>Description:</strong> {item.description}</p>
                            <p><strong>Category:</strong> {item.category}</p>
                            <p><strong>Quantity:</strong>1</p>
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

export default Orgviewitem