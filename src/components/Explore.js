import React from "react";
import './Explore.css'


const Explore=()=>{
     return(
        <div className="explore-con p-5">
        <div className="box-layout">
          <h4 className="explore-hd"> Explore Our <span className="sp"> dApp </span></h4>
          <p className="expl-pa"> 
          EthAi is an AI-powered dApp designed to help traders make smarter, data-driven decisions.<br/>
           By tracking smart money flows, monitoring key wallets, and providing real-time market <br/>
           insights, EthAi empowers users to stay ahead of trends. The platform offers intuitive AI <br/>
           features for asset recommendations, market analysis, and personalized crypto Q&A,<br/>
            making it the ultimate tool for both novice and experienced traders.
          </p>
          <button className="explore-more"> Open dApp </button>
        </div>
        </div>
     )
}

export default Explore 