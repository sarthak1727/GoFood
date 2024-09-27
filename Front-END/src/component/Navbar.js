import React, { useState } from 'react';
import {Link,useNavigate} from 'react-router-dom'
import Badge from 'react-bootstrap/Badge';
import Modal from '../Modal';
import Cart from '../screens/Cart';

export default function Navbar() {

const [cartView,setCartView] = useState(false)
  const navigate =useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem("authToken");
    navigate("/login")
  }
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-success">
  <Link class="navbar-brand fs-1 fst-italic" to="/">GoFood</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav me-auto mb-2">
      <li class="nav-item">
        <Link class="nav-link active fs-5" to="#">Home <span class="sr-only"></span></Link>
      </li>
     {(localStorage.getItem("authToken"))?
     <li class="nav-item">
     <Link class="nav-link active fs-5" to="#">My Orders <span class="sr-only"></span></Link>
   </li>
   :""
     }
     
     
    </ul>
    {(!localStorage.getItem("authToken"))?
    <div class='d-flex'>
    <li class="btn bg-white text-success mx-1">
        <Link class="nav-link" to="/login">Login</Link>
      </li>
      <li class="btn bg-white text-success mx-1">
        <Link class="nav-link" to="/createuser">Signup</Link>
      </li>
    </div>
    :
    <div>
    <div class="btn bg-white text-success mx-1" onClick={()=>{setCartView(true)}}>
        My Cart
        <Badge pill bg="danger"> 2</Badge>
      </div>
      {cartView? <Modal onClose={()=>setCartView(false)}><Cart/></Modal> :null}
<div class="btn bg-white text-danger mx-2" onClick={handleLogout}>
        Logout
      </div>
      </div>
  }
  </div>
</nav>
  )
}


