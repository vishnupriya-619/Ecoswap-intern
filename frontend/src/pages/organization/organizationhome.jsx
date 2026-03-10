
import "../../styles/organizationhome.css";
import { Link } from "react-router";


function OrganizationHome() {


  return (
    <>
    <div className="org-home-container">

   
    <nav className="org-sidebar">
      <div className="org-logo" >
        <h1>Eco Swap</h1>
        <h2>Organization</h2>
      </div>
     
            <ul className="org-nav-links">
              <li><Link>Home</Link></li>
               <li><Link to="/organizationadditem">Items</Link></li>
                <li><Link to="/organizationviewitem">View Items</Link></li>
                 <li><Link to="/orgvieworder">View Orders</Link></li>
                  <li><Link to="/organizationprofile">Profile</Link></li>
                  <li><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/></svg></Link></li>
            </ul>
     

    </nav>
    <div className="org-welcome-box">
      <h1>Welcome to EcoSwap</h1>
    </div>
     </div>
    </>
  )
}

export default OrganizationHome;
