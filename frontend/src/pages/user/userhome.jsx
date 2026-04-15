import { Link } from "react-router";
import "../../styles/userhome.css";

function UserHome() {
  return (
    <div>
      <nav className="user-navbar">
        <div className="user-logo">
          <h1>Eco Swap</h1>
        </div>

        <ul className="user-nav-links">
          <li><Link to="">Home</Link></li>

          <li className="dropdown">
            <Link>Dashboard</Link>
            <ul className="dropdown-menus"> 
              <li><Link to="/useritemadd">Add Item</Link></li>
              <li><Link to="/userviewitem">View Item</Link></li>
              <li><Link to="/userorder">My Orders</Link></li>
              <li><Link to="/userswapitem">Swap Item</Link></li>
            </ul>
          </li>

          <li><Link to="/uservieworgprdct">Products</Link></li>

          <li className="dropdown">
            <Link>Requests</Link>
            <ul className="dropdown-menus"> 
              <li><Link to="/userswaprequest">Swap Request</Link></li>
              <li><Link to="/useracceptrequest">Accept Request</Link></li>
            </ul>
          </li>

          <li><Link to="/userprofile">Profile</Link></li>

          <li>
            <Link to="/">
              <svg xmlns="http://www.w3.user/2000/svg"
                width="24" height="24" viewBox="0 0 24 24"
                fill="none" stroke="red" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                <path d="m16 17 5-5-5-5" />
                <path d="M21 12H9" />
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              </svg>
            </Link>
          </li>
        </ul>
      </nav>

      {/* ===== HEADER SECTION (ADDED) ===== */}
      <div className="user-header">
        <div className="header-left">
          <h1>Swap Smart. Live Sustainable 🌱</h1>
          <p>
            Exchange unused items, reduce waste, and be part of a greener
            community with Eco Swap.
          </p>
          <Link to="/uservieworgprdct" className="header-btn">
            Explore Products
          </Link>
        </div>

        <div className="header-right">
          <img
            src="https://ewastekuldeep.com/wp-content/uploads/2021/01/Benefits-of-Recycling.png"
            alt="eco swap"
          />
        </div>
      </div>
      
    </div>
  );
}

export default UserHome;