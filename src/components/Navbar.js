import React from "react";
import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar=()=>{
   return(
    <nav className="nav-con-mod ">
        <div className="logo-container">
       <img className='logo' src="https://res.cloudinary.com/djzenbn7g/image/upload/v1728959819/kxwqfl91xp0aklldpr4m.png" alt="ethai"/>
       <span className="logoHeading"> EthAi</span>
       </div>

       <ul className="ul">

         <a href="#features">
          <li className="li">Features</li>
          </a>
           
         <a href="#abt">
          <li className="li">Why Us</li>
          </a>

         <a href="#toko">
          <li className="li">Tokenomics</li>
          </a>
         

         <a href="#road">
          <li className="li">Roadmap</li>
          </a>
          
       </ul>
      
      <div>
      <button className="login"> Log in </button>
      <button className="whitepaper "> Whitepaper </button>
      </div>

    </nav>
   )
}

export default Navbar