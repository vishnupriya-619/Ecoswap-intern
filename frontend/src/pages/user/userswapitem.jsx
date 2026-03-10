 import { useState, useEffect,useRef } from "react"
 import instance from "../../utils/apiclient"
 import "../../styles/userswapitem.css"
 import { Link } from "react-router"
 import {toast} from 'sonner'
 
 
 function UserSwapitem() {
    const dialog=useRef()
    const [product,setProduct]=useState([])
     const[details, setdetails] = useState([])
     const [id,setId]=useState()
     const [swap,setswap]=useState("")
     async function getitemdetails() {
         const response = await instance.get("/user/userswapitemview")
         setdetails(response.data.userswap)
     }
     useEffect(() => {
         getitemdetails()
     }, [])
     async function getProductData(){
        const response=await instance.get("/user/getproduct")
        setProduct(response.data.getproduct)
     }
     async function request(item)
     {
setId(item._id)
        dialog.current.showModal()
        getProductData()
        // const response=await instance.post("/user/userrequest")
        // toast.success('Request successfully sent')
     }
     function swapitem(e)
     {
        setswap(e.target.value);
     }
     async function swaprequest()
     {
        const response=await instance.post("/user/userrequest",{productId:id,requestitem:swap}) 
                dialog.current.close()
            toast.success('Request successfully sent')
     }
     function close(){
        dialog.current.close()
     }
 
     return (
         <>
             <div className="user-swap-wrapper">
                 <div className="user-swap-header">
                 <Link to="/userhome"><button className="user-back-btn" >← Back</button></Link>
                 <h1 className="user-swap-title">User Items</h1>
                 </div>
 
             <div className="user-swap-container">
              {
             details.map((item) => {
                 return (
                     <div className="user-swap-card">
                         <img src={"http://localhost:8080/uploads/" + item.image} alt="item" />
 
                         <div className="user-swap-content">
                             <h2>{item.productName}</h2>
                             <p><strong>Quantity:</strong></p>
                             <p><strong>Price:</strong> ₹{item.price}</p>
                              <button type="submit"  className="user-swap-btn" onClick={()=>request(item)}>Swap Now</button>
                         </div>
                     </div>
                 )
             })
         }
     </div>
     <dialog ref={dialog}>
  <button autofocus onClick={close}>Close</button>
  <h3>Choose Your Product to Swap</h3>
  <select onChange={swapitem} name="swap">
    <option value="">--Select your product--</option>
    {product.map((item)=>{
        return(
        
            <option value={item._id}>{item.productName}</option>
        )
    })}
  </select>
  <button type="submit"  className="user-rqst-btn" onClick={swaprequest}>Send Request</button>
</dialog>
 
 </div>
         </>
     )
 
 }
 
 export default UserSwapitem
