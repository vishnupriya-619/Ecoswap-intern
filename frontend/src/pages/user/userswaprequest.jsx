import React, { useState,useEffect } from 'react'
import "../../styles/userswaprequest.css"
import instance from '../../utils/apiclient'

function Userswaprequest() {
    const [details,setDetails]=useState([])
    const [refresh,setRefresh]=useState([])
    async function swapRequest(){
        const response=await instance.get("/user/userswaprequest")
        setDetails(response.data.swaprequestview)
    }
    useEffect(()=>{
        swapRequest()

    },[])

     async function accept(applicationid) {
        await instance.patch("/user/accept",{applicationid})
        setRefresh(!refresh)
        alert("Accepted successfully")
    }
   async function reject(applicationid) {
        await instance.patch("/user/reject",{applicationid})
        setRefresh(!refresh)
        alert("Rejected ")
    }
  return (
    <>
    <div className='swap-request'>
        <h1>Swap Request</h1>
        <div className='swap-request-container'>
            {details.map((item)=>(
                <div className='swap-request-list'>
                    <img src={"http://localhost:8080/uploads/"+ item.productId.image}/>
                    <p><strong>{item.productId.name}</strong></p>
                    <p><strong>{item.productId.description}</strong></p>
                    <p><strong>{item.productId.price}</strong></p>
                    <p><strong>{item.productId.quantity}</strong></p>
                    <button type="submit"  className="user-accept-btn" onClick={() => { accept(item._id) }}>Accept</button>
                    <button type="submit"  className="user-reject-btn" onClick={() => { reject(item._id) }}>Reject</button>
                </div>
            ))}

        </div>
       <button></button>
    </div>
    </>
  )
}

export default Userswaprequest

