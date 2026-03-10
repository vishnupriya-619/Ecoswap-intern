import { useState } from "react"
import "../../styles/useritemadd.css"
import instance from "../../utils/apiclient"
import { useNavigate } from "react-router"
import { Link } from "react-router"
function Useritemadd(){
  const navigate=useNavigate()
    const[data,setdata]=useState({productName:"",description:"",category:"",quantity:"",price:""})
    const[file,setfile]=useState(null)
     function change(e){
            setdata({...data,[e.target.name]:e.target.value})

     }
     function uploadimage(e){
        setfile(e.target.files[0])
     }

    async function additem(e){
      e.preventDefault()
      
      try{
         const formData=new FormData()
        formData.append("productName",data.productName)
        formData.append("description",data.description)
        formData.append("category",data.category)
        formData.append("quantity",data.quantity)
        formData.append("price",data.price)
        formData.append("cover_image",file)

        const response= await instance.post("/product/add",formData)
        alert("Add item successfully")
        navigate("/userviewitem")
      }
      catch{

        alert("Failed")
      }


    }
    return(
     <>
     <div className="user-itempage">
        <h1>Add Item Page</h1>
        <div className="user-home-logo">
          <Link to="/userhome"> <svg xmlns="http://www.w3.user/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg></Link>
        </div>
   
       <form className="user-add-item">

        <label htmlFor="productName">Product Name:</label>
        <input type="text" name="productName" onChange={change} />

        <label htmlFor="description">Description:</label>
        <input type="text" name="description" onChange={change} />

        <label htmlFor="category">Category:</label>
        <input type="text" name="category" onChange={change} />

        <label htmlFor="quantity">Quantity:</label>
        <input type="text" name="quantity" onChange={change} />

        <label htmlFor="price">Price:</label>
        <input type="number" name="price" onChange={change} />

        <label htmlFor="imge">Picture:</label>
        <input type="file" name="imge" onChange={uploadimage} />

         <button type="submit"  onClick={additem}>Add item</button>



     </form>
       </div>
     </>

    )
} 
export default Useritemadd