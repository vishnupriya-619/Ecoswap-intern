import { Link } from "react-router";
import "../../styles/uservieworgprdct.css";
import { useState, useEffect } from "react";
import instance from "../../utils/apiclient";

function Vieworgprdts() {
  const [details, setdetails] = useState([]);

  
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [account, setAccount] = useState("");
  const [cvv, setCvv] = useState("");

  async function getitemdetails() {
    const response = await instance.get("/product/view");
    setdetails(response.data.products);
  }

  useEffect(() => {
    getitemdetails();
  }, []);

  // Open modal with clicked product
  function openModal(item) {
    setSelectedItem(item);
    setQuantity(1);
    setAccount("");
    setCvv("");
    setShowModal(true);
  }

  // Payment simulate
  async function handlePayment() {
    if (!account || !cvv) {
      alert("Please fill all payment details.");
      return;
    }
    const response=await instance.post("/user/buy",{productId:selectedItem._id,quantity})
    alert("✔ Successful Payment!");
    const idx  = details.findIndex((item)=>item._id==selectedItem._id)
    details[idx].quantity = details[idx].quantity - quantity
    setdetails([...details])
    setShowModal(false);
  }

  return (
    <>
      <div className="user-view-wrapper">
        <div className="user-view-header">
          <Link to="/userhome">
            <button className="user-back-btn">← Back</button>
          </Link>
          <h1 className="user-view-title">Organization Items</h1>
        </div>

        <div className="user-view-container">
          {details.map((item) => {
            if(item.quantity==0){
              return (
                <div className="user-view-card" key={item._id}>
                <img
                  src={"http://localhost:8080/uploads/" + item.image}
                  alt="item"
                />

                <div className="user-card-content">
                  <h2>{item.productName}</h2>
                  <p>
                    <strong>Description:</strong> {item.description}
                  </p>
                  <p>
                    <strong>Category:</strong> {item.category}
                  </p>
                  <p>
                    <strong>Quantity:</strong> {item.quantity}
                  </p>
                  <p>
                    <strong>Price:</strong> ₹{item.price}
                  </p>
                <p className="sold-out">❌  <span className="sold-out-text">Sold Out</span> </p>
                </div>
                </div>
              )
            }
            return (
              <div className="user-view-card" key={item._id}>
                <img
                  src={"http://localhost:8080/uploads/" + item.image}
                  alt="item"
                />

                <div className="user-card-content">
                  <h2>{item.productName}</h2>
                  <p>
                    <strong>Description:</strong> {item.description}
                  </p>
                  <p>
                    <strong>Category:</strong> {item.category}
                  </p>
                  <p>
                    <strong>Quantity:</strong> {item.quantity}
                  </p>
                  <p>
                    <strong>Price:</strong> ₹{item.price}
                  </p>

                  <button
                    className="buy-btn"
                    onClick={() => openModal(item)}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ---------- PAYMENT MODAL ---------- */}
      {showModal && selectedItem && (
        <div className="payment-modal-overlay">
          <div className="payment-modal">
            <h2>Payment Details</h2>

            <label>Account Number:</label>
            <input
              type="text"
              value={account}
              onChange={(e) => setAccount(e.target.value)}
              placeholder="Enter account number"
            />

            <label>CVV:</label>
            <input
              type="password"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              placeholder="Enter CVV"
            />

            <label>Quantity:</label>
            <div className="qty-box">
              <button onClick={() => quantity > 1 && setQuantity(quantity - 1)}>
                -
              </button>
              <span>{quantity}</span>
              <button onClick={() => quantity<selectedItem.quantity && setQuantity(quantity + 1)}>+</button>
            </div>

            <p className="amount-line">
              <strong>Total Amount: </strong>
              ₹{selectedItem.price * quantity}
            </p>

            <div className="modal-buttons">
              <button className="close-btn" onClick={() => setShowModal(false)}>
                Close
              </button>
              <button className="pay-btn" onClick={handlePayment}>
                Pay
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Vieworgprdts;
