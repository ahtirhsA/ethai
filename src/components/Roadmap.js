import React from "react";
import './Roadmap.css'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


const Roadmap=()=>{
   return(
      <div className="p-5" id="road">
        <h4 className="rd-head"> Roadmap</h4>
        <div className="pre-con-rd mb-2">
        <div className="ex-con">
           <button className="phase"> PHASE 1 </button>
           <h3 className="rd-h3"> Kicking Off</h3>
           <ul className="rd-ul">
              <li className="rd-li"> 
                <button className="check"><CheckCircleOutlineIcon style={{fontSize:'18px'}}/></button>
               Launch of EthAi&nbsp;&nbsp;: &nbsp;&nbsp;Offically
              </li>
              <li className="rd-li">
              <button className="check"><CheckCircleOutlineIcon style={{fontSize:'18px'}}/></button>
               Development of Core AI Agents
              </li>
              <li className="rd-li">
              <button className="check"><CheckCircleOutlineIcon style={{fontSize:'18px'}}/></button>
               User Onboarding Campaign
              </li>
              <li className="rd-li">
              <button className="check"><CheckCircleOutlineIcon style={{fontSize:'18px'}}/></button>
               Community Engagement Initiatives
              </li>
           </ul>
        </div>
        <div>
          <img className='pre-im' src="https://res.cloudinary.com/djzenbn7g/image/upload/v1729046430/pse8cacagu8kl2qiqhy0.png" alt="con1"/>
        </div>
        </div>

        <div className="pre-con-rd">
        
        <div>
          <img className='pre-im' src="https://res.cloudinary.com/djzenbn7g/image/upload/v1729046854/rungspziopw1cnifsm4a.png" alt="con1"/>
        </div>

        <div className="ex-con">
           <button className="phase"> PHASE 2 </button>
           <h3 className="rd-h3"> Bigger Insights</h3>
           <ul className="rd-ul">
              <li className="rd-li"> 
                <button className="check"><CheckCircleOutlineIcon style={{fontSize:'18px'}}/></button>
                Introduction of Advanced AI Agents
              </li>
              <li className="rd-li">
              <button className="check"><CheckCircleOutlineIcon style={{fontSize:'18px'}}/></button>
               Strategic Partnership
              </li>
              <li className="rd-li">
              <button className="check"><CheckCircleOutlineIcon style={{fontSize:'18px'}}/></button>
                User Interface Optimization
                </li>
              <li className="rd-li">
              <button className="check"><CheckCircleOutlineIcon style={{fontSize:'18px'}}/></button>
               Comprehensive Marketing Campaign
              </li>
           </ul>
        </div>
        </div>

        <div className="pre-con-rd mb-2">
        <div className="ex-con">
           <button className="phase"> PHASE 3 </button>
           <h3 className="rd-h3"> Full Power </h3>
           <ul className="rd-ul">
              <li className="rd-li"> 
                <button className="check"><CheckCircleOutlineIcon style={{fontSize:'18px'}}/></button>
              Introduction of Enhanced Features
              </li>
              <li className="rd-li">
              <button className="check"><CheckCircleOutlineIcon style={{fontSize:'18px'}}/></button>
               API Integration for Data Access
              </li>
              <li className="rd-li">
              <button className="check"><CheckCircleOutlineIcon style={{fontSize:'18px'}}/></button>
              Launch of Community-Driven Initiatives
              </li>
              <li className="rd-li">
              <button className="check"><CheckCircleOutlineIcon style={{fontSize:'18px'}}/></button>
               Continuous Improvement and Updates
              </li>
           </ul>
        </div>
        <div>
          <img className='pre-im' src="https://res.cloudinary.com/djzenbn7g/image/upload/v1729046691/oukroa3kq6ajbltgmdk5.png" alt="con1"/>
        </div>
        </div>

      </div>
   )
}

export default Roadmap