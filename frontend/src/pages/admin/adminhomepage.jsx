
import "../../styles/adminhome.css";
import { Link } from "react-router";


function AdminHome() {


  return (
    <>
    <div className="admin-home-container">

   
    <nav className="admin-sidebar">
      <div className="admin-logo" >
        <h1>Eco Swap</h1>
        <h2>Admin</h2>
      </div>
     
            <ul className="admin-nav-links">
              <li><Link>Home</Link></li>
               <li><Link to="/adminuser">Users</Link></li>
                <li><Link to="/adminorganization">Organizations</Link></li>
                <li><Link to="/adminitems">Items</Link></li>
                 <li><Link>Complaints</Link></li>
                  {/* <li><Link to="/adminprofile">Profile</Link></li> */}
                  <li><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/></svg></Link></li>
            </ul>
     

    </nav>
    <div className="admin-welcome-box">
      <h1>Welcome to EcoSwap</h1>
    </div>
     </div>
    </>
  )
}

export default AdminHome;
