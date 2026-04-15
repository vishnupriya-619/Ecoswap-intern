
import "../styles/navbar.css";
import { Link } from "react-router";

function Navbar() {
  return (
    <nav className="navbar">
      
      <div className="nav-logo">
        
        <h2>EcoSwap</h2>
      </div>

      
      <ul className="nav-links">
        <li ><Link to="/">Home</Link></li>
        <li ><Link to="/about">About</Link> </li>
        <li ><Link to="/contact">Contact</Link>  </li>
          <li className="dropdown">
          <Link >Login</Link>
           <ul className="dropdown-menu"> 
              <li><Link to="/adminlogin">Admin</Link></li>
              <li><Link to="/userlogin">User</Link></li>
              <li><Link to="/organizationlogin">Organization</Link></li>
           </ul>
        </li>

        
        <li className="dropdown">
          <Link>Register</Link>
          <ul className="dropdown-menu">
            
            <li><Link to="/userreg">User</Link></li>
            <li><Link to="/organizationreg">Organization</Link></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
