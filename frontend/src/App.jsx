import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route} from 'react-router'
import {Toaster,toast} from 'sonner'
import Landingpage from './pages/landingpage'
import About from './pages/about'
import Organizationreg from './pages/organization/organizationreg'
import Organizationlogin from './pages/organization/organizationlogin'
import Contact from './pages/contact'
import Userreg from './pages/user/userreg'
import Userlogin from './pages/user/userlogin'
import OrganizationHome from './pages/organization/organizationhome'
import Organizationitemadd from './pages/organization/orgitemadd'
import Orgviewitem from './pages/organization/orgviewitem'
import Organizationprofile from './pages/organization/organizationprofile'

import Adminlogin from './pages/admin/adminlogin'
import UserHome from './pages/user/userhome'
import UserProfile from './pages/user/userprofile'
import Useritemadd from './pages/user/useritemadd'
import Userviewitem from './pages/user/userviewitem'
import AdminHome from './pages/admin/adminhomepage'
import UserOrder from './pages/user/userorder'
import Vieworgprdts from './pages/user/uservieworgprdct'
import UserSwapitem from './pages/user/userswapitem'
import Userswaprequest from './pages/user/userswaprequest'
import Useracceptrequest from './pages/user/useracceptrequest'
import Adminuser from './pages/admin/adminuser'
import Adminorganization from './pages/admin/adminorganization'
import Adminitems from './pages/admin/adminitems'
import OrgviewOrder from './pages/organization/orgvieworder'

function App() {
 

  return (
    <>
    <Toaster/>
      <Routes>
         <Route path="/" element={<Landingpage/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/contact" element={<Contact/>}/>
         <Route path="/organizationreg" element={<Organizationreg/>}/>
         <Route path="/organizationlogin" element={<Organizationlogin/>}/>
         <Route path="/userreg" element={<Userreg/>}/>
         <Route path="/userlogin" element={<Userlogin/>}/>
         <Route path="/organizationhome" element={<OrganizationHome/>}/>
         <Route path="/organizationadditem" element={<Organizationitemadd/>}/>
         <Route path="/organizationviewitem" element={<Orgviewitem/>}/>
         <Route path="/organizationprofile" element={<Organizationprofile/>}/>
         <Route path="/adminlogin" element={<Adminlogin/>}/>
         <Route path="/adminhome" element={<AdminHome/>}/>
         <Route path="/userhome" element={<UserHome/>}/>   
         <Route path="/userprofile" element={<UserProfile/>}/>   
         <Route path="/useritemadd" element={<Useritemadd/>}/>  
         <Route path="/userviewitem" element={<Userviewitem/>}/>  
         <Route path="/userorder" element={<UserOrder/>}/>   
         <Route path="/uservieworgprdct" element={<Vieworgprdts/>}/>   
         <Route path="/userswapitem" element={<UserSwapitem/>}/>  
         <Route path="/userswaprequest" element={<Userswaprequest/>}/>  
        <Route path="/useracceptrequest" element={<Useracceptrequest/>}/>  
        <Route path="/adminuser" element={<Adminuser/>}/>  
        <Route path="/adminorganization" element={<Adminorganization/>}/>  
        <Route path="/adminitems" element={<Adminitems/>}/>  
        <Route path="/orgvieworder" element={<OrgviewOrder/>}/>  
      </Routes>
    </>
  )
}

export default App
