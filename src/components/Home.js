import React from "react";
import Navbar from "./Navbar";
import './Home.css'

const Home=()=>{
    
return (
    <div>
    <Navbar/>
   <div className="main-con">
    <h1 className="head1 mb-3"> When Innovation <br/> 
    <div className="head-butt-con"> Meets <button className="inv"> Investment </button> </div></h1>
    <p className="para"> Empowering Trading Through Advanced Technology</p>

    <button className="dapp"> Open dApp</button>
   </div>

</div>
)


}

export default Home